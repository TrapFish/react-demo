import CardsDisplay from "./component/CardDisplay/CardsDisplay";
import DataRepresent from './component/DataRepresentation/DataRepresent';

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <div className="display-details">
        <div>
           <CardsDisplay />
        </div>
        <div>
           <DataRepresent />
        </div>
        
      </div>

    </div>
  );
}

export default App;
