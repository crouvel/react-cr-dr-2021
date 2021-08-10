import './App.css';
import TypeChart from "./components/TypeChart";
import Navbar from "./components/Navbar/Navbar";
import Tabs from "./components/Tabs/Tabs";
import GareChart from "./components/GareChart";
import TableauRecords from "./components/TableauRecords";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<p>
Currently, there's ... records.
      </p>*/}
      <div className="tabs">
        <Tabs>
          <div title="Informations">
            <h3></h3>
            <p>


            </p>
          </div>
          <div title="Types d'objets" className="types">
            <h3></h3>
            <div className="panels">
              <div className="panel">
                <TypeChart />
              </div>
            </div>
          </div>
          <div title="gares">
            <div className="panels">
              <div className="panel">
                <GareChart />
              </div>
            </div>
          </div>
          <div title="données">
          <div className="panels">
              <div className="panel">
            <TableauRecords/>
            </div>
            </div>
          </div>
        </Tabs>
      </div>
    </div>

  );
}

export default App;
