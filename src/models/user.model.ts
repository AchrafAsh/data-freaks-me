import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ unique: true })
    email!: string

    @Column({ nullable: true })
    email_verified?: Date

    @Column({ nullable: true })
    firstname?: string

    @Column({ nullable: true })
    lastname?: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date
}
