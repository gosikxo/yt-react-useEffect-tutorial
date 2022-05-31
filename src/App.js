import { useState, useEffect } from "react"

function App() {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>POSTS</button>
        <button onClick={() => setResourceType('users')}>USERS</button>
        <button onClick={() => setResourceType('comments')}>COMMENTS</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  );
}

export default App;
