/* "use server"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData)=> {

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'nicolaslamberto2840@gmail.com',
        subject:'Message from contact form',
        text: message,
        reply_to: senderEmail
    })

}
 */