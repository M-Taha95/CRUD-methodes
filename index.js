const express = require('express')
const app = express()
// app.get('/',(req,res)=>{
//     res.send("Hello There!")
// })
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/users',require('../express/node_modules/routs/api/users'))

app.listen(3000,() => {
    console.log("Server Started on port 3000")
})