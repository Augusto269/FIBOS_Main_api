import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/schemas/user.scheme';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel({
      ...createUserDto,
      email: createUserDto.user,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(user);
    return await user.save();
  }

  findAll() {
    return `This action returns all asd`;
  }

  async findOne(condition: object) {
    const user = await this.userModel.find(condition).exec();
    console.log('user', user);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} userd`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
