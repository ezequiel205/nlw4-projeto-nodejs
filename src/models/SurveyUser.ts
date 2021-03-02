import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid";

// Caso comente a linha abaixo e rodar o yarn test ele aprensetará erro por nao localizar o survey
@Entity("surveys_users")
class SurveyUser {
    @PrimaryColumn()
    readonly id: string; 

    @Column()
    user_id: string;

    @Column()
    survey_id: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { SurveyUser }