const fdc3= require('openfin-fdc3')

const dqs = selector => document.querySelector(selector)

const on = (selector, type, handler) =>

dqs(selector).addEventListener(type, handler)

const val = selector => {

switch (true) {

case typeof dqs(selector).checked === 'boolean': return dqs(selector).checked

default: return dqs(selector).value

}

}

const params = ((location.search || '').split('?')[1] || '')

.split('&')

.reduce((acc, item) => {

const [k, v] = item.split('=')

return (!String(k).length || v === undefined) ? acc : {

[k]: v,

...acc,

}

}, {})

if (params.child) {

dqs('#child').style.display = 'block'

} else {

dqs('#main').style.display = 'block'

let windowCount = 0

on('#create-new-window', 'click', () => {

windowCount++

if (val('#separate-process')) {

fin.Application.start({

name: 'child-app-' + windowCount,

uuid: 'child-app-' + windowCount,

fdc3Api: true,

url: location.href + '?child=true',

});

} else {

fin.Window.create({

name: 'child-window-' + windowCount,

url: location.href + '?child=true'

})

}

})

}

dqs('#all').style.display = 'block'

fdc3.addContextListener(console.log)

fdc3.addIntentListener('sampleIntent', console.log)

on('#send-fdc3-intent', 'click', () => {

fdc3.raiseIntent('sampleIntent', {

type: 'this-is-a-type',

'i-am-the-payload': true,

})

})

on('#send-fdc3-context', 'click', () => {

fdc3.broadcast({

type: 'this-is-a-type',

'i-am-the-broadcast-payload': true,

})

})