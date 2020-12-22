import React, { useRef } from "react"

import videoStyles from '../css/erging-classifier/video.module.css'

function VideoDisplay({ mediaStream, vidSrc, isLabeling, isRecording }) {

  const videoRef = useRef();
  const contentRef = useRef();

  if (!isLabeling && mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
    videoRef.current.src = null;
  }

  if (isLabeling && vidSrc) {
    videoRef.current.srcObject = null;
    videoRef.current.src = vidSrc;
    videoRef.current.load();
  }

  if (contentRef.current && contentRef.current.style) {
    if (isRecording) {
      contentRef.current.style.setProperty('--content-url', 'url(https://upload.wikimedia.org/wikipedia/commons/0/02/Red_Circle%28small%29.svg)')
    } else {
      contentRef.current.style.setProperty('--content-url', '');
    }
  }

  function handleCanPlay() {
    videoRef.current.play();
  }

  return (
    <div className={videoStyles.content} ref={contentRef}>
      <video 
        className={videoStyles.videoPlayer}
        ref={videoRef}
        onCanPlay={handleCanPlay}
        controls={isLabeling}
        autoPlay
        playsInline
      />
    </div>
  );
}

export default VideoDisplay;