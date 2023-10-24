import { Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/sign-up")
    @HttpCode(HttpStatus.OK)
    public signUp(signUpDto: SignUpDto) {
        console.log("Hello World!");
    }
}
