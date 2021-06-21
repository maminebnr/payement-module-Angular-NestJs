import { Injectable } from '@nestjs/common';
import { ConnexionService } from './services/connexion/connexion.service';

@Injectable()
export class AppService {

  constructor(private connexionService: ConnexionService){

  }
  initPaymentForm(order:any): any {
    return this.connexionService.initPaymentForm(order);
  }

  
}
