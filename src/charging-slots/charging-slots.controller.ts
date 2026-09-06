import { Controller, Body, Get, Post, Param, ParseIntPipe, Patch, Delete, UseGuards } from '@nestjs/common';
import { ChargingSlotsService } from './charging-slots.service';
import { CreateChargingSlotDto } from './dto/create-chargingSlot.dto';
import { UpdateChargingSlotDto } from './dto/update-chargingSlot.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';

@Controller('charging-slots')
@ApiBearerAuth('access-token')
export class ChargingSlotsController {
  constructor(private readonly chargingSlotsService: ChargingSlotsService) {}

  @ApiResponse({ status: 200, description: 'Retrieve all charging slots' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.chargingSlotsService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Retrieve a charging slot by ID' })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.chargingSlotsService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'Create a new charging slot (Admin Only)' })
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

  @ApiResponse({ status: 200, description: 'Update a charging slot by ID (Admin Only)' })
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

  @ApiResponse({ status: 200, description: 'Delete a charging slot by ID (Admin Only)' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.chargingSlotsService.remove(id);
  }

}
