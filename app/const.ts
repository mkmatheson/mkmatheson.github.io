export const entries: { timestamp: Date; entry: string }[] = [
  {
    timestamp: new Date('Sat Jan 03 2026 17:46 GMT-0800'),
    entry: `
    Forgot to hit save on disabling the branch deploy for the daily-goals repo. Triggering redeploy.
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 17:40 GMT-0800'),
    entry: `
    I believe I found the issue--on github, there was already a Pages deploy pipeline set up for the daily-goals repository (probably leftover from when it was toe-touching). I wonder if this was interfering with the parent repo's deploy. This happened before with guitar-note-guesser.
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 17:32 GMT-0800'),
    entry: `
    Locally everything seems to be working fine when I run a build. So I guess I'll push to prod and see if anything miraculously changes.
    Just to be safe, I'm adding a <div> wrapper around the daily goals component so that my linter doesn't remove the return statement's parentheses
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 17:27 GMT-0800'),
    entry: `
    This did not work due to ' Unable to define routes with duplicate route id: "chord-generator/src/App" '
    I suppose rather than pushing code every time to prod to see if the deploy works, I can just run react-router build locally and check the build file for correct index.html files.
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 17:24 GMT-0800'),
    entry: `
    Because I removed the daily goal route from the routes.ts file but kept it in the config file, the build on prod failed, Got an error "Unable to prerender path because it does not match any routes: /daily-goals". So the routing was working but it's routing the wrong file.
    I'm going to see if adding the chord generator component to the route for daily-goals works
    
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 17:17 GMT-0800'),
    entry: `
    I added daily-set to react-router.config.ts and that got it to behave correctly. So that routing part is working. Daily goals still is showing the default github index.html file, though.
    I'm going to try removing the route altogether and verify that it removes the route from prod.
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 16:59 GMT-0800'),
    entry: `
    For daily goals, I don't have static assets to load, so the basic index.html file I copied over from other files is trying to import non-existent files. The preview response on the page also gets the "you need javascript to run this page" message. Need to figure out why that is, since this works locally without issue.
    `
  },
  {
    timestamp: new Date('Sat Jan 03 2026 16:55 GMT-0800'),
    entry: `
    I tried adding the index.html file back into the src directory and I think the parent app is routing to that file because the page <title> is "React App". However, I'm get 400s back on the static assets it's trying to load.
    `
  },
  {
    timestamp: new Date('Fri Jan 02 2026 21:22 GMT-0800'),
    entry: `
    Well, I think it's a routing issue due to having index.html and not index.tsx in the root of the daily-goals directory, but I'm not sure, so I'm just going to give daily-goals the same routing setup as other submodules and see what sticks. I probably need to go back and revisit which code is actually used in prod.
    `
  },
  {
    timestamp: new Date('Fri Jan 02 2026 21:17 GMT-0800'),
    entry: `
    Daily goals is showing the old calendar so I wonder if it's something with the index file being left as-is. I moved it to a /public directory to see if this resolves the issue on build.
    `
  },
  {
    timestamp: new Date('Fri Jan 02 2026 20:58 GMT-0800'),
    entry: `
    Here's everything I added:
    - switched toe-touching goal to be old files
    - table with month headers
    - color coding based on criteria (the more I invested in the goal, the more opaque the color)
      - this also allows for "inverted" goals where lower values are better (like screen time)
    - event listener to allow for arrow key navigation between goals

    I probably won't push goal updates every day, meaning I'll still log my progres locally and upload it any time I feel like it.
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 18:13 GMT-0800'),
    entry: `
    Working prototype in place, wow time flies. Nice to have this up and running, though.
    Will commit and push tomorrow with in-depth description
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 16:36 GMT-0800'),
    entry: `
    Tried connecting to Google Sheet via API to fetch daily goal data. 
    No luck. I need Oauth credentials but this is a client-only app.
    Can't fetch using the public sheet URL either - CORS error.
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 14:43 GMT-0800'),
    entry: `
    Calendar isn't routing correctly on prod
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 14:26 GMT-0800'),
    entry: `
    Made a good solid start at a test grid that I think will work well.
    Todo: add in individual goals and a tab/button setup to switch between them
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 13:35 GMT-0800'),
    entry: `
    Starting by renaming and repurposing the toe-touching webapp.
    project url is now daily-goals
    had to briefly modify files.exclude in vscode to see what .git files needed to be changed (**/.git)
    turns out its too much of a pain to try modifying the exisiting repo so I'm just deleting it.
    `
  },
  {
    timestamp: new Date('Thu Jan 01 2026 13:30 GMT-0800'),
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
