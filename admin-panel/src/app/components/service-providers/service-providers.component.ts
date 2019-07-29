import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProviderService } from 'src/app/services/service-provider/service-provider.service';


@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {

  //array
  serviceProviders: Array<ServiceProvider>;

  constructor(
    private serviceProvider: ServiceProviderService
  ) {

  }

  ngOnInit() {
    this.serviceProvider.getAll().then((response : any) => {
      this.serviceProviders = response;
    }).catch((err) => {
      
    });
  }

}
