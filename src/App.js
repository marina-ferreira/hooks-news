import React, { useState, useEffect, useCallback, useRef, memo } from 'react';
import axios from 'axios';
import {
  GlobalStyle,
  Input,
  Button,
  List,
  ListItem,
  ListLink
} from './App.styles';

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
        <Input
          type='text'
          onChange={e => setQuery(e.target.value)}
          value={query}
          ref={inputSearchRef}
          autoFocus
        />

        <Button type='submit' value='Search' />
        <Button light type='button' value='Clear' onClick={handleClear} />
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <ArticleList results={results} />
      )}

      {error && <div>{error.message}</div>}
      <GlobalStyle />
    </>
  );
}

const ArticleList = memo(({ results }) => (
  <List>
    {results.map(result => (
      result.url && <ListItem key={result.objectID}>
        <ListLink href={result.url}>{result.title}</ListLink>
      </ListItem>
    ))}
  </List>
))

export default App;
