import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import Header from '../compositions/header';
import Stores from '../../stores/index';
const styles = require('./styles.less');

export interface IState {
  stores:{}
}


export default ComposedComponent => class extends React.Component<any,IState> {
  static async getInitialProps(ctx) {
    let userState = null;
    const isServer = !!ctx.req;

    if (isServer === true) {
      const User = Stores('__userStore__',{});
      userState = User.getUserFromCookie(ctx.req);
    }

    return {
      isServer,
      userState,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      stores: {
        userStore: Stores('__userStore__', props.userState),
      },
    };
  }

  render() {
    return (<Provider {...this.state.stores} >
      <div className={styles.app}>
        <Head>
        </Head>
        <Header />
        <ComposedComponent user={this.props} />
      </div>
    </Provider>);
  }
};