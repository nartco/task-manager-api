const mongoose = require('mongoose')

mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})




// const me = new User({
//     name: '    sebastien      ',
//     email: 'MYEMAIL@MEAD.IO  ',
//     password:'llllllllllllll        '
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })