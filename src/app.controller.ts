import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Whenever someone sends a GET request to /health, execute the function below.
  @ApiResponse({ status: 200, description: 'Check the health of the backend API' })
  @Get("health")
  getHealth(){
    return{
      status: "Success",
      message: "Voltra Backend is running",
      timestamp: new Date().toISOString(),
    }
  }
}
