import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  
  initPaymentForm(data:any) {
  
    return this.http.post<any>('http://localhost:3000/payment/init',data);
  }

  saveOrder(data:any) {
    return this.http.post<any>('http://localhost:3000/payment/save',data);
  }


}
