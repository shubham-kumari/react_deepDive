import './App.css';
import NewCoreConcept from './components/NewCoreConcept.jsx';
import { Header } from './components/Header.jsx';
import Examples from './components/Examples.jsx';



function App() {
  return (
    <div className="div-app">
      <Header />
      <main>
        <NewCoreConcept />
        <Examples />

      </main>
    </div>
  );
}

export default App;