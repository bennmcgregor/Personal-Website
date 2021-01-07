import React, { useState } from "react"

import styles from '../css/erging-classifier/label-display.module.css'

function SeekDisplay({ onLabelSubmitted, currentClipNum, totalClips, videoRef }) {
  const [beginning, setBeginning] = useState(0);
  const [end, setEnd] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [nolabel, setNolabel] = useState(false);

  function nextLabel() {
    const beg = beginning.toString() + "#beg";
    const ending = end.toString() + "#end";
    const labelString = nolabel ? "NO_LABEL" : (
      flipped ? ending + "#" + beg : beg + "#" + ending
    );

    onLabelSubmitted(labelString, true);
  }

  function setBeg(e) {
    e.preventDefault();
    if (videoRef.current && videoRef.current.currentTime) {
      setBeginning(videoRef.current.currentTime);
    }
  }

  function setEnding(e) {
    e.preventDefault();
    if (videoRef.current && videoRef.current.currentTime) {
      setEnd(videoRef.current.currentTime);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <form className={styles.form}>
          <div>
            <button 
              onClick={setBeg} id="beg">Beginning</button>
            <label className={styles.label} htmlFor="beg">{beginning}</label>
          </div>
          <div>
            <button onClick={setEnding} id="end">End</button>
            <label className={styles.label} htmlFor="end">{end}</label>
          </div>
          <div>
            <input type="checkbox" id="flipped" onClick={event => setFlipped(event.target.checked)}/>
            <label className={styles.label} htmlFor="flipped">Flipped beginning and end?</label>
          </div>
          <div>
            <input type="checkbox" id="NO_LABEL" onClick={event => setNolabel(event.target.checked)}/>
            <label className={styles.label} htmlFor="NO_LABEL">No Label</label>
          </div>
        </form>
      </div>
      <div className={styles.rightContainer}>
        <div>
          Video Clip {currentClipNum} / {totalClips}
        </div>
        <div className={styles.container}>
          <button onClick={nextLabel}>
            Submit label
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeekDisplay;