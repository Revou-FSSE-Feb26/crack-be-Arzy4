import { Controller, Body, Get, Post, Param, ParseIntPipe, Patch, Delete, UseGuards } from '@nestjs/common';
import { ChargingSlotsService } from './charging-slots.service';
import { CreateChargingSlotDto } from './dto/create-chargingSlot.dto';
import { UpdateChargingSlotDto } from './dto/update-chargingSlot.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';


@Controller('charging-slots')
export class ChargingSlotsController {
  constructor(private readonly chargingSlotsService: ChargingSlotsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.chargingSlotsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.chargingSlotsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(
    @Body() createChargingSlotDto: CreateChargingSlotDto,
  ) {
    return this.chargingSlotsService.create(
      createChargingSlotDto
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateChargingSlotDto: UpdateChargingSlotDto,
  ) {
    return this.chargingSlotsService.update(
      id,
      updateChargingSlotDto,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.chargingSlotsService.remove(id);
  }

}
