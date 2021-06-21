import { Component, OnInit } from '@angular/core';
import KRGlue from '@lyracom/embedded-form-glue';
import { ServicesService } from '../core/service.service';
@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss'],
})
export class PayementComponent implements OnInit {
  title = 'minimal-example';
  promiseError = null;
  endpoint: string = 'https://epaync.nc';
  publicKey: string =
    '15578053:testpublickey_1xhxA8MgmKyFJJK8fS7EaNRPAHDJFTv9AzlF6ue2ZJU8o';
  formToken: string = '';

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.getTokenPayement();
  }
  getFormByToken() {
    KRGlue.loadLibrary(
      this.endpoint,
      this.publicKey
    ) /* Load the remote library */
      .then(({ KR }) =>
        KR.setFormConfig({
          /* set the minimal configuration */
          formToken: this.formToken,
          'kr-language': 'fr-FR' /* to update initialization parameter */,
        })
      )
      .then(({ KR }) =>
        KR.addForm('#myPaymentForm')
      ) /* add a payment form  to myPaymentForm div*/
      .then(({ KR, result }) => {
        KR.showForm(result.formId);

        KR.onSubmit((event) => {
          this.saveData(event);
        });
      }) /* show the payment form */
      .catch(
        (error) =>
          (this.promiseError = error + ' (see console for more details)')
      );
  }
  saveData(event) {
    console.log(event.clientAnswer);
    this.servicesService.saveOrder(event).subscribe((data: any) => {});
  }
  getTokenPayement() {
    let order = {
      amount: 20,
      currency: 'XPF',
      customer: {
        email: 'sample@example.com',
      },
      orderId: 'myOrderId-850910',
    };
    this.servicesService.initPaymentForm(order).subscribe((data: any) => {
      this.formToken = data.answer.formToken;

      this.getFormByToken();
    });
  }
}
