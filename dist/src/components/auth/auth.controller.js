"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllerFactory = void 0;
var http_status_1 = __importDefault(require("http-status"));
var logger_1 = __importDefault(require("../../logger"));
function AuthControllerFactory(authService) {
    return {
        /**
         * Signs up a new user
         */
        register: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, user, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.register(body)];
                        case 2:
                            user = _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.CREATED).json({
                                    message: 'User account was created successfully, please check your email for confirmation',
                                    status: 'success',
                                    statusCode: http_status_1.default.CREATED,
                                    data: user,
                                })];
                        case 3:
                            error_1 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_1));
                            next(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Verifies user's email
         */
        verifyEmail: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var token, loginData, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            token = req.query.token;
                            return [4 /*yield*/, authService.verifyEmail(token)];
                        case 1:
                            loginData = _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).json({
                                    message: 'Email was successfully verified',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                    data: loginData,
                                })];
                        case 2:
                            error_2 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_2));
                            next(error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Verifies user's email
         */
        resendVerificationMail: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var email, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            email = req.query.email;
                            return [4 /*yield*/, authService.resendVerificationMail(email)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).json({
                                    message: 'A verification mail has been sent to you',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                })];
                        case 2:
                            error_3 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_3));
                            next(error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Attempts to log in a user
         */
        login: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, loginData, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.login(body)];
                        case 2:
                            loginData = _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).json({
                                    message: 'Logged in successfully',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                    data: loginData,
                                })];
                        case 3:
                            error_4 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_4));
                            next(error_4);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
       * Attempts to log in a user
       */
        changePassword: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, user, error_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            user = req['user'];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.changePassword(__assign(__assign({}, body), { userId: user.id }))];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).json({
                                    message: 'Password was changed successfully',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                })];
                        case 3:
                            error_5 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_5));
                            next(error_5);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Request a password reset
         */
        requestPasswordReset: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, error_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.initiatePasswordReset(body.email)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).json({
                                    message: 'We have sent a mail to you',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                })];
                        case 3:
                            error_6 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_6));
                            next(error_6);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Attempts to reset a password
         */
        resetPassword: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, error_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.resetPassword(body)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, res.status(200).json({
                                    message: 'Your password was reset successfully',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                })];
                        case 3:
                            error_7 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_7));
                            next(error_7);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Generate refresh token
         */
        generateToken: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var body, loginInfo, error_8;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            body = req.body;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, authService.generateNewRefreshToken(body.refreshToken)];
                        case 2:
                            loginInfo = _a.sent();
                            return [2 /*return*/, res.status(200).json({
                                    message: 'Successfully renewed session',
                                    status: 'success',
                                    statusCode: http_status_1.default.OK,
                                    data: loginInfo
                                })];
                        case 3:
                            error_8 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_8));
                            next(error_8);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        },
        /**
         * Logout a user
         * @param {Object} req: url params
         * @param {Function} res: Express.js response callback
         * @param {Function} next: Express.js middleware callback
         * @author Emmanuel Ogbiyoyo
         * @public
         */
        logout: function (req, res, next) {
            return __awaiter(this, void 0, void 0, function () {
                var refreshToken, error_9;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            refreshToken = req.body.refreshToken;
                            return [4 /*yield*/, authService.logout(refreshToken)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, res.status(http_status_1.default.OK).send({
                                    message: "Successfully logged out",
                                    statusCode: http_status_1.default.OK,
                                    status: "success",
                                })];
                        case 2:
                            error_9 = _a.sent();
                            logger_1.default.info(JSON.stringify(error_9));
                            next(error_9);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    };
}
exports.AuthControllerFactory = AuthControllerFactory;
//# sourceMappingURL=auth.controller.js.map