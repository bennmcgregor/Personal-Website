import React, { useState } from 'react'

import Text from '../general/text'
import styles from '../css/erging-classifier/erging-classifier.module.css'

import GoodRowing from '../../assets/erging-classifier/good-rowing-ex.mp4'
import CollapsedRowing from '../../assets/erging-classifier/collapsed-rowing-ex.mp4'

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
        Google Chrome. The entire process of recording yourself and labeling data should take around 45 minutes, plus some time for 
        warmup, setup, and cooldown. Please follow these instructions as closely as possible so that we can collect accurate data:
      </p>
      <ol className={styles.list}>
        <li className={styles.listItem}>
          If you haven't already, grant the site permission to access your camera. You should see a live video feed of yourself.
        </li>
        <li className={styles.listItem}>
          Set up the camera in a well-lit place at the same height as the Concept2 erg seat. Preferably, the camera should be 5 feet 
          away from the rowing machine, and the entire rowing machine should be within the frame of the camera. If this is not possible,
          place the camera at a distance such that your entire body (feet and shins included) is visible in the frame of the camera for 
          the entire stroke. Try to make sure the background is as neutral and decluttered as possible.
        </li>
        <li className={styles.listItem}>
          You'll be doing a 15-minute workout that is designed to tire you out to the point that your weaknesses in form become visible 
          at different rates. So make sure that you get a good race warmup and push yourself to your limits during the workout. The workout
          will be 5 sets of (1.5' @cat 3, 1.5' @cat 5), where the the cat 3 piece is done at a rate between 20 and 26, and the cat 5 
          piece is done at a rate between 28 and 34. Category 3 is your 2k split + 5 seconds, category 5 is your 2k split + 15 seconds. 
          There is no rest for the entire 15 minutes. Short form notation of the workout: 5 x (1.5' @cat3 r20-26, 1.5' @cat5 r28-34). 
          What you want to prioritize during the entire workout is <b>not</b> total distance, but <b>efficiency</b>, measured as distance 
          per stroke. Pick a rate within each range that will optimize this statistic while getting you as close to your target split as 
          possible. <b>Please set up the workout on the monitor as Intervals: Time, 1.5 minutes on, 0 minutes rest.</b> It's imperative that 
          you split up the intervals in this way so that the distance per stroke data can be measured properly afterwards.
        </li>
        <li className={styles.listItem}>
          Once you're set up, press the "START RECORDING" button below. A red recording icon should appear in the top right corner 
          of the video. The program will automatically capture video clips every 9 seconds and save it temporarily to your hard drive.
          If you close the tab accidentally, the data will not be lost. But try to avoid any interruptions to the workout so that 
          you do not have the recover, as this will impact the data collected towards the end of the workout.
        </li>
        <li className={styles.listItem}>
          Once you've finished rowing (and cooling down), you'll have to label each video. Don't close the tab that's open to this page 
          until this is done. The clips will play back in random order. Take some time to look through a few clips without labelling anything 
          to come up with an idea of what, for you, constitutes "strong" and "tired" technique in each of the 4 categories (back pivoting, posture, 
          hands/knees timing, and drive/recovery ratio). Your "strong" technique should not be an idealized form that you are not yet capable of 
          achieving—it should represent <b>where you are at right now</b> in your own training. Likewise, "tired" technique does not mean the form 
          of a novice rower—it should represent the slips in technique that you make when you are tired at the end of a workout. So ideally, if 
          you've pushed yourself hard enough during this workout, there should be an even mix of "strong" and "tired" technique in the data you're 
          labelling.
        </li>
        <li className={styles.listItem}>
          Once you have a clear idea of your strong and tired technique in each category, go back to the first video clip and begin labelling.
          For each clip, determine whether your technique is "strong" (checked box) or "tired" (no check) in each category. See the following 
          section for details on categories. If you're not rowing, or your technique changes significantly between strokes in a clip so that 
          the labelling is ambiguous, select the "NO LABEL" option. Once you've completed your selection, press the next arrow to submit the 
          label and move on to the next clip.
        </li>
        <li className={styles.listItem}>
          Once you've finished labeling, the site will switch back to the video capture screen and begin preparing the labeled videos for
          download. DO NOT REFRESH THE SITE until your browser has finished downloading a zip file called "captured-rowing-data". This may
          take a few minutes depending on your network connection.
        </li>
        <li className={styles.listItem}>
          Benn will need some additional data from you as well. Go into the summary for the workout you just did and take pictures of your screen 
          so that the total distance rowed and average stroke rate on every piece is clearly visible. Record your most recently measured weight.
        </li>
        <li className={styles.listItem}>
          Create a folder with the screen pictures, a text file containing your weight, and the rowing data zip file, and compress the folder into a 
          new zip file. Share this file with Benn. A Google Drive or Dropbox link can be sent to <a href="mailto:benn@bennmcgregor.com">benn@bennmcgregor.com</a>.
          Now you're done! Results of the competition and prizes will be shared with everyone who's submitted data!
        </li>
        <li className={styles.listItem}>
          If you have any concerns about the privacy of your data and how it'll be used before going ahead with this labelling, reach out to 
          Benn and he can explain further. In short, your privacy is a significant consideration in doing this project. While your name will never 
          be stored, your personal data (the video clips, and your weight) are batched together during training. I am planning on making the trained machine 
          learning model available for public use once I'm done with it (posted on <a href="https://github.com/bennmcgregor">github.com/bennmcgregor</a>), 
          however I will not publish the data used to train it (i.e. your personal data).
        </li>
      </ol>
      <p>
        For more information about each category, see the following. For an example labelling of two videos, see the final paragraph in this section.<br/><br/>
        BackPivoting class: Refers to the motion of the back during the stroke. Look at the position of the shoulders relative to the hips at different 
        points in the stroke. For example, in proper rowing, the shoulders should swing in front of the hips before the knees break on the recovery and 
        open up once the knees are down on the drive.<br/><br/>
        Posture class: Refers to the posture of the back. Generally, a straight back corresponds to better posture.<br/><br/>
        HandKneeTiming: Refers to the sequencing of the hands relative to the knees. In proper rowing, the hands would move in a straight line in front 
        of the knees before the knees break on the recovery, and on the drive the knees would begin going down before the hands reach the position of the 
        knees on the drive. When this doesn't happen, it's referred to as "rolling the barrel" since the hands make a curved motion around the knees.<br/><br/>
        DriveRecoveryRatio: The ratio between the time spent on the drive versus on the recovery. This ratio varies over different rates, but generally 
        the recovery should be longer than the drive (or at least not rushed).<br/><br/>
        See the following two videos for examples of how I would label them for myself:
      </p>
      <video controls src={GoodRowing}/>
      <p>
        In this case, I would label all four categories as "Strong", since it's an accurate representation of my rowing technique today.
      </p>
      <video controls src={CollapsedRowing}/>
      <p>
        In this case, I would give it the labels BackPivoting: Strong, Posture: Tired, HandKneeTiming: Strong, DriveRecoveryRatio: Strong, because my posture 
        is clearly more collapsed (curved back) than in the benchmark video from above.<br/><br/>
        <b>Remember that your strong and tired technique may look very different from these videos</b> (it could be more or less clean, for example). It just 
        needs to be an accurate representation of your current technical capability. You can also label videos with more than one "Tired" category at once. 
      </p>
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