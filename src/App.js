import './App.css';
import { CORE_CONCEPTS } from './data.js'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header className="text-white flex flex-col items-center justify-center">
      <img src="https://scientyficworld.org/wp-content/uploads/2022/08/React-js.jpg" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function CoreConcept({image, title, description}) {
  return <li className="flex flex-col justify-center items-center">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
}

function App() {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <Header />
      <main>
        <section className="p-1 rounded-md bg-indigo-950 shadow-sm">
          <h2>core Concepts</h2>
          <ul className="flex">
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
            
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;