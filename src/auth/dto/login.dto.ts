import { IsString, IsEmail } from 'class-validator';
import { User } from '@prisma/client';
export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}
