import { useState, useMemo } from 'react';

const THIS_TECHNOLOGY = 'this technology';

const App = () => {
  const [technology, setTechnology] = useState('');
  const technologyText = useMemo(() => {
    if (technology === THIS_TECHNOLOGY || technology === '') {
      return THIS_TECHNOLOGY;
    }
    return technology;
  }, [technology]);
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', wordWrap: 'break-word' }}>
      {/* meta tags */}
      <title>Questions on new technologies</title>
      <meta property="og:title" content="Questions on new technologies" />
      <meta property="og:description" content="Questions worth revisiting" />
      <meta property="og:url" content="https://mkmatheson.github.io/" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/mkmatheson/data/97a74914606afbd8a5b60bceb730eab9b8500c36/home_page_preview.png"
      />
      {/* questions */}
      <div style={{ margin: '20px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700' }}>
          Questions on new technologies
        </h1>
        <p style={{ fontSize: '18px', fontWeight: '400' }}>
          All of these questions have already been asked. It won't hurt to ask
          them again... and again...
        </p>
        {/* <div style={{ margin: '8px' }}>
          <p>
            Optional: Name a specific technology (nuclear energy, A.I., the
            inclined plane, etc.)
          </p>
          <input
            style={{
              border: '1px solid black',
              margin: '8px',
              minWidth: '200px'
            }}
            type="text"
            onChange={(event) => {
              setTechnology(event.target.value);
            }}
            value={technology}
            placeholder="Type here..."
          />
          {technology.length > 0 && (
            <button
              style={{
                marginLeft: '8px',
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: 'lightgray',
                fontSize: '24px',
                borderRadius: '4px'
              }}
              onClick={() => setTechnology('')}
            >
              {String.fromCharCode(10227)}
            </button>
          )}
        </div> */}
        <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
          <li>
            Are there enough safeguards in place to prevent {technologyText}{' '}
            from causing catastrophe?
          </li>
          <li>
            Catastrophe aside, who suffers the most from {technologyText}’s
            regular usage?
          </li>
          <li>Who benefits the least from it?</li>
          <li>Who benefits the most from it?</li>
          <li>What proportions of the population are those groups?</li>
          <li>
            Who gets to decide if the effects on other groups are justified in
            favor of those who benefit the most?
          </li>
          <li>
            On those who make the decisions about {technologyText}’s regulation:
            are they informed enough about its existence and capabilities?
          </li>
          <li>
            Are they capable of thoroughly understanding {technologyText}’s
            inner workings and impacts?
          </li>
          <li>
            On those investing time, money, and energy in {technologyText}:
            towards what are they running?
          </li>
          <li>Who’s running the fastest?</li>
          <li>Why are they trying to get there so quickly at all costs?</li>
          <li>
            Is {technologyText} creating more problems than it helps solve?
          </li>
          <li>
            Are there approaches worth exploring besides the current approach on{' '}
            {technologyText}?
          </li>
          <li>
            What’s preventing us from taking a better path if it’s available?
          </li>
          <li>
            If the nature of {technologyText} raises concerns over adversarial
            use, is there sufficient collaboration with both allies and
            antagonists to prevent negative outcomes?
          </li>
          <li>
            If {technologyText} replaces current ways of life, how should any
            components of those ways be preserved?
          </li>
          <li>
            If people exercise the right to opt out of using {technologyText},
            what supports should be in place to avoid a significant decrease in
            their opportunities or quality of life?
          </li>
          <li>
            How far removed from each other are those who are suffering and
            those benefitting and those regulating and those investing and those
            innovating and those acting maliciously and those opting out?
          </li>
          <li>
            If {technologyText} is so crucial to society as a whole, can we
            afford anything less than everybody on the same team?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
