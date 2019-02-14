<template>
  <div id="app">
    <template v-if="toilet['.value'] == 'wolne'">
      <div class="status-wrapper"><span>{{ toilet['.value'] }}</span></div>
    </template>
    <template v-else-if="toilet['.value'] == 'zajęte'">
      <div class="status-wrapper red"><span>{{ toilet['.value'] }}</span></div>
      <div class="bottm-wrp">
        <a
          href="#"
          @click="queue()"
          class="cta"
        >Ustaw się w kolejce</a>
      </div>
    </template>
    <template v-else-if="toilet['.value'] == 'off'">
      <div class="status-wrapper red"><span>System offline</span></div>
    </template>
    <template v-else>
      <div class="status-wrapper blue"><span>Sprawdzam...</span></div>
    </template>
  </div>
</template>

<script>
import { db } from './firebase'

export default {
  name: 'App',
  data () {
    return {
      toilet: {
        '.value': 'Sprawdzam...'
      }
    }
  },
  firebase () {
    return {
      toilet: {
        source: db.ref('toilet/status'),
        asObject: true,
        readyCallback (c) {
          console.log('asd', this.toilet['.value'])
        }
      }
    }
  },
  methods: {
    changeFav (img) {
      var favicon = document.querySelector('link[rel="shortcut icon"]')
      if (!favicon) {
        favicon = document.createElement('link')
        favicon.setAttribute('rel', 'shortcut icon')
        var head = document.querySelector('head')
        head.appendChild(favicon)
      }
      favicon.setAttribute('type', 'image/png')
      favicon.setAttribute('href', img)
    },
    queue () {
      alert('Opcja płatna')
    },
    styleText () {
      let target = document.querySelector('.status-wrapper span')
      target.innerHTML = target.innerHTML.replace('e', '<span>e</span>')
      console.log(target)
    },
    changeFunction () {
      if (this.toilet['.value'] === 'zajęte') {
        this.changeFav('static/zajete.png')
      } else if (this.toilet['.value'] === 'wolne') {
        this.changeFav('static/wolne.png')
      }
    }
  },
  mounted () {
    this.changeFunction()
  },
  watch: {
    toilet: function (n) {
      console.log('Change detected...', n['.value'])
      this.toilet['.value'] = n['.value']
      if (this.toilet['.value'] === 'zajęte') {
        // this.styleText()
        this.changeFav('static/zajete.png')
      } else if (this.toilet['.value'] === 'wolne') {
        // this.styleText()
        this.changeFav('static/wolne.png')
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&subset=latin-ext');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:700&subset=latin-ext');

html {
  margin:0;
  padding:0;
  overflow: hidden;
}
body {
  background: #112 url('/static/image.jpg') center no-repeat;
  background-size:cover;
  margin:0;
  height:100vh;
  padding:0;
  font-family: 'Open Sans', sans-serif;
  overflow: hidden;
}
.status-wrapper {
  text-align: center;
  width: 100%;
  height: 96vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-wrapper span {
  font: 100 10vw "Pacifico";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #1df800, 0 0 0.5em #1df800, 0 0 0.1em #1df800, 0 10px 3px #000;
  animation: green-pulse linear infinite 2s;

}
.status-wrapper.red span {
  font: 100 10vw "Pacifico";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
  animation: red-pulse linear infinite 2s;
}
.status-wrapper.blue span {
  font: 100 10vw "Pacifico";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #7c44ff, 0 0 0.5em #7c44ff, 0 0 0.1em #7c44ff, 0 10px 3px #000;
  animation: blue-pulse linear infinite 2s;
}
.status-wrapper span::first-letter {
  animation: blink linear infinite 2s;
}
.status-wrapper span span {
  animation: blink linear infinite 2s;
}
.status-wrapper.red span span {
  animation: blink linear infinite 2s;
}
.status-wrapper.blue span span {
  animation: blink linear infinite 2s;
}
.bottm-wrp {
  display:flex;
  align-self: flex-end;
  justify-content: center;
  position: relative;
  bottom: 100px;
  a {
    color:#fff;
    transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1);
    text-transform: uppercase;
    text-decoration: none;
    border-radius:20px;
    padding:10px 20px;
    border:2px solid #ccc;

    &:hover, &:focus {
      color:#ccc;
    }
  }
}
@keyframes green-pulse {
  from, to {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #1df800, 0 0 0.5em #1df800, 0 0 0.1em #1df800, 0 10px 3px #000;
  }
  50% {
    text-shadow: 0 -40px 80px, 0 0 2px, 0 0 0.7em #1df800, 0 0 0.4em #1df800, 0 0 0.1em #1df800, 0 10px 3px #000;
  }
}
@keyframes blue-pulse {
  from, to {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #7c44ff, 0 0 0.5em #7c44ff, 0 0 0.1em #7c44ff, 0 10px 3px #000;
  }
  50% {
    text-shadow: 0 -40px 80px, 0 0 2px, 0 0 0.7em #7c44ff, 0 0 0.4em #7c44ff, 0 0 0.1em #7c44ff, 0 10px 3px #000;
  }
}
@keyframes red-pulse {
  from, to {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
  }
  50% {
    text-shadow: 0 -40px 80px, 0 0 2px, 0 0 0.7em #ff4444, 0 0 0.4em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
  }
}
@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79%{
     color: #333;
  }
  80% {

    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}
@media screen and (max-width:600px) {
  .status-wrapper span, .status-wrapper.red span {
    font-size: 20vw;
  }
}
</style>
