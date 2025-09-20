import { HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const saltOrRounds = 10;
      const hashedPassword = await bcrypt.hash(createUserDto.password, saltOrRounds);
      const newUser = this.userRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });
      const savedUser = await this.userRepository.save(newUser);
      const { id, email, createdAt } = savedUser;
      return { id, email, createdAt };
    } catch (error) {
      throw new HttpException('Erro ao criar usuário', 500);
    }
  }

  async findAll() {
    const users = await this.userRepository.find();
    return users.map(({ id, email, createdAt }) => ({
      id,
      email,
      createdAt,
    }));
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException(`Usuário com id ${id} não encontrado`, 404);
    }
    const { id: userId, email, createdAt } = user;
    return { id: userId, email, createdAt };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        throw new HttpException(`Usuário com id ${id} não encontrado`, 404);
      }
      await this.userRepository.delete(id);
      return { message: `Usuário excluído ${id} com sucesso` };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Erro ao excluir usuário', 500);
    }
  }
}
