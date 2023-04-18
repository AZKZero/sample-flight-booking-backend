import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports:[SequelizeModule.forFeature([User])],
  providers: [UsersService],
  exports:[UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
