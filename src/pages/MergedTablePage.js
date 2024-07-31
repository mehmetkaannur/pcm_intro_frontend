import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file

function MergedTablePage() {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/merged').then(response => setMergedData(response.data));
  }, []);

  return (
    <div>
      <h1>Merged Data</h1>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>User ID</th>
            <th>Eligable Campaign Name</th>
          </tr>
        </thead>
        <tbody>
          {mergedData.map(item => (
            <tr key={item.userId + item.campaignName}>
              <td>{item.userName}</td>
              <td>{item.userId}</td>
              <td>{item.campaignName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MergedTablePage;
