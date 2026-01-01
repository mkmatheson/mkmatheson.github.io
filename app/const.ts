export const entries: { timestamp: Date; entry: string }[] = [
  {
    timestamp: new Date('Thu Jan 01 2025 13:30 GMT-0800'),
    entry: `
    Going to make a goal tracker for 2026.
    `
  },
  {
    timestamp: new Date('Sun Nov 09 2025 10:21 GMT-0800'),
    entry: `
    I want to make a "daily chord + key + tempo + time sig" combination, based on day of the year
    Math.floor((new Date() - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24) would be the way to go
    `
  },
  {
    timestamp: new Date('Thu Nov 06 2025 22:26 GMT-0800'),
    entry: `
    Tomorrow I'll add the same "you've already done this note" section to GuitarNoteFinder
    `
  },
  {
    timestamp: new Date('Thu Nov 06 2025 22:20 GMT-0800'),
    entry: `
    Stumped on figuring out how to properly generate all notes on the fret across all strings. Current issue seems to be the way indices are calculated. It's almost as though these are getting calculated out of order...
    Oh wait it's because I'm interpreting string 2 (B) as string 5 (A)... no wonder... Dang, I've had it right the whole time.
    `
  },
  {
    timestamp: new Date('Thu Nov 06 2025 20:50 GMT-0800'),
    entry: `
    It's getting late but I want to try whipping up the "find all C3's on a guitar" or maybe just "all C's" to start.
    `
  },
  {
    timestamp: new Date('Wed Nov 05 2025 21:52 GMT-0800'),
    entry: `
    I should do the inverse now--ask the question "where can I find A4 on a guitar?" (A4 being the fourth octave A on a piano)
    There would be multiple answers for many of these notes, it should be an easy calculation to determine if each note is available on a given string, though.
    I can tab toggle between finding the note based on string coordinates and vice versa
    `
  },
  {
    timestamp: new Date('Wed Nov 05 2025 21:31 GMT-0800'),
    entry: `
    While I was there I added refs to buttons so I could use arrowkeys as shortcuts to click the buttons. I always forget how useRefs work under the hood, I just remember that they work.
    `
  },
  {
    timestamp: new Date('Wed Nov 05 2025 21:18 GMT-0800'),
    entry: `
    Added grid below to show all the notes I've already covered and ensure that each additional note I reveal is a note I haven't tried yet.
    I'll add a counter for how  many notes I have remaining and call it a night.
    `
  },
  {
    timestamp: new Date('Wed Nov 05 2025 19:56 GMT-0800'),
    entry: `
    Ok I think the issue was that I had a separate GitHub Pages deploy set up for the guitar repo, but the other submodules don't have that. Deploying this message just to retrigger the run. Will modify the guitar chord repo as well.
    `
  },
  {
    timestamp: new Date('Wed Nov 05 2025 19:49 GMT-0800'),
    entry: `
    For some reason, guitar app did not deploy correctly. It returns the contents of the markdown. Looking into this..
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 21:40:00 GMT-0800'),
    entry: `
    Journal briefly flashes in GMT time before setting locale, can fix this another time. Also I'm going to make a separate repo for the journal entry now that I figured out the routing issues, otherwise the parent branch is going to get cluttered with journal commits.
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 21:37:00 GMT-0800'),
    entry: `
    Going the extra mile and adding better date/time formatting for the journal
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 21:27:00 GMT-0800'),
    entry: `
    Rudimentary guitar tablature in place. Alignment isn't great but this isn't CSS time. Next project would be to create a game where I go through every note on the fretboard. 15 notes * 6 strings = 90 notes.
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 21:09:00 GMT-0800'),
    entry: `
    Before calling it a night, I'm going to add ASCII guitar tablature to the guitar note guesser
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:59:00 GMT-0800'),
    entry: `
    Fixing the export worked for remote builds. Deleting all node_modules dirs and removing the build folder seemed to fix things locally 
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:38:00 GMT-0800'),
    entry: `
    The embarrassing bug may be that I forgot to export the App component from App.tsx, let's see...
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:26:00 GMT-0800'),
    entry: `
    Turns out I needed to add submodules via "git submodule add <url> <name>" which I forgot I did for the other repos
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:15:00 GMT-0800'),
    entry: `
    Forgot to add a .git extension to my new submodule. I thought this would fix the issue on remote builds, but it actually looks like guitar-note-guesser isn't acknowledged as part of the parent repo yet. Need to figure out a sync...
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:07:00 GMT-0800'),
    entry: `
    Tried committing all existing files to their corresponding sub-repositories, just to clean things up
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 20:00:00 GMT-0800'),
    entry: `
    Update, restarting the computer did not solve the issue
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 19:54:00 GMT-0800'),
    entry: `
    I'm getting a lovely &lt;i&gt;Error: EMFILE: too many open files, watch&lt;i&gt;
    when running npm run dev. Not sure what files are open but will probably do a computer restart to kill any lingering processes
    `
  },
  {
    timestamp: new Date('Sun Nov 02 2025 19:31:00 GMT-0800'),
    entry: `
    This is a pretty rudimentary way to get started. I'll come back one day and make this a proper journal DB.
    For now it's just a JSON config with hardcoded dates and backtick characters`
  }
];
