import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CreateStationDto } from "./dto/create-station.dto";
import { UpdateStationDto } from "./dto/update-station.dto";
import { StationsService } from "./stations.service";
import { Roles } from "../auth/decorators/roles.decorator";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { ApiBearerAuth, ApiResponse } from "@nestjs/swagger";

@Controller("stations")
@ApiBearerAuth('access-token')
export class StationsController {
  constructor(
    private readonly stationsService: StationsService,
  ) {}

  @ApiResponse({ status: 200, description: 'Retrieve all stations' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.stationsService.findAll();
  }
  
  @ApiResponse({ status: 200, description: 'Retrieve a station by ID' })
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.stationsService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'Create a new station (Admin Only)' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(
    @Body() createStationDto: CreateStationDto,
  ) {
    return this.stationsService.create(
      createStationDto,
    );
  }

  @ApiResponse({ status: 200, description: 'Update a station by ID (Admin Only)' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateStationDto: UpdateStationDto,
  ) {
    return this.stationsService.update(
      id,
      updateStationDto,
    );
  }

  @ApiResponse({ status: 200, description: 'Delete a station by ID (Admin Only)' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.stationsService.remove(id);
  }
}