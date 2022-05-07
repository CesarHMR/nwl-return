import { FeedbackData, FeedbacksRepository } from "../feedbacks-repository";
import { prisma } from "../../prisma"

export class PrismaFeedbacksRepositoy implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackData) {
        await prisma.feedback.create({
            data: {
                type: type,
                comment: comment,
                screenshot: screenshot
            }
        })
    }
}