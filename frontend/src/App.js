import './App.css';
import { Header } from './Componetens/Header/Header';
import { Navbar } from './Componetens/Navbar/Navbar';
import { AllRoutes } from './Pages/AllRoutes/AllRoutes';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Header/>
    <AllRoutes/>
    </div>
  );
}

export default App;
