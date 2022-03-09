import { IsNotEmpty } from 'class-validator';

export class CreateChildDto {

    id?: number;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    birthDate: string;

    @IsNotEmpty()
    userId: number
  }
   
export default CreateChildDto;