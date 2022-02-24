export class DesireDto {
  users: any;
  desire: string;
  description: string;
  is_active: boolean;
}

export class DesireUpdateDto {
  desire?: string;
  description?: string;
}

export class DesireDeleteDto {
  is_active: boolean;
}

export class DesireResponseDto {
  desireDto: DesireDto[];
}
