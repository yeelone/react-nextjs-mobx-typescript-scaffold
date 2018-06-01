import React from 'react'
import { observable } from 'mobx'
import { observer,inject } from 'mobx-react'
import Page from '../components/hoc/page';
import Content from '../components/primitives/content';

@inject("userStore")
@observer
class Index extends React.Component {

    @observable test: string = 'test';

    changeText = () => {
       this.test = 'new test ';
    }

    render(){
        
        return (
            <Content>
                <p>
                {this.props.userStore.username}
                </p>
                <p>
                You can start now!!!
                </p>
            </Content>
        )
    }
}

export default Page(Index);