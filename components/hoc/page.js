import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';

import App from '../primitives/app';
import Header from '../compositions/header';

import Stores from '../../stores/index';

export default ComposedComponent => class extends React.Component {
  static async getInitialProps(ctx) {
    let userState = null;
    const isServer = !!ctx.req;

    if (isServer === true) {
      const User = Stores('__userStore__');
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
    const styles =   null;
    return (<Provider {...this.state.stores} >
      <App bgColor="#fffa65">
        <Head>
          <style>
            { styles }
          </style>
        </Head>
        <Header />
        <ComposedComponent user={this.props} />
      </App>
    </Provider>);
  }
};