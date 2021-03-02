import { Router } from "express";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";
// import { SurveysRepository } from "./Repositories/SurveysRepository";
import { SendMailController } from "./controllers/SendMailController"

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

router.post("/users", userController.create);

// ALT + SHIFT + SETA PRA BAIXO PARA DUPLICAR LINHA
router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendMail", sendMailController.execute);

export { router };
