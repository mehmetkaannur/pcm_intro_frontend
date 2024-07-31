import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CampaignDataPage.css'; // Import the CSS file

function CampaignDataPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ name: '', startDate: '', endDate: '', minPoints: 0 });

  useEffect(() => {
    axios.get('http://localhost:8080/api/campaigns/all').then(response => setCampaigns(response.data));
  }, []);

  const addCampaign = () => {
    axios.post('http://localhost:8080/api/campaigns/new', newCampaign).then(() => {
      setCampaigns([...campaigns, newCampaign]);
      setNewCampaign({ name: '', startDate: '', endDate: '', minPoints: 0 });
    });
  };

  return (
    <div>
      <h1>Campaign Data</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Min Points</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>{campaign.minPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="form">
        <h2>Add New Campaign</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={newCampaign.name} 
            onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} 
          />
        </label>
        <label>
          Start Date:
          <input 
            type="date" 
            value={newCampaign.startDate} 
            onChange={e => setNewCampaign({ ...newCampaign, startDate: e.target.value })} 
          />
        </label>
        <label>
          End Date:
          <input 
            type="date" 
            value={newCampaign.endDate} 
            onChange={e => setNewCampaign({ ...newCampaign, endDate: e.target.value })} 
          />
        </label>
        <label>
          Min Points:
          <input 
            type="number" 
            value={newCampaign.minPoints} 
            onChange={e => setNewCampaign({ ...newCampaign, minPoints: parseInt(e.target.value) })} 
          />
        </label>
        <button onClick={addCampaign}>Add Campaign</button>
      </div>
    </div>
  );
}

export default CampaignDataPage;
