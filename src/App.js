import './App.css';
import ContextApi from './ContextAPI/ContextApi';
import RoutesN from './Routes/RoutesN';
function App() {
  return (
    <div className="App">
       
      
      <ContextApi>
        <RoutesN/>   
      </ContextApi>


    </div>
  );
}

export default App;
