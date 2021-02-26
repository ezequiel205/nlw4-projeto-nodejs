import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
// import { User } from "../models/User";

// Repositorio de Pesquisa
@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{

}

export { SurveysRepository }
