import { action, toJS, extendObservable,observable } from 'mobx';

const defaultState = {
  error: null,
  displayName: null,
  photoURL: null,
  auth: false,
  uid: false
}

export default class User {
  @observable username = "yeelone"

  constructor(User = null) {
    extendObservable(this, User || defaultState);
  }

  getJSON = () => toJS({
    auth: this.auth,
    displayName: this.displayName,
    photoURL: this.photoURL,
    uid: this.uid
  })

  getUserFromCookie = (req) => {};

  signInWithGithub = async (e) => {
  }

  signOut = (e) => {
  }

  updateUser = action( ({displayName, photoURL, auth, uid}) => {
  })
};