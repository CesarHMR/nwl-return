import express from "express"
import { MailManager } from "./repositories/nodemailer/email-sender";
import { PrismaFeedbacksRepositoy } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedback } from "./use-cases/submit-feedback-use-cases";

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepositoy()
    const mailManager = new MailManager()
    const feedbackSubmit = new SubmitFeedback(prismaFeedbacksRepository, mailManager)
    feedbackSubmit.execute({type, comment, screenshot})

    return res.status(201).send();
});