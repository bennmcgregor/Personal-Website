import React from "react"

import styles from '../css/erging-classifier/review-display.module.css'

function ReviewDisplay({ onNextVideo, onPrevVideo, onReadyToLabel, currentClipNum, totalClips }) {
  return (
    <div className={styles.container}>
      {<p>
        Use the Next and Previous buttons to navigate around the video clips and get an idea of what "Strong" and "Tired" form 
        looks like to you. Check the instructions for more details on this. Once you're ready to start labelling, press the "Ready to Label" 
        button. Note that you won't be able to go back once you've pressed ready.
      </p>}
      <div className={styles.controls}>
        <div>
          <button onClick={onPrevVideo} disabled={currentClipNum == 1}>
            Previous Video
          </button>
          <button onClick={onNextVideo} disabled={currentClipNum == totalClips}>
            Next Video
          </button>
        </div>
        <div>
          Video Clip {currentClipNum} / {totalClips}
        </div>
      </div>
      <button className={styles.ready} onClick={onReadyToLabel}>
        Ready to Label
      </button>
    </div>
  );
}

export default ReviewDisplay;