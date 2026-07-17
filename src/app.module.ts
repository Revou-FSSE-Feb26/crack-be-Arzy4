import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationsModule } from './stations/stations.module';
import { ChargingSlotsModule } from './charging-slots/charging-slots.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
    }),
    PrismaModule,
    StationsModule, 
    ChargingSlotsModule, 
    BookingsModule, 
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
