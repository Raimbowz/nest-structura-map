
import { ApiProperty } from '@nestjs/swagger';

export class CreateEquipmentDto {
  @ApiProperty()
  project_id: number;

  @ApiProperty()
  entity_id: number;

  @ApiProperty()
  technical_specs: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  load_kw: number;

  @ApiProperty()
  operation_hours: number;

  @ApiProperty()
  status: string;

  @ApiProperty()
  inventory_number: string;

  @ApiProperty()
  factory_number: string;

  @ApiProperty()
  additional_number: string;

  @ApiProperty()
  schemes: string;

  @ApiProperty()
  engine_number: string;

  @ApiProperty()
  generator_number: string;

  @ApiProperty()
  fuel_pressure: number;

  @ApiProperty()
  power: number;
}

export class UpdateEquipmentDto {
  @ApiProperty({ required: false })
  project_id?: number;

  @ApiProperty({ required: false })
  entity_id?: number;

  @ApiProperty({ required: false })
  technical_specs?: string;

  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  load_kw?: number;

  @ApiProperty({ required: false })
  operation_hours?: number;

  @ApiProperty({ required: false })
  status?: string;

  @ApiProperty({ required: false })
  inventory_number?: string;

  @ApiProperty({ required: false })
  factory_number?: string;

  @ApiProperty({ required: false })
  additional_number?: string;

  @ApiProperty({ required: false })
  schemes?: string;

  @ApiProperty({ required: false })
  engine_number?: string;

  @ApiProperty({ required: false })
  generator_number?: string;

  @ApiProperty({ required: false })
  fuel_pressure?: number;

  @ApiProperty({ required: false })
  power?: number;
}
