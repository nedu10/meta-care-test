"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidator = void 0;
var createValidator_1 = __importDefault(require("../../helpers/createValidator"));
var AuthValidator = /** @class */ (function () {
    function AuthValidator() {
        this.CreateAccountDto = (0, createValidator_1.default)(function (Joi) {
            return {
                firstName: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("firstName is required")),
                lastName: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("lastName is required")),
                email: Joi.string()
                    .email()
                    .required()
                    .trim()
                    .lowercase()
                    .error(new Error("A valid email address is required")),
                password: Joi.string()
                    .required()
                    .error(new Error("Password is required")),
            };
        });
        this.LoginDto = (0, createValidator_1.default)(function (Joi) {
            return {
                email: Joi.string()
                    .required()
                    .trim()
                    .lowercase()
                    .error(new Error("A valid email address is required")),
                password: Joi.string()
                    .required()
                    .error(new Error("Password is required"))
            };
        });
        this.ChangePasswordDto = (0, createValidator_1.default)(function (Joi) {
            return {
                password: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("Please enter a valid password")),
            };
        });
        this.RefreshTokenDto = (0, createValidator_1.default)(function (Joi) {
            return {
                refreshToken: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("Refresh token is required")),
            };
        });
        this.RequestPassqordResetDto = (0, createValidator_1.default)(function (Joi) {
            return {
                email: Joi.string()
                    .required()
                    .trim()
                    .lowercase()
                    .error(new Error("A valid email address is required")),
            };
        });
        this.ResetPasswordDto = (0, createValidator_1.default)(function (Joi) {
            return {
                password: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("Please enter a valid password")),
                resetToken: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("Please provid the token")),
                confirmPassword: Joi.string()
                    .required()
                    .trim()
                    .error(new Error("Please enter a valid password")),
            };
        });
    }
    return AuthValidator;
}());
exports.AuthValidator = AuthValidator;
//# sourceMappingURL=auth.dto.js.map