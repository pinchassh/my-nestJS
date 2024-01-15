import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/auth/helpers/jwt';
import TokenInterface from 'src/auth/interfaces/TokenInterface';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req: Request = context.switchToHttp().getRequest();
      const { headers } = req;
      const token = headers['x-auth-token'] as string;
      if (!token) throw new Error();
      const userInfo = verifyToken(token) as TokenInterface;
      if (!userInfo.isAdmin) throw new Error();
      return true;
    } catch (error) {
      return false;
    }
  }
}
