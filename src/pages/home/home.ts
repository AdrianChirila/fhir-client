import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, Loading, PopoverController} from 'ionic-angular';
import {AppointmentService} from "../../providers/appointment.service";
import {PopoverPage} from "../popover/popover.page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private loader: Loading;
  private appointments: any[];
  private practitionerMode: boolean;
  private patientMode: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadController: LoadingController) {
    console.log('Constructor!');
  }
  mock() {

  }

  private showLoading() {
    this.loader.present();
  }

  private hideLoading() {
    this.loader ? this.loader.dismiss() : true;
  }

  public goToGeneralPractitionerInformation() {

  }

  private decideAppMode() {

  }

  private getSuggestionForAppointment() {
    console.log('Get suggestion for appointment!');
  }

  private ionViewDidLoad() {
    console.log('IOn view did load!');
  }

  private ionViewWillEnter() {
    console.log('Ion view will enter!');

  }

  private requestForAppointment() {
    console.log('Req for appointment');

  }

  private ionViewDidEnter() {
    console.log('Ion did will enter!');
  }

  private ionViewWillLeave() {
    console.log('Ion view will leave!');
  }

  private ionViewDidLeave() {
    console.log("Ion view did leave!");
  }

  private ionViewWillUnload() {
    console.log('Ion view will unload!');
  }
}
