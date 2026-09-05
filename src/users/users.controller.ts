import { 
  Controller, 
  Body, Get, 
  Param, 
  ParseIntPipe, 
  Post, 
  Patch, 
  Delete, 
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
    findAll() {
      return this.usersService.findAll();
    }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.usersService.findOne(
      id,
      req.user.id,
      req.user.role
    );
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    return this.usersService.update(
      id,
      updateUserDto,
      req.user.id,
      req.user.role
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.usersService.remove(
      id,
      req.user.id,
      req.user.role
    );
  }

}
