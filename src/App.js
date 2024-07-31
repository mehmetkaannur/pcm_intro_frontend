import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDataPage from './pages/UserDataPage';
import CampaignDataPage from './pages/CampaignDataPage';
import MergedTablePage from './pages/MergedTablePage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<UserDataPage />} />
        <Route path="/campaigns" element={<CampaignDataPage />} />
        <Route path="/merged" element={<MergedTablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
