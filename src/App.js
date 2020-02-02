import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    const url = 'http://hn.algolia.com/api/v1/search?query=reacthooks';
    const response = await axios.get(url);

    setResults(response.data.hits);
  }

  return (
    <ul>
      {results.map(result => (
        result.url && <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
