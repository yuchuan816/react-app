import React, { useState, useEffect } from 'react';
import api from '@/api';

export default function ArticleDetail({ match }) {
  const { id } = match.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    api.article.editArticle(id, { title, body }).then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    id && api.article.getArticleDetail(id).then((data) => {
      setTitle(data.title);
      setBody(data.body);
    });
  }, [id]);


  return (
    <div>
      <button onClick={handleSave}>保存</button>
      <hr />
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <textarea type="text" cols="80" rows="20" value={body} onChange={(e) => setBody(e.target.value)} />
    </div>
  );
}
