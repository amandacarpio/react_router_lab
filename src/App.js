// import Homepage from './pages/Homepage';
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Outlet/>
    </div>
  );
}

export default App;
