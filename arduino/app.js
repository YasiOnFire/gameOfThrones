import {
  fbconfig
} from '../env'

const firebase = require('firebase')

const app = firebase.initializeApp(fbconfig)

const db = app.database()
const toilet = db.ref('toilet')

const five = require('johnny-five')
const EtherPortClient = require('etherport-client').EtherPortClient
const board = new five.Board({
  port: new EtherPortClient({
    host: '192.168.1.113',
    // host: '192.168.43.213',
    port: 3030
  }),
  timeout: 1e5,
  repl: false
})

board.on('ready', function () {
  console.log('READY!')
  // var led = new five.Led(16)

  const photoresistor = new five.Sensor({
    pin: 'A0',
    freq: 1500
  })

  photoresistor.on('data', function () {
    console.log(this.value)
    if (this.value <= 5) {
      toilet.set({
        status: 'zajęte'
      })
      // led.on()
    } else {
      toilet.set({
        status: 'wolne'
      })
      // led.off()
    }
  })
})
