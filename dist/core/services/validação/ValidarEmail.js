"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidarEmail = /** @class */ (function () {
    function ValidarEmail() {
    }
    ValidarEmail.prototype.ValidarEmail = function (email) {
        var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        if (emailRegex.test(email)) {
            return "O email é válido.";
        }
        else {
            return "O email é inválido.";
        }
    };
    return ValidarEmail;
}());
exports.default = ValidarEmail;
