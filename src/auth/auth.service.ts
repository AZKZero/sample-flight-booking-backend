import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/schemas/users.schema';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(userEmail: string, pass: string): Promise<User> {
    const user:User = await this.usersService.findByEmailAndPassword(userEmail, pass);
    console.log(user);
    
    return user;
  }

  async login(user: User) {
    console.log(user);
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(user:{
    email:string,
    password:string,
    name:string,
  }) {
    return this.usersService.createUser(user)
  }
}