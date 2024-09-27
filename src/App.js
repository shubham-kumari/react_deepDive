import './App.css';
import { CORE_CONCEPTS } from './data.js'
import { Header } from './components/Header.jsx';
import { CoreConcept } from './components/CoreConcept.jsx';
import Button from './components/Button.jsx';



function App() {

  let tabContent = "Please click a button"

  function handleSelect(selectedButton){
    // selectedButton => 'components', 'JSX', 'Props', 'State'
    // console.log(selectedButton);
    tabContent = selectedButton;
}

  return (
    <div className="text-white flex flex-col items-center justify-center">
      <Header />
      <main>
        <section className="p-1 rounded-md bg-indigo-950 shadow-sm">
          <h2>core Concepts</h2>
          <ul className="flex">
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

          </ul>
        </section>
        <section>
          <h2>Examples</h2>
          <menu className='flex gap-8 '>
            <Button onSelect={() => handleSelect('Components')}>Components</Button>
            <Button onSelect={() => handleSelect('Props')}>Props</Button>
            <Button onSelect={() => handleSelect('JSX')}>JSX</Button>
            <Button onSelect={() => handleSelect('State')}>State</Button>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;