import React, { useState, useRef } from "react"

import styles from '../css/erging-classifier/label-display.module.css'

function LabelDisplay({ labelOptions, onLabelSubmitted, currentClipNum, totalClips }) {
  const [label, setLabel] = useState(null);

  function nextLabel() {
    onLabelSubmitted(label, true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <form className={styles.form}>
          {Object.entries(labelOptions).map(([key, value]) => {
            return (
              <div>
                <input type="radio" name="labels" id={key} onClick={event => setLabel(event.target.id)}/>
                <label className={styles.label} for={key}>{value}</label>
              </div>
            );
          })}
        </form>
      </div>
      <div className={styles.rightContainer}>
        <div>
          Video Clip {currentClipNum} / {totalClips}
        </div>
        <div className={styles.container}>
          <button onClick={nextLabel} disabled={!label}>
            Submit label
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabelDisplay;