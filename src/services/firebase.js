import * as firebase from 'nativescript-plugin-firebase'
import config from './firebase-config'

// Initialize Firebase
firebase.init(config)

export default {
  database: firebase.database()
}
