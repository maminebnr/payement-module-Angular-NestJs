import { Body, Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("payment")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("init")
  initPaymentForm(@Body() req:any): any {
    console.log('order ',req);
    
   return this.appService.initPaymentForm(req);

  }

  @Post("save")
  saveOrder(@Body() req:any): any {
    console.log('save ',req.clientAnswer.orderStatus);
    
   return true;

  }
}
