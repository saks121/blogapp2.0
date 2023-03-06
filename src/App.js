import './App.css';
import Routes_n from './Routes/RoutesN';
 
import ContextApi from './ContextAPI/ContextApi';
function App() {
  return (
    <div className="App">
       
      
      <ContextApi>
        <Routes_n/>   
      </ContextApi>


    </div>
  );
}

export default App;
