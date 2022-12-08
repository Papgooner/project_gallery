import './App.css';
import HomePage from './pages/homePage';
import { Routes, Route } from "react-router-dom";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import GeistPage from './pages/geistPage';
import { useState } from "react";

function App() {
  const [themeType, setThemeType] = useState('dark')
  function switchThemes() {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
    <div className="App">
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/geist" element={<GeistPage />} />
      </Routes>
    </div>
    </GeistProvider>
  );
}

export default App;
