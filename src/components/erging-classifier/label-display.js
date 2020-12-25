import React, { useState, useRef } from "react"

import styles from '../css/erging-classifier/label-display.module.css'

function LabelDisplay({ labelOptions, onLabelSubmitted, currentClipNum, totalClips }) {
  const [labels, setLabels] = useState([]);
  const formRef = useRef();

  function handleLabelSelection(event) {
    let newLabels;
    if (event.target.checked) {
      newLabels = [...labels];
      const label = event.target.id;

      if (labelOptions[label].unique) {
        newLabels = [];
      }

      for (const tag of formRef.current.getElementsByTagName("input")) {
        if (labelOptions[label].unique && tag.id != label) {
          tag.checked = false;
        } else if (!labelOptions[label].unique && labelOptions[tag.id].unique) {
          tag.checked = false;
          const index = newLabels.indexOf(tag.id);
          if (index > -1) {
            newLabels.splice(index, 1);
          }
        }
      }
      
      newLabels.push(event.target.id);
    } else {
      newLabels = [...labels];
      const index = newLabels.indexOf(event.target.id);
      if (index > -1) {
        newLabels.splice(index, 1);
      }
    }
    
    setLabels(newLabels);
  }

  function nextLabel() {
    onLabelSubmitted(labels, true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p>
          Strong: <b>Checked</b>, Tired: <b>Unchecked</b>
        </p>
        <form className={styles.form} ref={formRef}>
          {Object.entries(labelOptions).map(([key, value]) => {
            return (
              <div>
                <input type="checkbox" id={key} onClick={handleLabelSelection}></input>
                <label className={styles.label} for={key}>
                  {value.label}
                </label>
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
          <button onClick={nextLabel}>
            Submit label
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabelDisplay;