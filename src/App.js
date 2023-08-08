import Sidebar from './Components/Sidebar';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard  from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;