const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email,name) => {

      sgMail.send({

          to: email,
        from: 'naman.agarwal@globant.com',
        subject: 'Thanks for joining in!',
        text:`Welcome to the app, ${name}. Let me know how you get along with the app.`

      })

}

const sendCancelationEmail = (email,name)=>{

    sgMail.send({

        to: email,
      from: 'naman.agarwal@globant.com',
      subject: 'Sorry to see you go!',
      text:`Goodbye, ${name}. I hope to see you back sometime soon.`

    })

}

module.exports ={

    sendWelcomeEmail,
    sendCancelationEmail
}



