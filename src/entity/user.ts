import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:Number
    @Column()
    name:string
    @Column({select:false})
    password:string
    @Column()
    email:string
}