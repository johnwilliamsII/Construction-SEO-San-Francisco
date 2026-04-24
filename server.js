const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000
const out = path.join(__dirname, 'out')

app.use(express.static(out))

app.use((req, res) => {
  res.status(404).sendFile(path.join(out, '404', 'index.html'))
})

app.listen(port, () => {
  console.log('Server running on port ' + port)
})
