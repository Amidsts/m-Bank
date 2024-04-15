import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user";

@Entity()
export class Auth {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  password: string;

  @Column()
  acctNo: string;

  @Column()
  txPin: string;

  @Column({ nullable: true })
  BVN: string | null;

  @Column({ nullable: true })
  fingerprintId: string | null;

  @Column({default: false})
  isSetupComplete: boolean;

  @Column()
  createdAt: Date;
}
