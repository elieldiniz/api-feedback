export default class CreatedFeedback {
    private feedbackMessages: string = "";

    enviarFeedback(feedbackMessage: string, remetente: string): string {
        if (feedbackMessage.trim() !== "") {
            this.feedbackMessages = feedbackMessage.trim();
            console.log(`Feedback enviado com sucesso: ${this.feedbackMessages}`);
            console.log(`Remetente: ${remetente}`);
            return "O feedback foi enviado com sucesso.";
        } else {
            console.error("Erro: o feedback não pode estar vazio.");
            return "Erro: o feedback não pode estar vazio.";
        }
    }
}
