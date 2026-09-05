import { 
  Body, 
  Controller, 
  Delete, 
  Get, 
  Param, 
  ParseIntPipe, 
  Patch, 
  Post, 
  Request, 
  UseGuards
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Request() req) {
    return this.bookingsService.findAll(
      req.user.id,
      req.user.role,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
    @Request() req,
  ) {
    return this.bookingsService.findOne(id, req.user.id, req.user.role);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createBookingDto: CreateBookingDto,
    @Request() req,
  ) {
    return this.bookingsService.create(
      createBookingDto,
      req.user.id
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateBookingDto: UpdateBookingDto,
    @Request() req,
  ) {
    return this.bookingsService.update(
      id,
      updateBookingDto,
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
    return this.bookingsService.remove(
      id,
      req.user.id,
      req.user.role
    );
  }
}
