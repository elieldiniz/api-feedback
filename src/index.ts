// Importando a classe CreatedFeedback e ValidarEmail
import CreatedFeedback from "./core/usecase/CreatedFeadBack";
import ValidarEmail from "./core/services/validação/ValidarEmail";
import ValidateMensagen from "./core/services/validação/ValidateMensagen";

export default class UsuarioEnviaFeedBack {
    public mensagenValida: string;
    public validaEmail: string;

    constructor(mensagen: string, email: string) {
        // Verificar se a mensagem e o email são válidos
        if (mensagen !== null && mensagen !== undefined && mensagen.trim() !== '' &&
            email !== null && email !== undefined && email.trim() !== '') {
            // Validar mensagem e email
            const MensagenValida = new ValidateMensagen().ValidateMensagen(mensagen);
            const ValidaEmail = new ValidarEmail().ValidarEmail(email);
            
            // Verificar se a mensagem e o email são válidos após a validação
            if (MensagenValida && ValidaEmail) {
                this.mensagenValida = MensagenValida;
                this.validaEmail = ValidaEmail;
            } else {
                throw new Error("Mensagem ou email inválido.");
            }
        } else {
            throw new Error("Mensagem ou email inválido.");
        }
    }
    
    
    enviarFeedback(): void {
        // Criar uma instância de CreatedFeedback e chamar o método enviarFeedback
        const feedback = new CreatedFeedback();
        feedback.enviarFeedback(this.mensagenValida, this.validaEmail);
        console.log(`Obrigado por nos ajudar!`);
    }
}


const Email = "usuario123@example.com"
const mensagen = "Olá! Obrigado pelo seu feedback. Vamos analisar com cuidado."

console.log(new UsuarioEnviaFeedBack(Email,mensagen).enviarFeedback())