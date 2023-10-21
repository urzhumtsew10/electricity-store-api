import { Injectable, Res, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  private async signIn(email, password) {
    const users = await this.findAll();
    const user = await users.find((user) => user.email === email);
    if (user) {
      if (!user.email === email && !user.password === password) {
        return 'error token';
      }
    }
    return await this.jwtService.signAsync({ email: email });
  }

  async register(userDto: CreateUserDto) {
    const users = await this.findAll();

    const oldUser = users.find((user) => user.email === userDto.email);
    if (!oldUser) {
      const newUser = {
        name: userDto.name,
        email: userDto.email,
        password: await argon2.hash(userDto.password),
      };
      const token = await this.signIn(userDto.email, userDto.password);
      return await this.userRepository.save({
        ...newUser,
        token: token,
        role: 'user',
      });
    } else {
      return { email: false };
    }
  }

  async auth(userDto: CreateUserDto) {
    const user = (await this.findAll()).find(
      (user) => user.email === userDto.email,
    );
    if (user) {
      const checkHash = await argon2.verify(user.password, userDto.password);

      if (checkHash) {
        const currentUser = (await this.findAll()).filter(
          (user) => user.email === userDto.email,
        )[0];
        return {
          email: true,
          password: true,
          userData: {
            email: currentUser.email,
            name: currentUser.name,
            id: currentUser.id,
            token: currentUser.token,
            role: currentUser.role,
          },
        };
      }

      return { email: true, password: checkHash };
    } else {
      return { email: false, password: false };
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
