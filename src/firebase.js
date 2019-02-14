import {
  initializeApp
} from 'firebase'
import {
  fbconfig
} from '../env'

const app = initializeApp(fbconfig)

export const db = app.database()
