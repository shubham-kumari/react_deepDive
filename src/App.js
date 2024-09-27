import './App.css';
import { CORE_CONCEPTS } from './data.js'
import { Header } from './components/Header.jsx';
import { CoreConcept } from './components/CoreConcept.jsx';
import Button from './components/Button.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';



function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = "please select a tab";
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="div-app">
      <Header />
      <main>
        <section className="core-concept">
          <h2>Core Concepts</h2>
          <ul className="core-cncept-element">
            <CoreConcept {...CORE_CONCEPTS[0]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[1]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[2]} className="core-concept-item" />
            <CoreConcept {...CORE_CONCEPTS[3]} className="core-concept-item" />
          </ul>
        </section>

        <section className="examples">
          <h2>Examples</h2>
          <menu className="menu">
            <Button onSelect={() => handleSelect('components')}>Components</Button>
            <Button onSelect={() => handleSelect('props')}>Props</Button>
            <Button onSelect={() => handleSelect('jsx')}>JSX</Button>
            <Button onSelect={() => handleSelect('state')}>State</Button>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;