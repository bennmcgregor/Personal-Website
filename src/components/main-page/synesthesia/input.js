//this should be a json file

const input = {
  "Ondine": {
    //holds the general information for the track
    "meta": {
      //in bpm. One beat is defined by "timeSignature". In this case, it's a quarter note
      "tempo": 50,
      //possible values: 1 (whole note), 2 (half), 4 (quarter), 8 (eigth), 16, 32
      "timeSignature": 4,
      //format: {song name} + [composer]. The song name is italicized.
      "composer": ", Maurice Ravel",
    },
    /*an array of "harmony" objects. Min length 1.
    Each object determines the background color.
    The background opacity of all the objects should add to 100%.
    NOTE: Set the opacity of an object to 0 if you don't want its animation to be shown.
    I suggest only one object!*/
    "harmony": [
      //a harmony object.
      {
        "opacity": 0, //a percentage.
        /*an array of "chord" objects.
        Each has specific properties read by the processor to determine their colour mix.*/
        "chords": [
          {
            //a float value representing the number of beats (as defined in "meta")
            "duration": 2.0,
            /*the notes of the chord, ordered from lowest to highest.
            min length = 2.
            the "bass" weighting is determined from 0th index.
            the "highest" weighting is determined from [array.length-1].
            if any of the "root", "fifth", "bass", "highest" properties are equal,
            the note will be weighted with the highest corresponding property weight,
            and the other replicates will be ignored.
            However, if a note is duplicated and does not correspond with any of these properties,
            its respective weightings will be added together.
            Possible values: R, A, Ab, A#, B, Bb, B#, C, Cb, C#, D, Db, D#, E, Eb, E#, F, Fb, F#, G, Gb, G#
            "R" note value represents a rest, ie whitespace. It must be the only element in the "notes" array.
            For double sharps, use the natural version of the note name (ie C## = C).
            For double flats, use the flat version (Bbb = Bb).*/
            "notes": ["C#", "E#", "A", "G#"],
            "root": 0, //the array index of the root of the chord (NOT bass)
            "fifth": 3, //the array index of the fifth of the chord
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "G#", "A"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "A", "G#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "G#", "A"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "A", "G#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "G#", "A"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2.0,
            "notes": ["C#", "E#", "A", "G#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 3.0,
            "notes": ["C#", "E#", "G#", "A"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1.0,
            "notes": ["C#", "E#", "G#", "A#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["C", "E#", "G#", "A#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1.0,
            "notes": ["C#", "E#", "G#", "A#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["C", "E#", "G#", "A#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["C", "G#", "A#", "B#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["D#", "F#", "A#", "B#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1.0,
            "notes": ["D#", "F#", "A", "B"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["D#", "F#", "A#", "B#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1.0,
            "notes": ["D#", "F#", "A", "B"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 3.0,
            "notes": ["C#", "F#", "A", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1.5,
            "notes": ["D#", "F#", "A", "B"],
            "root": 3,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["C#", "F#", "A", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["F#", "A", "B"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["E#", "F#", "A", "B"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 1.0,
            "notes": ["D#", "F#", "A", "B"],
            "root": 3,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["C#", "F#", "A", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["D#", "F#", "A", "B"],
            "root": 3,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["F#", "A", "B"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["E#", "F#", "A", "B"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 1.0,
            "notes": ["C#", "F#", "A", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["B", "F#", "A"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["C#", "F#", "A", "B"],
            "root": 1,
            "fifth": 0,
          },
        ],
      },
    ],
    /*an array of "melody" objects. Can be empty.
    Each object corresponds to a melody.
    The background opacity of all the objects should add to 100%. (MIGHT CHANGE)
    You can have as many melodies as you want—this allows for polyphony.*/
    "melody": [
      //a melody object.
      {
        "opacity": 0, //the opacity of the melody.
        /*an array of note objects. Each corresponds to a note in the melody.*/
        "notes": [
          {
            "duration": 6.0, //see "harmony" for info.
            /*An array of note values. Min length 1.
            The weighting is evenly split between all the elements.
            For all possible values, see "harmony".*/
            "note": ["R"],
          },
          {
            "duration": 1.0,
            "note": ["D#"],
          },
          {
            "duration": 1.5,
            "note": ["B"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 0.5,
            "note": ["B"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 1.0,
            "note": ["D#"],
          },
          {
            "duration": 1.5,
            "note": ["B"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 0.5,
            "note": ["B"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["D#"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 0.5,
            "note": ["E#"],
          },
          {
            "duration": 1,
            "note": ["B#"],
          },
          {
            "duration": 0.5,
            "note": ["A#"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 2.5,
            "note": ["B#"],
          },
          {
            "duration": 0.5,
            "note": ["E#"],
          },
          {
            "duration": 0.5,
            "note": ["A#"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 1.0,
            "note": ["B#"],
          },
          {
            "duration": 1.0,
            "note": ["E#"],
          },
          {
            "duration": 0.5,
            "note": ["G#"],
          },
          {
            "duration": 0.5,
            "note": ["A#"],
          },
          {
            "duration": 2.5,
            "note": ["E#"],
          },
          {
            "duration": 0.5,
            "note": ["E#"],
          },
          {
            "duration": 1.0,
            "note": ["E#"],
          },
          {
            "duration": 1.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["A#"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["D#"],
          },
          {
            "duration": 1.0,
            "note": ["E#"],
          },
          {
            "duration": 1.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["A#"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["D#"],
          },
          {
            "duration": 1.0,
            "note": ["C#"],
          },
          {
            "duration": 1.0,
            "note": ["F#"],
          },
          {
            "duration": 0.5,
            "note": ["A"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 1.5,
            "note": ["D#"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["F#"],
          },
          {
            "duration": 0.5,
            "note": ["E#"],
          },
          {
            "duration": 1.0,
            "note": ["D#"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["D#"],
          },
          {
            "duration": 0.5,
            "note": ["F#"],
          },
          {
            "duration": 0.5,
            "note": ["E#"],
          },
          {
            "duration": 1.0,
            "note": ["C#"],
          },
          {
            "duration": 0.5,
            "note": ["B"],
          },
          {
            "duration": 0.5,
            "note": ["C#"],
          },
        ],
      },
    ],
  },
  "Chromatic Scale": {
    "meta": {
      "tempo": 20,
      "timeSignature": 4,
      "composer": "",
    },
    "harmony": [
      {
        "opacity": 0,
        "chords": [
          {
            "duration": 24,
            "notes": ["A"],
            "root": 0,
            "fifth": 0,
          },
        ],
      },
    ],
    "melody": [
      {
        "opacity": 0,
        "notes": [
          {
            "duration": 1,
            "note": ["A"],
          },
          {
            "duration": 1,
            "note": ["A#"],
          },
          {
            "duration": 1,
            "note": ["B"],
          },
          {
            "duration": 1,
            "note": ["C"],
          },
          {
            "duration": 1,
            "note": ["C#"],
          },
          {
            "duration": 1,
            "note": ["D"],
          },
          {
            "duration": 1,
            "note": ["D#"],
          },
          {
            "duration": 1,
            "note": ["E"],
          },
          {
            "duration": 1,
            "note": ["F"],
          },
          {
            "duration": 1,
            "note": ["F#"],
          },
          {
            "duration": 1,
            "note": ["G"],
          },
          {
            "duration": 1,
            "note": ["G#"],
          },
          {
            "duration": 1,
            "note": ["A"],
          },
          {
            "duration": 1,
            "note": ["Ab"],
          },
          {
            "duration": 1,
            "note": ["G"],
          },
          {
            "duration": 1,
            "note": ["Gb"],
          },
          {
            "duration": 1,
            "note": ["F"],
          },
          {
            "duration": 1,
            "note": ["E"],
          },
                    {
            "duration": 1,
            "note": ["Eb"],
          },
          {
            "duration": 1,
            "note": ["D"],
          },
          {
            "duration": 1,
            "note": ["Db"],
          },
          {
            "duration": 1,
            "note": ["C"],
          },
          {
            "duration": 1,
            "note": ["B"],
          },
          {
            "duration": 1,
            "note": ["Bb"],
          },
        ],
      },
    ],
  },
  "Gagaku Study": {
    "meta": {
      "tempo": 40,
      "timeSignature": 4,
      "composer": ", Benn McGregor",
    },
    "harmony": [
      {
        "opacity": 0,
        "chords": [
          {
            "duration": 2,
            "notes": ["F#", "G", "A", "B", "D", "E"],
            "root": 1,
            "fifth": 4,
          },
          {
            "duration": 2,
            "notes": ["G#", "F#", "A", "B", "F#", "D"],
            "root": 4,
            "fifth": 3,
          },
          {
            "duration": 2,
            "notes": ["D", "B", "E", "A", "B", "F#"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["E", "D", "A", "B", "E", "F#"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 4,
            "notes": ["B", "A", "E", "D", "E", "F#"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["F#", "G", "A", "B", "D", "E"],
            "root": 1,
            "fifth": 4,
          },
          {
            "duration": 2,
            "notes": ["G#", "F#", "A", "B", "F#", "D"],
            "root": 4,
            "fifth": 3,
          },
          {
            "duration": 2,
            "notes": ["D", "B", "E", "A", "B", "F#"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["E", "D", "A", "B", "E", "F#"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 4,
            "notes": ["B", "A", "E", "D", "E", "F#"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["F#", "G", "A", "B", "D", "E"],
            "root": 1,
            "fifth": 4,
          },
          {
            "duration": 2,
            "notes": ["G#", "F#", "A", "B", "F#", "D"],
            "root": 4,
            "fifth": 3,
          },
          {
            "duration": 2,
            "notes": ["D", "B", "E", "A", "B", "F#"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["E", "D", "A", "B", "E", "F#"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 4,
            "notes": ["B", "A", "E", "D", "E", "F#"],
            "root": 2,
            "fifth": 1,
          },
        ],
      },
    ],
    "melody": [
      {
        "opacity": 0,
        "notes": [
          {
            "duration": 36,
            "note": ["A"],
          },
        ],
      },
    ],
  },
  "Sarabande": {
    "meta": {
      "tempo": 31,
      "timeSignature": 4,
      "composer": ", J.S. Bach",
    },
    "harmony": [
      {
        "opacity": 100,
        "chords": [
          {
            "duration": 1.5,
            "notes": ["Bb", "D", "F", "Bb", "D"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2.2,
            "notes": ["Bb", "Bb", "F", "Bb", "D"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1.5,
            "notes": ["Bb", "D", "F", "Ab"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["Bb", "Bb", "D", "F", "Ab"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 1,
            "notes": ["Bb", "Eb", "G", "Eb"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["Bb", "D", "F", "D"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "C", "Eb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["A", "C", "Eb", "C"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["F", "Bb", "C", "Eb"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["Bb", "F", "Bb", "D", "F"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 1,
            "notes": ["Bb", "Bb", "Eb", "G", "Bb"],
            "root": 2,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["Bb", "C", "E", "G", "C"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "G", "E", "G", "C"],
            "root": 4,
            "fifth": 1,
          },
          {
            "duration": 2.5,
            "notes": ["A", "C", "F#", "A", "C", "Eb"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["A", "A", "F#", "C", "Eb"],
            "root": 2,
            "fifth": 3,
          },
          {
            "duration": 1,
            "notes": ["G", "D", "G", "Bb"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 1,
            "notes": ["G", "G", "G", "Bb", "D"],
            "root": 0,
            "fifth": 4,
          },
          {
            "duration": 1,
            "notes": ["F", "D", "F"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["E", "C", "Bb", "G"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 2,
            "notes": ["E", "E", "G", "Bb", "C", "G"],
            "root": 4,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["F", "C", "F", "A"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 1,
            "notes": ["F", "F", "A", "C"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 1,
            "notes": ["E", "Bb", "C"],
            "root": 2,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["D", "D", "F", "A"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 1,
            "notes": ["D", "F", "D", "C"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["C", "F", "A", "C"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["Bb", "G", "Bb", "D"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 1,
            "notes": ["C", "D", "F", "Bb"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["C", "E"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["F", "F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 4,
            "notes": ["C", "A", "F", "F", "A", "C", "F"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["C", "A", "F", "F", "A", "C", "F"],
            "root": 2,
            "fifth": 1,
          },
        ],
      },
    ],
    "melody": [
      {
        "opacity": 0,
        "notes": [
          {
            "duration": 36,
            "note": ["A"],
          },
        ],
      },
    ],
  },
  "Nocturne": {
    "meta": {
      "tempo": 57,
      "timeSignature": 4,
      "composer": ", F. Chopin",
    },
    "harmony": [
      {
        "opacity": 100,
        "chords": [
          {
            "duration": 1,
            "notes": ["C", "D", "A", "F#"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["B", "D", "G", "G"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.3,
            "notes": ["Bb", "C", "G", "E"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["A", "C", "F", "F"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["Ab", "C", "F", "C"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["G", "B", "F", "D"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 0.5,
            "notes": ["F#", "B", "F#", "D#"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["G#", "B", "E", "B"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.9,
            "notes": ["F#", "B#", "D#", "G#"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 0.9,
            "notes": ["C#", "E", "A#"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.9,
            "notes": ["D#", "F#", "B"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 1,
            "notes": ["E", "G#", "C#", "D#"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["E", "F#", "A#", "C#"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 0.9,
            "notes": ["D#", "G#", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1.3,
            "notes": ["E", "A#", "C#"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.8,
            "notes": ["G#", "B", "E", "F#"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 0.8,
            "notes": ["F#", "A#", "C#", "D#"],
            "root": 3,
            "fifth": 1,
          },
          {
            "duration": 0.7,
            "notes": ["C#", "G#", "C#", "E", "B", "E"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.7,
            "notes": ["D#", "F", "D#", "F", "A#", "C#", "D#", "F"],
            "root": 0,
            "fifth": 4,
          },
          {
            "duration": 1.6,
            "notes": ["E", "C", "G#", "B", "A#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.6,
            "notes": ["E#", "B", "G#", "C", "G#"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["F#", "F#", "A#", "C#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 0.4,
            "notes": ["F#", "B", "A", "D#"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["E", "B", "G#", "E"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.5,
            "notes": ["E", "C#", "A#"],
            "root": 2,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["D#", "D#", "F", "A#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 0.5,
            "notes": ["D#", "G#", "F#", "B#"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 0.5,
            "notes": ["C#", "G#", "E#", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 0.9,
            "notes": ["F#", "A#", "E", "C#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 3.3,
            "notes": ["D#", "F#", "B", "B", "B"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 2.2,
            "notes": ["F#", "B", "D#", "F#", "G#", "A"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 2,
            "notes": ["B", "F#", "D#", "F#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["F#", "B", "D#", "F#", "C#", "A"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 4,
            "notes": ["B", "G#", "B", "E", "G#"],
            "root": 3,
            "fifth": 0,
          },
          {
            "duration": 4,
            "notes": ["B", "F#", "E", "G#", "C#", "E"],
            "root": 1,
            "fifth": 4,
          },
          {
            "duration": 3,
            "notes": ["B", "F#", "B", "D#", "F#", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["F#", "B", "D#", "F#", "G", "A"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 4,
            "notes": ["B", "F#", "B", "D#", "F#", "G", "C", "A"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 4,
            "notes": ["B", "G", "B", "E", "G"],
            "root": 3,
            "fifth": 0,
          },
          {
            "duration": 3.7,
            "notes": ["B", "F#", "E", "C#", "E", "G#"],
            "root": 1,
            "fifth": 3,
          },
          {
            "duration": 7.8,
            "notes": ["B", "F#", "B", "D#", "F#", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2.7,
            "notes": ["B", "F#", "B", "D#", "G#", "F#"],
            "root": 0,
            "fifth": 4,
          },
          {
            "duration": 1,
            "notes": ["F#", "B", "D#", "D#", "B"],
            "root": 1,
            "fifth": 0,
          },
          {
            "duration": 1.6,
            "notes": ["R"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 1.6,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2.2,
            "notes": ["F#", "F#", "A#", "D#", "E"],
            "root": 3,
            "fifth": 2,
          },
          {
            "duration": 4.5,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["E", "G#", "B", "D#", "E"],
            "root": 0,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2.5,
            "notes": ["D#", "F#", "B"],
            "root": 2,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2.3,
            "notes": ["F#", "F#", "A#", "C#"],
            "root": 0,
            "fifth": 3,
          },
          {
            "duration": 4,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
          {
            "duration": 2,
            "notes": ["B", "F#", "B", "D#"],
            "root": 0,
            "fifth": 1,
          },
        ],
      },
    ],
    "melody": [
      {
        "opacity": 0,
        "notes": [
          {
            "duration": 76,
            "note": ["A"],
          },
        ],
      },
    ],
  },
  "Rhapsody in Blue": {
    "meta": {
      "tempo": 90,
      "timeSignature": 4,
      "composer": ", G. Gershwin",
    },
    "harmony": [
      {
        "opacity": 100,
        "chords": [
          {
            "duration": 1.5,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.4,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.3,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.3,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.3,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["A"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["Bb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["C"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["D"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["Eb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.1,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.12,
            "notes": ["A"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.16,
            "notes": ["Bb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["C"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["D"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.2,
            "notes": ["Eb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.4,
            "notes": ["F"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.4,
            "notes": ["G"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.4,
            "notes": ["A"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 2,
            "notes": ["F", "Bb", "D", "Bb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Ab", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Gb", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Ab", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Gb", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Ab", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.33,
            "notes": ["E", "Gb", "C#", "A", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "F", "Ab", "D", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "Eb", "Ab", "D", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "D", "Ab", "D", "Cb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "Db", "Ab", "D", "Cb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "Db", "Bb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "Eb", "Bb", "Eb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "E", "Bb", "Gb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "F", "Bb", "Gb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Bb", "F", "F", "D", "Bb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.3,
            "notes": ["Bb", "D", "F", "D", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.125,
            "notes": ["Gb", "Bb", "Fb", "Bb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.125,
            "notes": ["Gb", "C", "Fb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.125,
            "notes": ["Gb", "Bb", "Fb", "Bb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.125,
            "notes": ["Gb", "A", "Fb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["Gb", "Ab", "Fb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["F", "Gb", "Eb", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.1,
            "notes": ["F", "F", "Eb", "F", "F", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.7,
            "notes": ["Bb", "F", "D", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["G", "F", "D", "G", "B"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Ab", "F", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Bb", "F", "D", "Bb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["G", "F", "D", "G", "B"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Ab", "F", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.04,
            "notes": ["Bb", "R", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Bb", "F", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Bb", "G", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Bb", "F", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Bb", "G", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Bb", "F", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Bb", "G", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Bb", "F", "F", "Bb", "D"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Bb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 0.9,
            "notes": ["C", "Bb", "G", "C", "E"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Db", "Bb", "Ab", "Db", "F"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "Bb", "G", "Eb", "Eb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.9,
            "notes": ["C", "Bb", "G", "C", "E"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.55,
            "notes": ["Db", "Bb", "Ab", "Db", "F"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Eb", "R", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "C", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "C", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.5,
            "notes": ["Eb", "C", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.3,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.7,
            "notes": ["Eb"],
            "root": 0,
            "fifth": 0,
          },
          {
            "duration": 1,
            "notes": ["F", "Eb", "C", "F", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.7,
            "notes": ["Gb", "Eb", "Db", "Gb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.7,
            "notes": ["Ab", "Eb", "C", "Ab", "Ab"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["F", "Eb", "C", "F", "A"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Gb", "Eb", "Db", "Gb", "Bb"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.1,
            "notes": ["Ab", "R", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Ab", "Eb", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Ab", "F", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Ab", "Eb", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 2.2,
            "notes": ["Ab", "Eb", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Ab", "C", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Ab", "F", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.8,
            "notes": ["Ab", "F#", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["Ab", "G", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1,
            "notes": ["Ab", "Bb", "Eb", "Ab", "C"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.6,
            "notes": ["Eb", "R", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.8,
            "notes": ["Eb", "Eb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.8,
            "notes": ["Eb", "Db", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.8,
            "notes": ["Eb", "Eb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 1.7,
            "notes": ["Eb", "F#", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "G", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Eb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "C", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Db", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "C", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.4,
            "notes": ["Eb", "F#", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Eb", "G", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Eb", "Bb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 0.6,
            "notes": ["Eb", "G", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 4,
            "notes": ["Eb", "Eb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
          {
            "duration": 2,
            "notes": ["Eb", "Eb", "Bb", "Eb", "G"],
            "root": 1,
            "fifth": 2,
          },
        ],
      },
    ],
    "melody": [
      {
        "opacity": 0,
        "notes": [
          {
            "duration": 76,
            "note": ["A"],
          },
        ],
      },
    ],
  }
};

module.exports = input;
