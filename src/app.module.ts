import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FlightsModule } from './flights/flights.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 6612,
      username: 'root',
      // password: 'pass123456',
      database: 'airx',
      autoLoadModels: true,
      synchronize: true,
    }), FlightsModule, AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
