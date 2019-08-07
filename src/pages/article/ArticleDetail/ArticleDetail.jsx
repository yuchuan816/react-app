import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '@/api';

export default function ArticleDetail({ match }) {
  const { id } = match.params;
  const [articleDetail, setArticleDetail] = useState({});
  const { title, body, comments = [] } = articleDetail;

  useEffect(() => {
    api.article.getArticleDetail(id).then((data) => {
      setArticleDetail(data);
    });
  }, [id]);

  return (
    <div>
      <Link
        to={{
          pathname: `/ArticleEdit/${id}`,
        }}
      >
        编辑
      </Link>
      <hr />
      <h3>{title}</h3>
      <p>{body}</p>
      <hr />
      <p>评论：</p>
      {comments.map(item => (
        <div key={item.id}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
