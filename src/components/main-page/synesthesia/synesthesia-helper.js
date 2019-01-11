import { Song, getSong } from './song'
import sarabande from '../../../assets/synesthesia/Sarabande.mp3'
import nocturne from '../../../assets/synesthesia/Nocturne.mp3'
import rhapsody from '../../../assets/synesthesia/Rhapsody.mp3'

//Functions that could be in the main file, but are very long. So they're here.

//must be in the same order as songs in the Synesthesia component.
var audioFiles = [sarabande, nocturne, rhapsody];

//returns a keyframe transition object for a note type in a chord or a melody note
//type can be 'root', 'bass', 'fifth', 'highest', 'remaining', 'melody'
function getKTO(data, index, timeArr, type) {
  //type is an optional argument; if left undefined, will get the melody.

  var colorArr = data.getHarmonyColorsArray(index, type);
  if (type === "melody") {
    colorArr = data.getMelodyColorsArray(index);
  }

  var obj = {}
  obj.background = colorArr[0];
  obj.transition = {};
  obj.transition.type = "keyframes";
  obj.transition.values = colorArr;
  obj.transition.times = timeArr;
  obj.transition.duration = data.totalDuration * 1000;
  obj.transition.loop = Infinity;

  return obj;
}

/*
returns an array of all the possible songs played by the Synesthesia component.
each song is an object of the form:
{
name
type ('harmony' or 'melody')
index (to be used as a reference if there are multiple melodies/chord progressions in a piece)
composer
animationProps: for melody it's just one keyframe transition object
                for harmony it's this object:
                {
                  root keyframe transition object
                  bass kto
                  fifth kto etc
                  highest
                  remaining
                }NO: ALL OBJECTS ARE THE SAME. FOR MELODY SET OPACITY OF EXTRA OBJECTS TO ZERO.
}
On click, the state is toggled, and this object is passed as a prop to the Animation component.
*/
function getStates(music) {
  var states = [];
  var index = 0;
  for (var key in music) {
    if (!music.hasOwnProperty(key)) continue;

    let temp = new Song(getSong(music, key), key);

    for (var i=0; i<temp.harmony.length; i++) {
      if (temp.harmony[i].opacity > 0) {
        let animation = {
          name: temp.name,
          type: "harmony",
          index: index,
          composer: temp.composer,
        };
        index++;

        states.push(Object.assign({}, animation))
      }
    }

    for (var j=0; j<temp.melody.length; j++) {
      if (temp.melody[j].opacity > 0) {
        let animation = {
          name: temp.name,
          type: "melody",
          index: index,
          composer: temp.composer,
        };
        index++;

        states.push(Object.assign({}, animation))
      }
    }
  }
  console.log(states);
  return states;
}

//returns the animation property for the corresponding type to be passed to the posed divs.
//type can be either 'root', 'bass', 'fifth', 'highest', or 'remaining'.
function getPoseProps(music, type) {
  var typeObj = {};
  var index = 0; //the index of the song, for reference by the main component.
  for (var key in music) {
    if (!music.hasOwnProperty(key)) continue;

    let temp = new Song(getSong(music, key), key);

    for (var i=0; i<temp.harmony.length; i++) {
      if (temp.harmony[i].opacity > 0) {
        let timeArr = temp.getHarmonyTimesArray(i);

        typeObj[index] = getKTO(temp, i, timeArr, type);
        index++;
      }
    }

    for (var j=0; j<temp.melody.length; j++) {
      if (temp.melody[j].opacity > 0) {


        if (type === 'root') {
          let timeArr = temp.getMelodyTimesArray(j);
          typeObj[index] = getKTO(temp, j, timeArr, 'melody');
        } else {
          typeObj[index] = {background: 'rgba(255, 255, 255, 0)'};
        }
        index++;
      }
    }
  }
  var props = {};
  props[type] = typeObj;
  console.log(props);
  return props;
}

function randomPosition(min, max) {
  return Math.random()*(max-min)+min;
}

export {getStates, getPoseProps, randomPosition, audioFiles}
