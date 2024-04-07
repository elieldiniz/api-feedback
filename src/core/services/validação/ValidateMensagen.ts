export default class ValidateMensagen {

    ValidateMensagen(feedbackMessage: string) {

        const length = 120;

        if (feedbackMessage.length >= length) {
            throw new Error(`A mensagem deve ter no máximo ${length} caracteres.`);
        } else {
            return feedbackMessage;
        }
    }
}
