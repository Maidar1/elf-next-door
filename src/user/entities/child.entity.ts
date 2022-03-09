import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './user.entity';
 
@Entity()
class Child {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column()
  public birthDate: string;

  @Column()
  public userId: number

  @ManyToOne(() => User, user => user.id)
  public user: User;
}
 
export default Child;