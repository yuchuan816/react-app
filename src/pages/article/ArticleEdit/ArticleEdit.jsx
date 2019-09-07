import React, { useState, useEffect } from 'react';
import lodash from 'lodash';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSnackbar } from 'notistack';
import api from '@/api';

export default function ArticleDetail({ match }) {
  const { enqueueSnackbar } = useSnackbar();
  const { id } = match.params;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    if (lodash.isNumber(id)) {
      api.article.editArticle(id, { title, body }).then((data) => {
        enqueueSnackbar('修改成功', { variant: 'success' });
      });
    } else {
      api.article.addArticle({ title, body }).then((data) => {
        enqueueSnackbar('添加成功', { variant: 'success' });
      });
    }
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
      <CKEditor
        editor={ClassicEditor}
        data={body}
        onInit={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        // onBlur={(event, editor) => {
          // console.log('Blur.', editor);
        // }}
        // onFocus={(event, editor) => {
          // console.log('Focus.', editor);
        // }}
      />
      {/* <textarea
        type="text"
        cols="80"
        rows="20"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /> */}
    </div>
  );
}
