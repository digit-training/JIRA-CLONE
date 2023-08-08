import { useState } from "react";
import { Button } from "@mui/material";
import PopupScreen from "./components/CreateIssue";
import Sidebar from './Components/Sidebar';
import './App.css';
import Dashboard from './pages/dashboard';

function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div className="App">
      <h1>Popup Screen Example</h1>
      <Button variant="contained" color="primary" onClick={handleOpenPopup}>
        Open Popup
      </Button>
      <PopupScreen open={isPopupOpen} onClose={handleClosePopup} />
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;