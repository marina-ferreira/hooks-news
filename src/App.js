import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const inputSearchRef = useRef();

  const getResults = async () => {
    const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
    const response = await axios.get(url);

    setResults(response.data.hits);
    inputSearchRef.current.focus();
  }

  const cbGetResults = useCallback(getResults, []);

  useEffect(() => {
    cbGetResults();
  }, [cbGetResults]);

  const handleClear = () => {
    setQuery('');
    inputSearchRef.current.focus();
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        getResults();
      }}>
        <input
          type='text'
          onChange={e => setQuery(e.target.value)}
          value={query}
          ref={inputSearchRef}
          autofocus='true'
        />

        <input type='submit' value='Search' />
        <input type='button' value='Clear' onClick={handleClear} />
      </form>

      <ArticleList results={results} />
    </>
  );
}

const ArticleList = memo(({ results }) => (
  <ul>
    {results.map(result => (
      result.url && <li key={result.objectID}>
        <a href={result.url}>{result.title}</a>
      </li>
    ))}
  </ul>
))

export default App;
