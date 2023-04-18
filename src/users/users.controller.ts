import { Controller, Request, Body, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
  @Post('signup')
  async signup(@Request() req, @Body() body) {
    console.log(body);
    var user = {
        email:body.email,
        password:body.password,
        name:body.name,
      }
    return this.usersService.createUser(user)
  }
}
