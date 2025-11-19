import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const adminName = process.env.AdminName;
    const adminPassword = process.env.AdminPassword;

    if (!adminName || !adminPassword) {
      throw new UnauthorizedException('Admin credentials not configured');
    }

    if (username === adminName && password === adminPassword) {
      return { username: adminName };
    }
    return null;
    
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
