const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

const op = {
  flags: 'wr',
  encoding: 'utf8',
  fd: null,
  mode: 0o666,
  autoClose: true
}

let css = {
    ":root": {
    background: 'red',
    color: '#fff',
    width: '100%'
  },
  menu: {
    background: 'red',
    color: '#fff',
    width: '100%'
  },
  search: {
    background: 'white',
    width: '100%',
    '--main-bg-color': 'brown'
  }
}

function mount(css) {
  let final = '';
  for (x in css) {
    final += `.${x} {`
      for (y in css[x]) {
        final += `${y}: ${css[x][y]};`
      }
    final += `}`
  }
  return final
}

const file = mount(css);
fs.writeFile('./assets/csstest.min.css', file, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('File Created!')
})
app.use(bodyParser.urlencoded({extended: true}))
