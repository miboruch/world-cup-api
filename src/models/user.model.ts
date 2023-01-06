import { Model } from 'objection';
import { hash } from 'bcrypt';

export class UserModel extends Model {
  static tableName = 'users';

  id!: number;
  name!: string;
  surname!: string;
  nickname!: string;
  email!: string;

  password!: string;
  signUpDate!: string;

  async $beforeInsert(): Promise<void> {
    const now = new Date().toISOString();

    if (this.password) {
      this.password = await this.hashPassword(this.password);
      this.signUpDate = now;
    }
  }

  hashPassword(password: string) {
    return hash(password, 10);
  }
}
