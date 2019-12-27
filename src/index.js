const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')



const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

// app.use((req, res, next) => { 
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The website is in maintenance sorry, see u later !')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//    const token = jwt.sign({_id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7d'} )
//    console.log(token)
   
//    const data = jwt.verify(token, 'thisismynewcourse')
//    console.log(data)
// }

// myFunction()

// andrew => poisfdsjda => andrew (cryptage reversible)
// mypass => iofdjsodfijasiojd (hashing not reversible)

// const pet = {
//     name: 'al'
// }

// pet.toJSON = function () {
//     console.log(this)
//     return {}
// }

// console.log(JSON.stringify(pet))
