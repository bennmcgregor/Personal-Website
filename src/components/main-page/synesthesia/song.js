import {colorToRgba} from './colorfuncs.js'
import { MelodyNote, HarmonyChord } from './notes'

//songs would be the json object that stores all the songs.
//name would be the key of the particular song.
function getSong(songs, name) {
  return songs[name];
}

class Song {
  //name is a string, the name of the songs
  //song is the json object that holds all the song's data.
  constructor(song, name) {
    this.name = name;

    this.tempo = song.meta.tempo;
    this.timeSignature = song.meta.timeSignature;
    this.composer = song.meta.composer;

    this.harmony = this.getHarmonyChords(song.harmony);
    this.melody = this.getMelodyNotes(song.melody);

    //the total duration of the song in seconds
    //always use this.harmony since its length is at least 1.
    this.totalDuration = this.getTotalDuration(this.harmony);
  }

  /*Parses the 'harmony' array in the input file to return an array of 'chords' objects
  Each 'chords' object corresponds to a harmonic progression.
  The second property of the 'chords' object, 'chords', is an array of HarmonyChord objects
  Each corresponds to a chord in the harmonic progression,
  and the colors and duration of the chord can be taken from the object.
  Primarily for internal use in the constructor
  */
  getHarmonyChords(harmony) {
    var harmonyChords = [];
    var chords = {
      "opacity": 0,
      "chords": [], //an array of HarmonyChord objects
    };
    for (var i=0; i<harmony.length; i++) {
      chords.opacity = harmony[i].opacity;
      for (var j=0; j<harmony[i].chords.length; j++) {
        chords.chords.push(new HarmonyChord(
          harmony[i].chords[j].duration,
          harmony[i].chords[j].notes,
          this.tempo,
          harmony[i].chords[j].root,
          harmony[i].chords[j].fifth
        ));
      }
      harmonyChords.push(Object.assign({}, chords));
      chords.chords = [];
    }
    return harmonyChords;
  }

  /*Parses the 'melody' array in the input file to return an array of 'notes' objects
  Each 'notes' object corresponds to a sequence of notes that form a melody.
  The second property of the 'notes' object, 'notes', is an array of MelodyNote objects
  Each corresponds to a note in the melody, and the color and duration of the note
  can be taken from the object.
  Primarily for internal use in the constructor.
  */
  getMelodyNotes(melody) {
    var melodyNotes = [];
    var notes = {
      "opacity": 0,
      "notes": [], //an array of MelodyNote objects
    };
    for (var i=0; i<melody.length; i++) {
      notes.opacity = melody[i].opacity;
      for (var j=0; j<melody[i].notes.length; j++) {
        notes.notes.push(new MelodyNote(
          melody[i].notes[j].duration,
          melody[i].notes[j].note,
          this.tempo
        ));
      }
      melodyNotes.push(Object.assign({}, notes)); //deep copy of the object.
      notes.notes = [];
    }
    return melodyNotes;
  }

  //the function assumes that all the lengths of the animations are the same
  //always uses the harmony of the song to determine the length of the song.
  //for internal use.
  getTotalDuration(harmony) {
    var total = 0;
    for (var i=0; i<harmony[0].chords.length; i++) {
      total += harmony[0].chords[i].getTime();
    }
    return total;
  }

  /*
  Returns an array of colors corresponding to each note in the melody.
  For use by React-Pose to animate the graphic.
  The last color in the array is the initial color,
  so that the animation fades out to the beginning again.
  index is the index of the melody array in the input.
  */
  getMelodyColorsArray(index) {
    var arr = [];
    for (var i=0; i<this.melody[index].notes.length; i++) {
      arr.push(this.melody[index].notes[i].getColor());
    }
    arr.push(arr[0]);
    return arr;
  }

  /*
  Returns an array of points in time at which the color of the animation should switch.
  For use by React-Pose to animate the graphic.
  All the times are less than one (as they should all add up to 1).
  The last index in the array is 1.
  */
  getMelodyTimesArray(index) {
    var arr = [0];
    var total = 0;
    for (var i=0; i<this.melody[index].notes.length; i++) {
      total += this.melody[index].notes[i].getTime();
      arr.push(total/this.totalDuration);
    }
    arr[arr.length-1] = 1;
    return arr;
  }

  /*
  Returns an array of colors corresponding to the specified chord note type in the harmony.
  type can be 'root', 'bass', 'fifth', 'highest', 'remaining'.
  If there is no color specified, an rgba value with opacity 0 is given.
  */
  getHarmonyColorsArray(index, type) {
    var arr = [];
    var color = "#ffffff";
    for (var i=0; i<this.harmony[index].chords.length; i++) {
      if (this.harmony[index].chords[i].getChordProps()[type] === "") {
        //the animation will fade to a transparent version of the previous color.
        arr.push(colorToRgba(color));
      } else {
        color = this.harmony[index].chords[i].getChordProps()[type];
        arr.push(color);
      }
    }
    arr.push(arr[0]);
    return arr;
  }

  getHarmonyTimesArray(index) {
    var arr = [0];
    var total = 0;
    for (var i=0; i<this.harmony[index].chords.length; i++) {
      total += this.harmony[index].chords[i].getTime();
      arr.push(total/this.totalDuration);
    }
    arr[arr.length-1] = 1;
    return arr;
  }
}

export { Song, getSong }
