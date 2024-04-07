"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateMensagen = /** @class */ (function () {
    function ValidateMensagen() {
    }
    ValidateMensagen.prototype.ValidateMensagen = function (feedbackMessage) {
        var length = 120;
        if (feedbackMessage.length >= length) {
            throw new Error("A mensagem deve ter no m\u00E1ximo ".concat(length, " caracteres."));
        }
        else {
            return feedbackMessage;
        }
    };
    return ValidateMensagen;
}());
exports.default = ValidateMensagen;
