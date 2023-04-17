// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { UsersService } from 'src/users/users.service';
// import { jwtConstants } from '../constants';

// @Injectable()
// export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin') {
//   constructor(private readonly usersService: UsersService,) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }

//   async validate(payload: any) {
//     console.log(payload);

//     var email = payload.email
//     var user = await this.usersService.findByEmail(email)
//     if (user.isAdmin)
//       return user;
//     else throw new UnauthorizedException();
//   }
// }