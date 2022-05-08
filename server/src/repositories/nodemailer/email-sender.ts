import nodemailer from "nodemailer"

interface IMailData{
    from: string,
    to: string,
    subject: string,
    html: string
}

interface IMailManager{
    sendMail: (data: IMailData) => Promise<void>
}

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "ea990c421db7ba",
        pass: "519769fb4ef797"
    }
});

export class MailManager implements IMailManager{
    constructor(){

    }
    
    async sendMail(data: IMailData){
        const { from, to, subject, html } = data
        
        await transport.sendMail({
            from,
            to,
            subject,
            html
        })
    };
}