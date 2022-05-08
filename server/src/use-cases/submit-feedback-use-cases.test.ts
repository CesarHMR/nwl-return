import { SubmitFeedback } from "./submit-feedback-use-cases"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedback(
    {create: createFeedbackSpy },
    {sendMail: sendMailSpy }
)

describe('Submite feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "Tudo bugado!",
            screenshot: "data:image/png;base64.2343462342534897685"
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Tudo bugado!',
            screenshot: 'data:image/png;base64.2343462342534897685'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without a comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64.2343462342534897685'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback with a invalid screenshot format', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Tudo bugado!',
            screenshot: 'test.png'
        })).rejects.toThrow();
    })

})