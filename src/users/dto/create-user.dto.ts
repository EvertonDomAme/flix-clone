import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
export class CreateUserDto {
  @IsString({ message: 'Informe um nome válido' })
  @MinLength(2, { message: 'Insira um nome com no mínimo 2 caractéres' })
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Informe um endereço de email válido ' })
  email: string;

  @Length(6, 16)
  @IsString({ message: 'Informe uma senha válida' })
  password: string;

  @Length(6, 16)
  @IsString({ message: 'Senha incorreta: a senha deve ser igual a anterior' })
  passwordConfirmation: string;
}
