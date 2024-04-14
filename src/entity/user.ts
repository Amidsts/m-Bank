import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNo: string

  @Column({default: 0})
  acctBal: number;

  @Column({nullable: true})
  lastLoginAt: Date

  @Column()
  createdAt: Date
}
