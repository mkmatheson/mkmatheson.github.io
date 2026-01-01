import {
  chordQualities,
  chordQualitiesByType
} from '~/chord-generator/src/const';
import type { ChordConfig } from '~/chord-generator/src/types';
import { generateAvailableKeys } from '~/chord-generator/src/utils';

// Larghissimo – extremely slow, slowest type of tempo (24 bpm and under)
// Adagissimo and Grave – very slow and solemn (24–40 bpm)
// Largo – slow and broad (40–66 bpm)
// Larghetto – rather slow and broad (44–66 bpm)
// Adagio – slow with great expression[11] (44–66 bpm)
// Adagietto – slower than andante or slightly faster than adagio (46–80 bpm)
// Lento – slow (52–108 bpm)
// Andante – at a walking pace, moderately slow (56–108 bpm)
// Andantino – slightly faster than andante, but slower than moderato (80–108 bpm) (although, in some cases, it can be taken to mean slightly slower than andante)
// Marcia moderato – moderately, in the manner of a march[12] (66–80 bpm)
// Andante moderato – between andante and moderato (at a moderate walking speed) (80–108 bpm)
// Moderato – at a moderate speed (108–120 bpm)
// Allegretto – by the mid-19th century, moderately fast (112–120 bpm); see paragraph above for earlier usage
// Allegro moderato – close to, but not quite allegro (116–120 bpm)
// Allegro – fast and bright (120–156 bpm)
// Molto Allegro or Allegro vivace – at least slightly faster and livelier than allegro, but always at its range (and no faster than vivace) (124–156 bpm)
// Vivace – lively and fast (156–176 bpm)
// Vivacissimo and Allegrissimo – very fast, lively and bright (172–176 bpm)
// Presto – very fast (168–200 bpm)
// Prestissimo – extremely fast (200 bpm and over)

const allTempos = {
  larghissimo: [0, 24],
  adagissimo_grave: [24, 40],
  largo: [40, 66],
  larghetto: [44, 66],
  adagio: [44, 66],
  adagietto: [46, 80],
  lento: [52, 108],
  andante: [56, 108],
  andantino: [80, 108],
  marcia_moderato: [66, 80],
  andante_moderato: [80, 108],
  moderato: [108, 120],
  allegretto: [112, 120],
  allegro_moderato: [116, 120],
  allegro: [120, 156],
  molto_allegro: [124, 156],
  vivace: [156, 176],
  vivacissimo: [172, 176],
  presto: [168, 200],
  prestissimo: [200, Infinity]
};

const timeSignatureNumerator = [2, 3, 4, 5, 6, 7, 9, 12];

const meterCombos = Array.from({ length: 3 }, (_, lenIndex) => lenIndex + 2) // lengths 2 → 4
  .flatMap((len) =>
    Array.from({ length: 2 ** len }, (_, i) =>
      i.toString(2).padStart(len, '0').split('').map(Number)
    )
  );

const tempos: { [key: string]: number[] } = {
  adagio: [44, 66],
  andante: [56, 108],
  moderato: [108, 120],
  allegro: [120, 156],
  vivace: [156, 176],
  presto: [168, 200]
};

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

const generateKey = () => {
  // selected date
  const today = new Date();
  const dateNumberOfTheYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );

  // chord tonic
  const availableKeys = generateAvailableKeys(-1, 'ionian');
  const chordKey = availableKeys[dateNumberOfTheYear % availableKeys.length];

  // chord quality
  const quality =
    chordQualitiesByType.seventh.chords[
      dateNumberOfTheYear % chordQualitiesByType.seventh.chords.length
    ];

  // tempo
  const tempoNamesArr = Object.keys(tempos);
  const selectedTempoName =
    tempoNamesArr[dateNumberOfTheYear % tempoNamesArr.length];

  // alphabet
//   const selectedLetter = alphabet[dateNumberOfTheYear % alphabet.length];

  return {
    key: chordKey.name,
    quality: chordQualities[quality].symbol
      ? `${chordQualities[quality].symbol} ${quality}`
      : quality,
    tempo: `${selectedTempoName} (${tempos[selectedTempoName].join('-')})`,
    // alphabet: selectedLetter,
    meter: meterCombos[dateNumberOfTheYear % meterCombos.length],
    timeSignatureNumerator:
      timeSignatureNumerator[
        dateNumberOfTheYear % timeSignatureNumerator.length
      ]
  };
};

const DailyChord = () => {
  return (
    <div>
      {Object.entries(generateKey()).map(([key, value]) => {
        return <div>{`${key}: ${value}`}</div>;
      })}
    </div>
  );
};

export default DailyChord;
