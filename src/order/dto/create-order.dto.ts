import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {

    status?: boolean;

    @IsNotEmpty()
    branchId: number;
}

export default CreateOrderDto;