import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { SECRET } from '../config';
import { UserService } from './user.service';
import {UserData, JWTPayload} from './user.interface'

export interface IGetUserAuthInfoRequest extends Request {
  user: UserData // or any other type
}
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  /**
   * 认证功能中间件，从Authorization中获取jwt的token，
   * 解析token中的数据，并将从数据库中获取用户信息，导入req中
   * @param userService 
   */
  constructor(private readonly userService: UserService) {}

  async use(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && typeof authHeaders === 'string') {
      const token = authHeaders.trim();
      const decoded = jwt.verify(token, SECRET) as JWTPayload;
      const user = await this.userService.findById(decoded.id);

      if (!user) {
        throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
      }

      req.user = user.user;
      next();

    } else {
      throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
    }
  }
}
