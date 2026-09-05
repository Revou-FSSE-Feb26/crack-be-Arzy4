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

@Controller("stations")
export class StationsController {
  constructor(
    private readonly stationsService: StationsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.stationsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.stationsService.findOne(id);
  }

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

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(":id")
  remove(
    @Param("id", ParseIntPipe) id: number,
  ) {
    return this.stationsService.remove(id);
  }
}