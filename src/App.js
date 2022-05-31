import { useState } from "react"

function App() {

  const [resourceType, setResourceType] = useState('posts');

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>POSTS</button>
        <button onClick={() => setResourceType('users')}>USERS</button>
        <button onClick={() => setResourceType('comments')}>COMMENTS</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
