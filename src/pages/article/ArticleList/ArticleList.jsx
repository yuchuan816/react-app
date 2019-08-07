import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '@/api';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.article.getArticleList().then((data) => {
      setArticleList(data);
    });
  }, []);

  return (
    <div>
      {articleList.map(item => (
        <div key={item.id}>
          <Link
            to={{
              pathname: `/ArticleDetail/${item.id}`,
            }}
          >
            {item.title}
          </Link>
          <div>
            <span>{item.id}</span>
            <span> | </span>
            <span>{item.created_time}</span>
            <span> | </span>
            <span>{item.modified_time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
