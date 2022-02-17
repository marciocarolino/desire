import * as bcrypt from 'bcrypt';

export class PasswordHash {
  async password(password_hash: string, saltOrRounds: number) {
    return await bcrypt.hash(password_hash, saltOrRounds);
  }
}
