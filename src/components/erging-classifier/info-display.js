import React, { useState } from 'react'

import Text from '../general/text'
import styles from '../css/erging-classifier/erging-classifier.module.css'

import CorrectRowing from '../../assets/erging-classifier/correct-rowing-ex.mp4'
import BackPivotError from '../../assets/erging-classifier/back-pivot-err-ex.mp4'
import CollapsedBack from '../../assets/erging-classifier/collapsed-back-ex.mp4'
import KneesBreakError from '../../assets/erging-classifier/knees-break-err-ex.mp4'
import RushingSlide from '../../assets/erging-classifier/rushing-slide-ex.mp4'
import KneesBreakRushSlide from '../../assets/erging-classifier/knees-break-rush-slide-ex.mp4'

function ErgingClassifierInfoDisplay() {
  const [displayingInfo, setDisplayingInfo] = useState(false);

  function toggleInfoDisplay() {
    if (displayingInfo) {
      setDisplayingInfo(false);
    } else {
      setDisplayingInfo(true);
    }
  }

  const info = (
    <>
      <p>
        Use this site to record data for the rowing technique classifier. Please use access this site on a laptop or desktop running
        Google Chrome. How to use:
      </p>
      <ol className={styles.list}>
        <li className={styles.listItem}>
          If you haven't already, grant the site permission to access your camera. You should see a live video feed of yourself.
        </li>
        <li className={styles.listItem}>
          Set up the camera in a well-lit place 5 feet away from the Concept2 erg at the same height as the erg seat. The entire rowing
          machine should be within the frame of the camera. Try to make sure the background is as neutral and decluttered as possible.
        </li>
        <li className={styles.listItem}>
          Once you're set up, press the "START RECORDING" button below. A red recording icon should appear in the top right corner 
          of the video. The program will automatically capture video clips every 9 seconds and save it temporarily to your hard drive.
          Make sure you have around 1-2 GB of space on your computer (that amount should last for around 60 minutes, depending on your webcam).
          If you close the tab accidentally, the data will not be lost. Just reopen the page and begin recording again where you left off.
        </li>
        <li className={styles.listItem}>
          Once you've finished rowing, you'll have to label each video. The clips will play back in order. For each clip, select one or
          more of the checkboxes below the video corresponding to the most prominent technical errors (or lack thereof) in the clip.
          See the section below for an example of each technical error. If the video does not have any rowing or the technical errors are
          ambiguous, do not select any options and simply press "SUBMIT". Note that if the browser closes during labeling, you will need
          to relabel every single video since your last download.
        </li>
        <li className={styles.listItem}>
          Once you've finished labeling, the site will switch back to the video capture screen and begin preparing the labeled videos for
          download. DO NOT REFRESH THE SITE until your browser has finished downloading a zip file called "captured-rowing-data". This may
          take a few minutes depending on your network connection and the number of clips you recorded.
        </li>
        <li className={styles.listItem}>
          Share the zip file with Benn. A Google Drive or Dropbox link can be sent to <a href="mailto:benn@bennmcgregor.com">benn@bennmcgregor.com</a>.
          Now you're done!
        </li>
      </ol>
      <p>
        The following is information about each class that you can label videos with. It's possible to label a video with multiple 
        error classes. When labeling a stroke with an error(s), every error should be very clearly obvious on the majority of strokes 
        (3 or 4) in the video clip. In cases where the error is on 1 or 2 strokes, do not label the clip. If the error is only on strokes 
        that are cut off by the beginning or end of the video, you can ignore the error. In ambiguous cases where the technique tilts 
        towards correct form, label it as such. For other cases, do not assign any labels.<br/><br/>
        CorrectRowing class: This is for correct rowing technique. It cannot be selected in combination with any error class. 
        See the following video for an example:
      </p>
      <video controls src={CorrectRowing}/>
      <p>
        BackPivotError class: Any issue where the back swings over the hips out of sequence. In proper rowing, the shoulders should 
        swing in front of the hips before the knees break on the recovery and open up once the knees are down on the drive. 
        Some examples of a BackPivotError include the back never swinging over (shoulder always behind the hips), swinging over at 
        the catch (such as in the video below), or swinging open at the start of the drive.
      </p>
      <video controls src={BackPivotError}/>
      <p>
        CollapsedBack class: A slouching posture during the entire stroke. There should be a clear curve in the back, such as in the 
        example below:
      </p>
      <video controls src={CollapsedBack}/>
      <p>
        KneesBreakError class: When the knees begin bending before the hands are in front of them on the recovery, resulting in a "rolling 
        the barrel" motion of the handle (ie the handle does not travel in a straight line, but arcs over the knees). This class in only 
        concerned with the sequencing of the hands and the knees. Any clips involving incorrect sequencing with the back and the knees should 
        be classified as BackPivotErrors. See the following clip for clarification:
      </p>
      <video controls src={KneesBreakError}/>
      <p>
        RushingSlide class: When the time ratio between the recovery and the drive is off. Specifically, this refers to the drive being slower 
        than the recovery at any rate. We're not concerned with enforcing more specific ratios such as 2:1 or 3:1 recovery:drive time.
      </p>
      <video controls src={RushingSlide}/>
      <p>
        Remember that multiple error labels can be assigned to a single clip, such as in this example featuring a KneesBreakError and a 
        RushingSlide error:
      </p>
      <video controls src={KneesBreakRushSlide}/>
      <p>
        Let Benn know if you encounter any issues or have any questions. Thank you so much for helping!
      </p>
    </>
  );

  return (
    <div className={styles.textContainer}>
      <p>
        ROWING TECHNIQUE CLASSIFIER DATA COLLECTION
      </p>
      <Text
        input={displayingInfo ? "CLOSE INSTRUCTIONS" : "OPEN INSTRUCTIONS"}
        handleClick={toggleInfoDisplay}
      />
      <br/>
      {displayingInfo ? info : <></> }
    </div>
  );
}

export default ErgingClassifierInfoDisplay;