import express from 'express'
import path from 'path'

const app = express()
const PORT = 5000
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend/dist")))

app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
})

app.listen(PORT, ()=> {
    console.log(`app is listening on port ${PORT}`)
})