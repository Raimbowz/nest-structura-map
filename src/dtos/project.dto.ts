
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  entity_id: number;

  @ApiProperty()
  latitude: number;

  @ApiProperty()
  longitude: number;

  @ApiProperty()
  project_code: string;

  @ApiProperty()
  contract_number: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  company_id: number;
}

export class UpdateProjectDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  entity_id?: number;

  @ApiProperty({ required: false })
  latitude?: number;

  @ApiProperty({ required: false })
  longitude?: number;

  @ApiProperty({ required: false })
  project_code?: string;

  @ApiProperty({ required: false })
  contract_number?: string;

  @ApiProperty({ required: false })
  type?: string;

  @ApiProperty({ required: false })
  company_id?: number;
}
