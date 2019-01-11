import ColorMix from "colormix/src"
import {hexToRgb} from './colorfuncs.js'

//evenly mixes all the colors in the provided array of colors, 'c'.
function mixColors(c) {
  var percents = [];
  var colors = [];
  var remaining = 100;
  var percent = Math.round((1/c.length)*100);
  for(var i=0; i<c.length; i++) {
    if (i === (c.length-1)) { //prevents float errors.
      percents.push(remaining);
    } else {
      percents.push(percent);
      remaining -= percent;
    }
    var rgb = hexToRgb(c[i]);
    colors.push(new ColorMix.Color(rgb.r, rgb.g, rgb.b));
  }
  var mixedColor = ColorMix.mix(colors, percents);
  return mixedColor.toString('rgb'); //.toString('hex') doesn't work!
}

class Color {
  constructor(duration, notes, bpm) {
    this.duration = duration; //the time in beats of the chord/note.
    this.notes = notes; //an array of note names.
    this.bpm = bpm; //the tempo of the song.

    this.colors = {
      "R": "#ffffff",
      "A": "#ce1200",
      "Ab": "#db3906",
      "A#": "#aa2702",
      "B": "#0e1430",
      "Bb": "#e1940f",
      "B#": "#0d2929",
      "C": "#ffef00",
      "Cb": "#ffcb0a",
      "C#": "#d2dc02",
      "D": "#472f17",
      "Db": "#794e17",
      "D#": "#3b3f15",
      "E": "#002fa7",
      "Eb": "#464e7f",
      "E#": "#034e6e",
      "F": "#a8dd01",
      "Fb": "#c0cc07",
      "F#": "#42a507",
      "G": "#b27a41",
      "Gb": "#d58B2d",
      "G#": "#747e2d",
    };
  }

  //changes the array of note names into an array of corresponding colors.
  notesToColor() {
    var noteColors = [];
    for(var i=0; i<this.notes.length; i++) {
      noteColors.push(this.colors[this.notes[i]]);
    }
    return noteColors;
  }
}

class MelodyNote extends Color {
  constructor(duration, notes, bpm) {
    super(duration, notes, bpm);

    this.oneBeat = 60/(this.bpm); //the length of one beat, in seconds.

  }

  //returns the length in seconds of the note
  getTime() {
    return this.oneBeat * this.duration;
  }

  //returns the hexcode value of the color of the note.
  //if there are multiple notes, the colors are mixed evenly.
  getColor() {
    return mixColors(this.notesToColor());
  }
}

class HarmonyChord extends Color {
  constructor(duration, notes, bpm, root, fifth) {
    super(duration, notes, bpm);

    this.oneBeat = 60/(this.bpm); //the length of one beat, in seconds.

    this.root = root;
    this.fifth = fifth;
  }

  //returns the length in seconds of the chord.
  getTime() {
    return this.oneBeat * this.duration;
  }

  /*
  Returns an object with the corresponding colors of each part of the chord.
  Some entries may be left blank if there are duplicates (as outlined in input.js).
  "remaining" is a composite color of the remaining notes in the chord,
  with each color mixed evenly.
  */
  getChordProps() {
    var colors = this.notesToColor();
    var props = {
      "root": colors[this.root],
      "bass": "",
      "fifth": "",
      "highest": "",
      "remaining": "",
    };
    var remainingArr = [];

    var indices = [];
    for (var i=0; i<colors.length; i++) indices.push(1);
    indices[this.root] = 0;

    if (colors[0] !== props.root) {
      props.bass = colors[0];
      indices[0] = 0;
    }
    if (colors[this.fifth] !== props.root && colors[this.fifth] !== props.bass) {
      props.fifth = colors[this.fifth];
      indices[this.fifth] = 0;
    }
    if (colors[colors.length-1] !== props.fifth
        && colors[colors.length-1] !== props.bass
        && colors[colors.length-1] !== props.root) {
      props.highest = colors[colors.length-1];
      indices[indices.length-1] = 0;
    }

    for (i=0; i<colors.length; i++) {
      if (indices[i] === 1) remainingArr.push(colors[i]);
    }
    if (remainingArr.length > 0) props.remaining = mixColors(remainingArr);

    return props;
  }
}

//var test = new HarmonyChord(1.5, ["B", "A", "C", "D", "E"], 58, 0, 3);
/*var test2 = new ColorMix.Color(200, 0, 300);
console.log(test2);
console.log(test2.toString('rgb'))
console.log("test");
var color = "#345678";
var transparent = "";
if (color.startsWith("rgb(")) {
  let red = color.substring(
    color.indexOf("(") + 1,
    color.indexOf(",")
  );
  let green = color.substring(
    color.indexOf(" ") + 1,
    color.lastIndexOf(",")
  );
  let blue = color.substring(
    color.lastIndexOf(" ") + 1,
    color.indexOf(")")
  );
  transparent = "rgba("+red.toString()+", "+green.toString()+", "+blue.toString()+", 0)"
} else {
  var c = hexToRgb(color);
  if (c) {
    transparent = "rgba("+c.r.toString()+", "+c.g.toString()+", "+c.b.toString()+", 0)"
  } else {
    transparent = color;
  }
}
console.log(transparent);*/
//console.log(test.getTime());
//console.log(test.getChordProps());
export { MelodyNote, HarmonyChord }
