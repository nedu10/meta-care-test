
import { Router } from "express";
import env from './helpers/env';
import { authRouter } from "./components/auth";
// import { filmRouter } from "./components/film";
// import { characterRouter } from "./components/character";



const router = Router();

router.get("/", (req, res) => {
  return res.status(200).send({
    message: "welcome to metacare test",
  });
});

router.get("/api", (req, res) => {
  return res.status(200).send({
    message: "welcome to metacare test",
  });
});
router.get("/welcome", (req, res) => {
  return res.status(200).send({
    message: "welcome to metacare test",
  });
});

// router.use('/api/films', filmRouter);
router.use('/api/auth', authRouter);
// router.use('/api/characters', characterRouter);


export default router;


