import * as bcrypt from 'bcrypt';

export class PasswordHash {
  static password(password_hash: string, saltOrRounds: number) {
    return bcrypt.hash(password_hash, saltOrRounds);
  }
}
