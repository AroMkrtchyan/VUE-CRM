/* eslint-disable */
import firebase from "firebase/compat"

export default {
  actions: {
		async login({ dispatch, commit }, { email, password }) {
			try {
				await firebase.auth().signInWithEmailAndPassword(email, password)
			} catch (e) {
				throw new Error('error')
			}
		}
  }
}