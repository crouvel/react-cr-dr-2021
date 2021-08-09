import './App.css';
import TypeChart from "./components/TypeChart";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";
import GareChart from "./components/GareChart";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/*<p>
Actually, there's ... records.
      </p>*/}
      <div className="tabs">
      <Tabs>
      <div title="Informations">
          <h3></h3>
          <p>
        
         
          </p>
        </div>
        <div title="Types d'objets">
          <h3></h3>
          <p>
        
         <TypeChart/>
          </p>
        </div>
        <div title="gares">
         <GareChart/>
        </div>
        <div title="données">
          
        </div>
      </Tabs>
    </div>
    </div>
    
  );
}

export default App;
