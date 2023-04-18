import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private usermodel: typeof User,
  ) {
    // this.users = [
    //   {
    //     userId: 1,
    //     username: 'Admin',
    //     password: '4321',
    //   }
    // ];
  }

  async findByEmailAndPassword(userEmail: string, pass: string): Promise<User> {
    return this.usermodel.findOne({
      attributes: { exclude: ['password'] },
      where: { email: userEmail, password: pass }
    })
  }

  async findByEmail(userEmail: string): Promise<User> {
    return this.usermodel.findOne({
      attributes: { exclude: ['password'] },
      where: { email: userEmail }
    })
  }

  async createUser(user: {
    email: string,
    password: string,
    name: string,
  }): Promise<User> {
    var createdUser = await this.usermodel.create({
      email: user.email,
      password: user.password,
      name: user.name
    })
    console.log(createdUser);
    
    return await this.usermodel.findOne(
      {
        attributes: { exclude: ['password'] },
        where: { userId: createdUser.userId }
      }
    )
  }
}
