import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Whenever someone sends a GET request to /health, execute the function below.
  @Get("health")
  getHealth(){
    return{
      status: "Success",
      message: "Voltra Backend is running",
      timestamp: new Date().toISOString(),
    }
  }
}
