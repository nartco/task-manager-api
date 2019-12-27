const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcolmeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ice7monster72@gmail.com',
        subject: 'Thanx for joining in!',
        text: `Welcolme to the app, ${name} let met know how you get long with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'ice7monster72@gmail.com',
        subject: 'sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometimes soon.`
    })
}

module.exports = {
    sendWelcolmeEmail,
    sendCancelationEmail
}