import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import JwtAuthenticationGuard from 'src/common/jwt-authentication.guard';
import RoleGuard from 'src/common/role.guard';
import Role from 'src/user/entities/role.enum';
import CreateUserDto from 'src/user/dto/create-user.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('createOrder')
  @UseGuards(RoleGuard(Role.User))
  @UseGuards(JwtAuthenticationGuard)
  async createOrder(@Body('order') order: CreateOrderDto, @Body('user') user: CreateUserDto) {
    return this.orderService.createOrder(order, user);
  }

  @Post('readOrder')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthenticationGuard)
  async readOrder(@Body('user') user: CreateUserDto) {
    return this.orderService.getOrderById(user.id);
  }

  @Post('updateOrder')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthenticationGuard)
  async updateOrder(@Body('user') user: CreateUserDto, @Body('order') post: UpdateOrderDto) {
    return this.orderService.updateOrder(user.id, post);
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}
