import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly ctrlEst: boolean;
}
