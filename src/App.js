import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([])

  const getResults = async () => {
    const url = 'http://hn.algolia.com/api/v1/search?query=reacthooks';
    const response = await axios.get(url);

    setResults(response.data.hits);
  }

  const cbGetResults = useCallback(getResults, []);

  useEffect(() => {
    cbGetResults();
  }, [cbGetResults]);

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
