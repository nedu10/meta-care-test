"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./components/auth");
// import { filmRouter } from "./components/film";
// import { characterRouter } from "./components/character";
var router = (0, express_1.Router)();
router.get("/", function (req, res) {
    return res.status(200).send({
        message: "welcome to metacare test",
    });
});
router.get("/api", function (req, res) {
    return res.status(200).send({
        message: "welcome to metacare test",
    });
});
router.get("/welcome", function (req, res) {
    return res.status(200).send({
        message: "welcome to metacare test",
    });
});
// router.use('/api/films', filmRouter);
router.use('/api/auth', auth_1.authRouter);
// router.use('/api/characters', characterRouter);
exports.default = router;
//# sourceMappingURL=routes.js.map