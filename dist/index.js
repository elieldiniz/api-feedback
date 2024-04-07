"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importando a classe CreatedFeedback e ValidarEmail
var CreatedFeadBack_1 = require("./core/usecase/CreatedFeadBack");
var ValidarEmail_1 = require("./core/services/valida\u00E7\u00E3o/ValidarEmail");
var ValidateMensagen_1 = require("./core/services/valida\u00E7\u00E3o/ValidateMensagen");
var UsuarioEnviaFeedBack = /** @class */ (function () {
    function UsuarioEnviaFeedBack(mensagen, email) {
        // Verificar se a mensagem e o email são válidos
        if (mensagen !== null && mensagen !== undefined && mensagen.trim() !== '' &&
            email !== null && email !== undefined && email.trim() !== '') {
            // Validar mensagem e email
            var MensagenValida = new ValidateMensagen_1.default().ValidateMensagen(mensagen);
            var ValidaEmail = new ValidarEmail_1.default().ValidarEmail(email);
            // Verificar se a mensagem e o email são válidos após a validação
            if (MensagenValida && ValidaEmail) {
                this.mensagenValida = MensagenValida;
                this.validaEmail = ValidaEmail;
            }
            else {
                throw new Error("Mensagem ou email inválido.");
            }
        }
        else {
            throw new Error("Mensagem ou email inválido.");
        }
    }
    UsuarioEnviaFeedBack.prototype.enviarFeedback = function () {
        // Criar uma instância de CreatedFeedback e chamar o método enviarFeedback
        var feedback = new CreatedFeadBack_1.default();
        feedback.enviarFeedback(this.mensagenValida, this.validaEmail);
        console.log("Obrigado por nos ajudar!");
    };
    return UsuarioEnviaFeedBack;
}());
exports.default = UsuarioEnviaFeedBack;
var Email = "usuario123@example.com";
var mensagen = "Olá! Obrigado pelo seu feedback. Vamos analisar com cuidado.";
console.log(new UsuarioEnviaFeedBack(Email, mensagen).enviarFeedback());
