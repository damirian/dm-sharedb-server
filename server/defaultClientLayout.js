const fs = require('fs')
const path = require('path')
const defaultStyles = fs.readFileSync(path.join(__dirname, 'defaultStyles.css'), 'utf8')

module.exports = p => `
<html>
  <head>
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    ${p.tail ? "<script nonce=>window.JS_BUNDLE = '" + p.jsBundle + "'</script>" : ''}
    ${p.head || ''}
    <style>${defaultStyles}</style>
    ${p.styles || ''}
    <script>window.IS_REACT = true</script>
    <script>window.env = ${JSON.stringify(p.env)}</script>
  </head>
  <body>
    <div id='app'></div>
    <script type='application/json' id='bundle'>${JSON.stringify(p.modelBundle)}</script>
    ${p.tail || ''}
    <script defer src='${p.jsBundle}'></script>
  </body>
</html>
`
