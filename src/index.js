let express = require('express')

const app =express()
app.use(express.json())
const route = require('../src/firebase/fcm')


app.use('/app',route)



app.listen(3000,()=>{
    console.log(`server is listing on 3000 `)
})

