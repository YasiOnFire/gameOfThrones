# gameOfThrones

> Office toilet live status (Vue, node, firebase, arduino, johnny five)

This is a arduino and webapp that detects if someone is in the toilet. I've build it because we had a small problem with toilet queues at the office. You need an arduino with wifi module or nodemcu, also a photoresistor, and 1k Ohm resistor. The web app automaticaly changes toilet status, and favicon color so you only need to have this app pinned in the browser. 
Remember to add your firebase credentials to env.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# start arduino app
npm run app
```
Fritzing schema:
<img src="http://johnny-five.io/img/breadboard/photoresistor.png"
     alt="fritzing" />


