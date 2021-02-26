import { Request, Response } from "express";
import { getCustomRepository } from 'typeorm';
import { Survey } from "../models/Survey";
import { SurveysRepository } from '../Repositories/SurveysRepository';

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }

    // Uma função
    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository)

        const all = await surveysRepository.find();

        //Retornando todas as listas
        return response.json(all);
    }
}

export { SurveysController }
