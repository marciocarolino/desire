export class UsersDto {
  id: number;
  name: string;
  sex: string;
  email: string;
  cell: string;
  city: string;
  state: string;
  is_active: boolean;
  password: string;
}

export class UsersUpdateDto {
  id?: number;
  name?: string;
  sex?: string;
  email?: string;
  cell?: string;
  city?: string;
  state?: string;
  password?: string;
  create_at?: Date;
  update_at?: Date;
}

export class UsersDeleteDto {
  result: boolean;
}
