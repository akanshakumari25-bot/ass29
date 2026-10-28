import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Fetch function
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <h2>Loading posts...</h2>;
  if (isError) return <h2>Error: {error.message}</h2>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>React Query Setup Success! </h1>
      <h3>Sample Posts:</h3>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
      <p style={{ color: '#666', marginTop: '20px' }}>
        Check the bottom right corner of your screen to open the React Query DevTools panel!
      </p>
    </div>
  );
}

export default App;



