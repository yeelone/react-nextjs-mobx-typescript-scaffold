/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import { observable } from 'mobx';
import { observer,inject } from 'mobx-react';
import Page from '../components/hoc/page';
import { IAppProps } from './interfaces';

const styles = require('./styles.less');

@inject("userStore")
@observer
class Index extends React.Component<IAppProps, any>  {

    @observable test: string = 'test';
    constructor(props : IAppProps) {
        super(props);
    }

    changeText = () => {
       this.test = 'new test ';
    }

    render(){
        
        return (
            <div className={styles.container}>
                <p>
                {this.props.userStore.username}
                </p>
                <p>
                You can start now!!!
                </p>
            </div>
        )
    }
}

export default Page(Index);