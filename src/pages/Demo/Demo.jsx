import React, { useState, useEffect } from 'react';

export default function ArticleList() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect-1');
    return () => {
      console.log('clear-1');
    };
  });

  useEffect(() => {
    console.log('useEffect-2');
    return () => {
      console.log('clear-2');
    };
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Demo</h1>
      <p>{count}</p>
      <button onClick={increaseCount}>增加</button>
    </div>
  );
}
