import { MqttSubscriberService } from './../services/mqtt-subscriber.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions,
  MqttService
} from 'ngx-mqtt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public subscription: any;
  public message: string;

  constructor(private MqttSubscriberService:MqttSubscriberService, private _mqttService: MqttService){
    this.MqttSubscriberService.getTopics().subscribe((data:any) => {
      this.topics = data;
    });

    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });

  }
  
  topics = [];
  title = 'angular-iot';

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
