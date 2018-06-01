import React from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Row from '../primitives/row';

const styles = {
  root: {
    flexGrow: 1,
  },
};


const Header = (props) => {
  const rightColumn = (props.userStore.auth === true)
  ? (<Row align="center">
    <a href="signout" onClick={props.userStore.signOut}><SignOut /></a>
  </Row>)
  : (<Row align="center">
    <a href="signin" onClick={props.userStore.signInWithGithub}> Login</a>
  </Row>);

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