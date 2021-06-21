import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class ConnexionService {

    constructor(private http: HttpService){

    }

    initPaymentForm(order:any){
        const headersRequest = {
            'Authorization': 'Basic MTU1NzgwNTM6dGVzdHBhc3N3b3JkX3JCU3lrWXBxNkRMYW1GQVNXS1dGdUZtdlR6MU5lUkRiZ2ROT2ZkTnEwN2UxaA==',
            'Content-Type': 'application/json'
        };
       
        return this.http.post('https://epaync.nc/api-payment/V4/Charge/CreatePayment',order,{ headers: headersRequest })
            .pipe(
                map(response => response.data)
            );        
    }

}
