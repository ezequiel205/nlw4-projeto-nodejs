import { getCustomRepository } from 'typeorm';
import { response, Response } from 'express';
import { Request } from 'express';
import { SurveysUsersRepository } from '../Repositories/SurveysUsersRepository';


// http://localhost:3333/answers/3?u=866cdb83-92f5-4543-939e-221398d4ac9e
/*
Route Params => São parametros que compoem a rota

Query Params -=> Uso para Buscas, paginações... Não obrigatórios. Sempre vem depois da ? (interrogação) entre chaves (chave=valor)

*/


class AnswerController {

    async execute(request: Request, response: Response) {
        const {value} = request.params;
        const {u} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if(!surveyUser) {
            return response.status(400).json({
                error: "Survey User does not exists!"
            })
        }
        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }
}

export { AnswerController }