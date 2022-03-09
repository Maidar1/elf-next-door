import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Child from './child.entity';
import Role from './role.enum';
 
@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({ unique: true })
  public email: string;
 
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({unique: true})
  public phoneNumber: number;
 
  @Column()
  public password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User
  })
  public role: Role

  @OneToMany(() => Child, child => child.id)
  public child: Child;
}
 
export default User;