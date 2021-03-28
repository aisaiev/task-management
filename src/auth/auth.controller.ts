import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';
import { JwtToken } from './jwt-token.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<JwtToken> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Get('/user')
  @UseGuards(AuthGuard())
  getUser(@GetUser() user: User): Promise<UserDto> {
    const { username } = user;
    return new Promise((resolve) => {
      resolve({ username });
    });
  }
}
