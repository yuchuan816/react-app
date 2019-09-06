import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@material-ui/core';
import api from '@/api';
import { date2commonDate } from '@/utils/date';

export default function ArticleList() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    api.article.getArticleList().then((data) => {
      setArticleList(data);
    });
  }, []);

  return (
    <div>
      <List>
        {articleList.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem button key={item.id}>
              <ListItemText>
                {/* <Link
                  to={{
                    pathname: `ArticleDetail/${item.id}`,
                  }}
                >
                  {item.title}
                </Link> */}
                <Typography color="textPrimary" variant="body1">{item.title}</Typography>
                <span>{item.id}</span>
                <span> | </span>
                <span>{date2commonDate(item.created_time)}</span>
                <span> | </span>
                <span>{date2commonDate(item.modified_time)}</span>
              </ListItemText>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
