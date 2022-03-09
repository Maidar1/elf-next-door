import User from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Branch from './branch.entity';
 
@Entity()
class Order {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column({default: false})
  public status: boolean;

  @Column()
  public branchId: number;

  @Column()
  public userId: number;

  @ManyToOne(() => User, user => user.id)
  public user: User;

  @ManyToOne(() => Branch, branch => branch.id)
  public branch: Branch;
}
 
export default Order;