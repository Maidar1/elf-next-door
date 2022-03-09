import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Order from './order.entity';
 
@Entity()
class Branch {
  @PrimaryGeneratedColumn()
  public id?: number;
 
  @Column()
  public name: string;

  @OneToMany(() => Order, order => order.id)
  public order: Order; 
}
 
export default Branch;