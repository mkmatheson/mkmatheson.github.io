export const entries: { timestamp: Date; entry: string }[] = [
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
