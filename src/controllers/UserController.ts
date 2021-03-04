import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
// import { User } from '../models/User';
import { UsersRepository } from '../Repositories/UsersRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {
    async create(request: Request, response: Response){
        const { name, email } = request.body;
        //console.log(body);

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatório"),
            email: yup.string().email().required("Email incorreto"),
        })

        // if(await(!schema.isValid(request.body))){
        //     return response.status(400).json({error: "Validation Failed!"});
        // }

        try {
            await schema.validate(request.body, { abortEarly: false });
        } catch (err) {
            throw new AppError(err);
        }
        

        const usersRepository = getCustomRepository(UsersRepository);

        // Regra de negócio para verificar se o usuário existe
        // select * from users where email = "email"
        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
         throw new AppError("User does not exists!");
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user);

        return response.status(201).json(user);
    }
}

export { UserController };
