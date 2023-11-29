// MyComponent.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MyComponentProps {
  apiUrl: string;
}

interface Post {
  id: number;
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ apiUrl }) => {
  const [data, setData] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newPostTitle }),
      });

      if (response.ok) {
        // Reload data after successful submission
        // You may choose to use state management libraries for a more elegant solution
        window.location.reload();
      } else {
        console.error('Failed to add new post');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
           <form onSubmit={handleSubmit} className="mt-4">
        <label className="block text-lg font-semibold mb-2">Add New Post:</label>
        <div className="flex items-center">
          <input
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mr-2"
            required
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Post
          </button>
        </div>
      </form>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="text-lg mb-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
