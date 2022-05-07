import { FeedbackData, FeedbacksRepository } from "../repositories/feedbacks-repository";
import { MailManager } from "../repositories/nodemailer/email-sender";

export class SubmitFeedback{
    
    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailManager: MailManager
    ){}
    
    
    async execute(request: FeedbackData){
        const { type, comment, screenshot } = request

        await this.feedbacksRepository.create({ type, comment, screenshot })
        await this.mailManager.sendEmail({
            from:   'Equipe Feedget <chmr.interprise@gmail.com>',
            to:     'Cesar Henrique <chmr.developer@gmail.com>',
            subject:'New feedback',
            html:[
                `<div style="border-radius:1rem;font-family:sans-serif;color:#f8f8f2;font-size:1rem;padding:1rem;background-color:#282a36">`,
                `<h1 style="margin:0;">New Feedback recieved</h1>`,
                `<p>Type: ${type}</p>`,
                `<p style="margin-bottom:0;">Comment: ${comment}</p>`,
                `</div>`
            ].join(`\n`)
        })
    }
}