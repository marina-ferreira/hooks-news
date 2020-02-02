import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import axios from 'axios';

function App() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputSearchRef = useRef();

  const getResults = async () => {
    setLoading(true);
    try {
      const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
      const response = await axios.get(url);

      setResults(response.data.hits);
      inputSearchRef.current.focus();
    } catch(error) {
      setError(error);
    }

    setLoading(false);
  }

  const cbGetResults = useCallback(getResults, []);

  useEffect(() => {
    cbGetResults();
  }, [cbGetResults]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults();
  }

  const handleClear = () => {
    setQuery('');
    inputSearchRef.current.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={e => setQuery(e.target.value)}
          value={query}
          ref={inputSearchRef}
          autoFocus
        />

        <input type='submit' value='Search' />
        <input type='button' value='Clear' onClick={handleClear} />
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArticleList results={results} />
      )}

      {error && <div>{error.message}</div>}
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
