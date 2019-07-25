import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '@/api';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.article.getArticleList().then((res) => {
      setArticleList(res);
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
            {item.id}
          </Link>
        </div>
      ))}
    </div>
  );
}
