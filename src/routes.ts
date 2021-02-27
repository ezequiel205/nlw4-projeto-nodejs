import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { SurveysRepository } from './Repositories/SurveysRepository';

const router = Router();
const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);

// ALT + SHIFT + SETA PRA BAIXO PARA DUPLICAR LINHA
router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

export { router };