import { action, extendObservable,observable } from 'mobx';

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

  getUserFromCookie = (req) => {};

  signInWithGithub = async (e) => {
  }

  signOut = (e) => {
  }

  updateUser = action( ({displayName, photoURL, auth, uid}) => {
    console.log(displayName,photoURL,auth,uid)
  })
};