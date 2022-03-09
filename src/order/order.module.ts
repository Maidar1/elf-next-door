import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Branch from './entities/branch.entity';
import Order from './entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Branch])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
