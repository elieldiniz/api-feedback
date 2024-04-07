export default class ValidarEmail {
    ValidarEmail(email: string): string {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (emailRegex.test(email)) {
            return "O email é válido.";
        } else {
            return "O email é inválido.";
        }
    }    
}
