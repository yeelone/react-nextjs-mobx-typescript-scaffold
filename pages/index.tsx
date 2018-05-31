import React from 'react'
import { observable } from 'mobx'
import { observer,inject } from 'mobx-react'
import { initializePage } from '../utils'
import { BaseLayout } from '../ui/layouts'

// const Home = () => (
//     <BaseLayout>
//         I bims de home page.
//         {this.props.baseStore.helloMessage}
//         {getName("yeelone")}
//     </BaseLayout>
// )
// interface Props { 
//     BaseStore?: any 
// }

@inject("BaseStore")
@observer
class Home extends React.Component {
    @observable test: string = 'test';
    constructor(props: any) {
        super(props)
    }

    changeText = () => {
       this.props.BaseStore.setMessage("+++++++");
       this.test = 'new test ';
    }

    render(){
        console.log("render", this.props.BaseStore.helloMessage,this.test);
        
        return (
            <div>
                I bims de home page.
                org: {this.props.BaseStore.helloMessage}    
                this.test: {this.test}
                <button onClick={() => this.changeText()}>change</button>
            </div>
        )
    }
}

function getName(name: string) {
    return name ;
}
export default initializePage(Home)
