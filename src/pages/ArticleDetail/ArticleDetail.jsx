import React, { useState, useEffect } from 'react';
import api from '@/api';

export default function ArticleDetail({ match }) {
  const { id } = match.params;
  const [articleDetail, setArticleDetail] = useState({});
  const { title, body, comments = [] } = articleDetail;

  useEffect(() => {
    api.article.getArticleDetail({ id }).then((res) => {
      setArticleDetail(res);
    });
  }, [id]);

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      {comments.map(item => (
        <div key={item.id}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
