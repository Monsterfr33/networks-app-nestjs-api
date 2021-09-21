import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const users = await this.usersService.findAll();
        const user = users.find(user => user.username === username);

        // comparing password with hash mechanism of bcrypt
        const isPasswordMatching = await bcrypt.compare(pass,user.password);

        if (user && isPasswordMatching) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, password: user.password };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    // helper method
    async getByEmail(email: string) {
        const user = await this.usersService.findOne(email);
        if (user) return user;
        throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }
}