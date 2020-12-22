import React, { useState, useEffect } from 'react'
import Dexie from 'dexie'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

import Layout from '../components/general/layout'
import SEO from '../components/general/seo'
import VideoDisplay from '../components/erging-classifier/video-display'
import LabelDisplay from '../components/erging-classifier/label-display'
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
  BACK_PIVOT_ERROR: {
    unique: false,
    label: 'BackPivotError',
  },
  RUSHING_SLIDE: {
    unique: false,
    label: 'RushingSlide',
  },
  KNEES_BREAK_ERROR: {
    unique: false,
    label: 'KneesBreakError',
  },
  COLLAPSED_BACK: {
    unique: false,
    label: 'CollapsedBack',
  },
  CORRECT_ROWING: {
    unique: true,
    label: 'CorrectRowing',
  },
}

const CLIP_LENGTH = 9000;

function ErgingClassifierPage() {
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isLabeling, setIsLabeling] = useState(false);
  const [db, setDB] = useState(null);
  const [recordedVideos, setRecordedVideos] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVidSrc, setCurrentVidSrc] = useState(null);
  const [timer, setTimer] = useState(null);

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
      database.version(1).stores({ clips: "++id,*labels" });
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
      if (db && isLabeling) {
        // initialize the new set of clips to iterate over for labeling
        const videos = await db.clips.toCollection().primaryKeys();
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
        }
  
        // eventually: retrieve the label_options data from the server
      } else if (db && !isLabeling && recordedVideos) {
        // if the database isn't empty, download all the files in the database
        // with filename label-id.webm (eventually: send the data to a server)
        const numRecords = await db.clips.toCollection().count();
        if (numRecords > 0) {
          const zip = new JSZip();
          for (const id of recordedVideos) {
            const record = await db.clips.get(id);
            const filename = "";
            record.labels.forEach((label) => {
              filename = filename + `${label}-`;
            })
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
  }, [isLabeling, db])

  function toggleRecording() {
    if (mediaRecorder) {
      if (!isRecording) {
        setIsRecording(true);
        mediaRecorder.start();
        initializeTimer();
        // TODO: clean up current processes (if necessary)
      } else {
        setIsRecording(false);
        mediaRecorder.stop();
        clearInterval(timer);
        setTimer(null);
        setIsLabeling(true);
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

  async function onLabelSubmitted(labels) {
    // label the current video, move to the next one
    const id = recordedVideos[currentVideoIndex];
    const labelValues = labels.map(label => LABEL_OPTIONS[label].label);
    db.transaction('rw', db.clips, async () => {
      const updated = await db.clips.update(id, {
        labels: labelValues,
      });
      if (updated) {
        console.log(`Labeled new video clip ${id} with labels ${labelValues}`);
      }
    }).catch(err => console.error("Error: Could not label the current video clip"));
    
    if (currentVideoIndex == recordedVideos.length - 1) {
      setIsLabeling(false);
    } else {
      setCurrentVideoIndex(currentVideoIndex + 1);

      if (currentVidSrc) {
        window.URL.revokeObjectURL(currentVidSrc);
      }

      // set video source
      const videoRecord = await db.clips.get(recordedVideos[currentVideoIndex + 1]);
      const url = URL.createObjectURL(videoRecord.data);
      setCurrentVidSrc(url);
    }
  }

  return (
    <Layout>
      <SEO title="Erging Classifier" keywords-={['gatsby', 'application', 'react']}/>
      <div className={styles.verticalLayout}>
        <ErgingClassifierInfoDisplay />
        <VideoDisplay mediaStream={mediaStream} vidSrc={currentVidSrc} isLabeling={isLabeling} isRecording={isRecording} />
        { isLabeling ? 
          <LabelDisplay
            labelOptions={LABEL_OPTIONS}
            onLabelSubmitted={onLabelSubmitted}
            currentClipNum={currentVideoIndex ? currentVideoIndex + 1 : 1}
            totalClips={recordedVideos ? recordedVideos.length : 0}
          /> :
          <button onClick={toggleRecording} disabled={!mediaRecorder}>
            {isRecording ? 'STOP RECORDING' : 'START RECORDING'}
          </button>
        }
      </div>
    </Layout>
  );
}

export default ErgingClassifierPage;
