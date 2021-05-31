import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/expenses').then(res => {
      console.log('Inisde GET ' + JSON.stringify(res));
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>API Response</h1>
      {data.length && data[0].item}
    </div>
  );
}

export default App;
