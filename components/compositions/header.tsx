import React from 'react';
import { observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  const rightColumn = (props.userStore.auth === true)
  ? (<div>
    <a href="signout" onClick={props.userStore.signOut}></a>
  </div>)
  : (<div>
    <a href="signin" onClick={props.userStore.signInWithGithub}> Login</a>
  </div>);

  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
        { rightColumn }
      </AppBar>

      
  );
};

export default observer(['userStore'], Header);