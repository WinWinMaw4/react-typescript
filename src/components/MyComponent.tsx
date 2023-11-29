// MyComponent.tsx
import React, { useState, useEffect } from 'react';

interface MyComponentProps {
  apiUrl: string;
}

interface Post {
  id: number;
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ apiUrl }) => {
  const [data, setData] = useState<Post[]>([]);

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

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
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
