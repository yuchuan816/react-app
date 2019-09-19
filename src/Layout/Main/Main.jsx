import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { Menu as MenuIcon, Home as HomeIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { MainWrapper, ContentWrapper } from './styled';
import ArticleList from '@/pages/article/ArticleList/ArticleList';
import ArticleDetail from '@/pages/article/ArticleDetail/ArticleDetail';
import ArticleEdit from '@/pages/article/ArticleEdit/ArticleEdit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Main({ match, history }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { path, url } = match;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleHome() {
    setAnchorEl(null);
    history.push({ pathname: `${url}/ArticleList` });
  }

  return (
    <MainWrapper>
      <AppBar>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            L-Y-C BLOG
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleHome}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </MenuItem>
        </Menu>
      </AppBar>
      <ContentWrapper>
        <Switch>
          <Redirect exact from={path} to={`${path}/ArticleList`} />
          <Route path={`${path}/ArticleList`} component={ArticleList} />
          <Route path={`${path}/ArticleDetail/:id`} component={ArticleDetail} />
          <Route path={`${path}/ArticleEdit/:id`} component={ArticleEdit} />
          <Route path={`${path}/ArticleEdit`} component={ArticleEdit} />
        </Switch>
      </ContentWrapper>
    </MainWrapper>
  );
}
