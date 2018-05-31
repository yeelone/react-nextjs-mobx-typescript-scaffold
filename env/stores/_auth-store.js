import { observable, computed } from 'mobx'
import Router from 'next/router'
import { auth } from './'

let store = null

class Store {
    @observable user = null
    @observable authIsPending = true

  constructor () {
  }


  signIn = () => {
  }

  signOut = () => {
  }

  @computed get isAuthenticated() {
      return !!this.user;
  }
}

export default function getStore () {
  if (store === null) {
    store = new Store()
  }
  return store
}
