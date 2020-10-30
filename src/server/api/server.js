const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error:error.message})
})

app.listen(3333, () => console.log('server is running on port 3333'))