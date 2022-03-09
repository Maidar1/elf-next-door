import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import CreateChildDto from './dto/create-child.dto';
import JwtAuthenticationGuard from 'src/common/jwt-authentication.guard';
import RoleGuard from 'src/common/role.guard';
import Role from './entities/role.enum';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @UseGuards(RoleGuard(Role.User))
  @UseGuards(JwtAuthenticationGuard)
  @Post('createChild')
  createChild(@Body() createChildDto: CreateChildDto) {
    return this.userService.createChild(createChildDto);
  }


  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAuthenticationGuard)
  @Post('readUser')
  readUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.getById(createUserDto.id);
  }


  @UseGuards(JwtAuthenticationGuard)
  @Post('readChild')
  readChild(@Body() createChildDto: CreateChildDto) {
    return this.userService.getChildById(createChildDto.id);
  }
}
