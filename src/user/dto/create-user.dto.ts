import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    id?: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    phoneNumber: number;

    @IsNotEmpty()
    password: string;
  }
   
export default CreateUserDto;