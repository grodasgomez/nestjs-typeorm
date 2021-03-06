import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty({ description: 'Customer which going to create the order ' })
  readonly customerId: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
