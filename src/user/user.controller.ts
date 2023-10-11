import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import {
  CuradorUserDto,
  EditUserDto,
  SerCuradorUserDto,
  SubmeterCuradorDto,
} from './dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    // console.log(user);
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch('serCurador/:id')
  async serCuradorUser(
    @GetUser('id') userId: number,
    @Body() dto: SerCuradorUserDto,
  ) {
    return this.userService.serCuradorUser(userId, dto.matCurador, dto.id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  submeterCuradorDto(
    @GetUser('id') userId: number,
    @Body('') dto: SubmeterCuradorDto, // Use 'Partial' para permitir atualizações parciais
  ) {
    return this.userService.submeterCuradorDto(
      userId,
      dto.motivoCurador,
      dto.historico,
    );
  }
}
