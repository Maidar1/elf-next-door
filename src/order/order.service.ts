import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CreateUserDto from 'src/user/dto/create-user.dto';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import Order from './entities/order.entity';

@Injectable()
export class OrderService {

  constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>) {}

  async createOrder(order: CreateOrderDto, user: CreateUserDto) {
    const newOrder = await this.orderRepository.create({
      status: order.status,
      branchId: order.branchId,
      userId: user.id
    });
    await this.orderRepository.save(newOrder);
    return true;
  }

  async getOrderById(id: number) {
    const order = await this.orderRepository.findOne(id, { relations: ['user'] });
    if (order) {
      return order;
    }
    throw new NotFoundException;
  }

  async updateOrder(id: number, post: UpdateOrderDto) {
    await this.orderRepository.update(id, post);
    const updatedPost = await this.orderRepository.findOne(id, { relations: ['user'] });
    if (updatedPost) {
      return updatedPost;
    }
    throw new NotFoundException;
  }

  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
