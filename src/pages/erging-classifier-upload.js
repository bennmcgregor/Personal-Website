import React, { useState, useEffect, useRef } from 'react'
import Dexie from 'dexie'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import VideoDisplay from '../components/erging-classifier/video-display'
import LabelDisplay from '../components/erging-classifier/label-display'
import ReviewDisplay from '../components/erging-classifier/review-display'
import ErgingClassifierInfoDisplay from '../components/erging-classifier/info-display'
import styles from '../components/css/erging-classifier/erging-classifier.module.css'

const CAPTURE_OPTIONS = {
  video: true,
};

const RECORDING_OPTIONS = {
  mimeType: "video/webm; codecs=h264",
};

// TODO: retrieve labels from remote server
const LABEL_OPTIONS = {
  BASELINE: 'Baseline',
  BELOW_BASELINE: 'Below Baseline',
  NO_LABEL: 'No Label',
}

const CLIP_LENGTH = 9000;

export const STATES = {
  HOME: 'home',
  RECORDING: 'recording',
  REVIEWING: 'reviewing',
  LABELING: 'labeling',
};

function ErgingClassifierPage() {
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [displayState, setDisplayState] = useState(STATES.HOME);
  const [db, setDB] = useState(null);
  const [recordedVideos, setRecordedVideos] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVidSrc, setCurrentVidSrc] = useState(null);
  const [timer, setTimer] = useState(null);

  const fileRef = useRef();
  const [fileState, setFileState] = useState(null);

  // video display
  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(CAPTURE_OPTIONS);
        setMediaStream(stream);
      } catch(err) {
        console.error(err);
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach(track => {
          track.stop();
        });
      }
    }
  }, [mediaStream]);

  // recording video
  useEffect(() => {
    function initializeRecorder() {
      try {
        const recorder = new MediaRecorder(mediaStream, RECORDING_OPTIONS);
        recorder.ondataavailable = handleDataAvailable;
        setMediaRecorder(recorder);
      } catch(err) {
        console.error(err);
      }
    }

    function handleDataAvailable(event) {
      if (event.data.size > 0 && db) {
        var blob = new Blob([event.data], { type: "video/mp4" });
        // save to the database
        db.transaction('rw', db.clips, async () => {
          const id = await db.clips.add({
            data: blob,
          });
          console.log(`Wrote new video clip ${id} to the database`);
        }).catch(err => console.error("Could not write new video clip to database"));
      }
    }

    if (mediaStream && !mediaRecorder) {
      initializeRecorder();
    }
  });

  // local database for video clips
  useEffect(() => {
    function initializeDB() {
      const database = new Dexie("ClipDatabase");
      database.version(1).stores({ clips: "++id,*label" });
      database.open().catch((err) => {
        console.error(err.stack || err);
      })
      setDB(database);
    }

    if (!db) {
      initializeDB();
    }
  });

  // listen to page state change
  useEffect(() => {
    async function update() {
      if (displayState === STATES.LABELING) {
        if (recordedVideos.length > 0) {
          const videoRecord = await db.clips.get(recordedVideos[currentVideoIndex]);
          console.log(videoRecord);
          const url = URL.createObjectURL(videoRecord.data);
          setCurrentVidSrc(url);
        }

        // eventually: retrieve the label_options data from the server
      } else if (displayState === STATES.HOME && recordedVideos) {
        // if the database isn't empty, download all the files in the database
        // with filename label-id.webm (eventually: send the data to a server)
        const numRecords = await db.clips.toCollection().count();
        if (numRecords > 0) {
          const zip = new JSZip();
          const sortedVideos = recordedVideos.sort();
          for (const id of sortedVideos) {
            const record = await db.clips.get(id);
            let filename = "";
            if (record.label !== 'NO_LABEL') {
              filename = `${record.label}-`;
            }
            filename = filename + `${Date.now().toString()}.mp4`;
            zip.file(filename, record.data);
          }
          const content = await zip.generateAsync({ type: "blob" });
          FileSaver.saveAs(content, "captured-rowing-data.zip");
          
          // clear the database
          db.clips.clear();
          setRecordedVideos(null);
        }
        setCurrentVideoIndex(0);
        setCurrentVidSrc(null);
      }
    }

    update();
  }, [displayState, db])

  useEffect(() => {
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }

    async function update() {
      if (displayState === STATES.REVIEWING) {
        // TEMP
        // load mp4s into db
        db.clips.clear();

        for (const file of fileState) {
          var blob = new Blob([file], { type: "video/mp4" });
          // save to the database
          const result = await db.transaction('rw', db.clips, async () => {
            const id = await db.clips.add({
              data: blob,
            });
            console.log(`Wrote new video clip ${id} to the database`);
          })//.catch(err => console.error("Could not write new video clip to database"));
        }

        // initialize the new set of clips to iterate over for labeling
        let videos = await db.clips.toCollection().primaryKeys();
        videos = shuffle(videos);
        setRecordedVideos(videos);
        console.log("videos", videos);

        if (currentVidSrc) {
          window.URL.revokeObjectURL(currentVidSrc);
        }
        if (videos.length > 0) {
          const videoRecord = await db.clips.get(videos[currentVideoIndex]);
          console.log(videoRecord);
          const url = URL.createObjectURL(videoRecord.data);
          setCurrentVidSrc(url);
        }

        /* initialize the new set of clips to iterate over for labeling
        let videos = await db.clips.toCollection().primaryKeys();
        videos = shuffle(videos);
        setRecordedVideos(videos);
        console.log(videos);

        if (currentVidSrc) {
          window.URL.revokeObjectURL(currentVidSrc);
        }
        if (videos.length > 0) {
          const videoRecord = await db.clips.get(videos[currentVideoIndex]);
          console.log(videoRecord);
          const url = URL.createObjectURL(videoRecord.data);
          setCurrentVidSrc(url);
        }*/
      }
    }

    update();
  }, [displayState, db])

  function toggleRecording() {
    if (mediaRecorder) {
      if (displayState === STATES.HOME) {
        setDisplayState(STATES.RECORDING);
        mediaRecorder.start();
        initializeTimer();
        // TODO: clean up current processes (if necessary)
      } else if (displayState === STATES.RECORDING) {
        mediaRecorder.stop();
        clearInterval(timer);
        setTimer(null);
        setDisplayState(STATES.REVIEWING);
      }
    }
  }

  function initializeTimer() {
    const interval = setInterval(() => {
      mediaRecorder.stop();
      mediaRecorder.start();
    }, CLIP_LENGTH);
    setTimer(interval);
  }

  async function onLabelSubmitted(label, isNext) {
    // label the current video, move to the next one
    const id = recordedVideos[currentVideoIndex];
    db.transaction('rw', db.clips, async () => {
      const updated = await db.clips.update(id, {
        label
      });
      if (updated) {
        console.log(`Labeled new video clip ${id} with label ${label}`);
      }
    }).catch(err => console.error("Error: Could not label the current video clip"));
    
    let newIndex = currentVideoIndex;

    if (isNext && currentVideoIndex === recordedVideos.length - 1) {
      setDisplayState(STATES.HOME);
      return;
    } else if (isNext) {
      newIndex += 1;
    } else {
      newIndex -= 1;
    }

    setCurrentVideoIndex(newIndex);

    if (currentVidSrc) {
      window.URL.revokeObjectURL(currentVidSrc);
    }

    // set video source
    const videoRecord = await db.clips.get(recordedVideos[newIndex]);
    const url = URL.createObjectURL(videoRecord.data);
    setCurrentVidSrc(url);
  }

  async function onNextVideo() {
    setCurrentVideoIndex(currentVideoIndex + 1);

    if (currentVidSrc) {
      window.URL.revokeObjectURL(currentVidSrc);
    }

    // set video source
    const videoRecord = await db.clips.get(recordedVideos[currentVideoIndex + 1]);
    const url = URL.createObjectURL(videoRecord.data);
    setCurrentVidSrc(url);
  }

  async function onPrevVideo() {
    setCurrentVideoIndex(currentVideoIndex - 1);

    if (currentVidSrc) {
      window.URL.revokeObjectURL(currentVidSrc);
    }

    // set video source
    const videoRecord = await db.clips.get(recordedVideos[currentVideoIndex - 1]);
    const url = URL.createObjectURL(videoRecord.data);
    setCurrentVidSrc(url);
  }

  function onReadyToLabel() {
    if (currentVidSrc) {
      window.URL.revokeObjectURL(currentVidSrc);
    }
    setCurrentVidSrc(null);
    setCurrentVideoIndex(0);
    setDisplayState(STATES.LABELING);
  }

  function onFormSubmit(event) {
    setFileState(event.target.uploadFile.files);
    event.preventDefault();
  }

  useEffect(() => {
    console.log(fileState)
  }, [fileState]);

  return (
    <Layout>
      <SEO title="Erging Classifier" keywords-={['gatsby', 'application', 'react']}/>
      <form className="upload" ref={fileRef} onSubmit={onFormSubmit}>
        <input type="file" name="uploadFile" accept=".mp4" required multiple />
        <br/><br/>
        <input type="submit" />
      </form>
      <div className={styles.verticalLayout}>
        <ErgingClassifierInfoDisplay />
        <VideoDisplay mediaStream={mediaStream} vidSrc={currentVidSrc} displayState={displayState} />
        { displayState === STATES.REVIEWING ?
            <ReviewDisplay
              onNextVideo={onNextVideo}
              onPrevVideo={onPrevVideo}
              onReadyToLabel={onReadyToLabel}
              currentClipNum={currentVideoIndex ? currentVideoIndex + 1 : 1}
              totalClips={recordedVideos ? recordedVideos.length : 0}
            />
          :
            ( displayState === STATES.LABELING ?
                <LabelDisplay
                  labelOptions={LABEL_OPTIONS}
                  onLabelSubmitted={onLabelSubmitted}
                  currentClipNum={currentVideoIndex ? currentVideoIndex + 1 : 1}
                  totalClips={recordedVideos ? recordedVideos.length : 0}
                />
              :
                <button onClick={toggleRecording} disabled={!mediaRecorder}>
                  {displayState === STATES.RECORDING ? 'STOP RECORDING' : 'START RECORDING'}
                </button>
            )
        }
      </div>
    </Layout>
  );
}

export default ErgingClassifierPage;
