
import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty()
  equipment_id: number;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  operation_hours: number;

  @ApiProperty()
  oil_pressure: number;

  @ApiProperty()
  oil_temperature: number;

  @ApiProperty()
  coolant_temperature: number;

  @ApiProperty()
  cos: number;

  @ApiProperty()
  generator_voltage: number;

  @ApiProperty()
  generator_frequency: number;

  @ApiProperty()
  total_electricity_production: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  fuel_pressure: number;
}

export class UpdateReportDto {
  @ApiProperty({ required: false })
  operation_hours?: number;

  @ApiProperty({ required: false })
  oil_pressure?: number;

  @ApiProperty({ required: false })
  oil_temperature?: number;

  @ApiProperty({ required: false })
  coolant_temperature?: number;

  @ApiProperty({ required: false })
  cos?: number;

  @ApiProperty({ required: false })
  generator_voltage?: number;

  @ApiProperty({ required: false })
  generator_frequency?: number;

  @ApiProperty({ required: false })
  total_electricity_production?: number;

  @ApiProperty({ required: false })
  status?: string;

  @ApiProperty({ required: false })
  fuel_pressure?: number;
}
