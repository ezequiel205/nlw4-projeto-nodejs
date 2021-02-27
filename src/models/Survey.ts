import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid";

// Caso comente a linha abaixo e rodar o yarn test ele aprensetará erro por nao localizar o survey
@Entity("surveys")
class Survey {
    @PrimaryColumn()
    readonly id: string; 

    @Column()
    title: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Survey }