"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreatedFeedback = /** @class */ (function () {
    function CreatedFeedback() {
        this.feedbackMessages = "";
    }
    CreatedFeedback.prototype.enviarFeedback = function (feedbackMessage, remetente) {
        if (feedbackMessage.trim() !== "") {
            this.feedbackMessages = feedbackMessage.trim();
            console.log("Feedback enviado com sucesso: ".concat(this.feedbackMessages));
            console.log("Remetente: ".concat(remetente));
            return "O feedback foi enviado com sucesso.";
        }
        else {
            console.error("Erro: o feedback não pode estar vazio.");
            return "Erro: o feedback não pode estar vazio.";
        }
    };
    return CreatedFeedback;
}());
exports.default = CreatedFeedback;
