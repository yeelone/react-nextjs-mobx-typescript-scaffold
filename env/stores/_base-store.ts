import { action, observable } from 'mobx'

let store = null

const messages = [
  'nice to have you here',
  'i like you',
  'welcome <3',
  "let's drink a beer together mate!",
  'you look awesome today'
]

class Store {
    @observable helloMessage = '';

    constructor () {
        this.helloMessage = messages[Math.floor(Math.random() * (messages.length - 1))]
        console.log("constructor", this.helloMessage)
    }

    @action start(){
      this.helloMessage = "waiting"
    }

    @action setMessage(msg){
      this.helloMessage =  msg 
      console.log("setMessage", this.helloMessage)
    }

}

export default function initStore (isServer, message) {
    if (isServer && typeof window === 'undefined') {
      return new Store()
    } else {
      if (store === null) {
        store = new Store()
      }
      return store
    }
}
