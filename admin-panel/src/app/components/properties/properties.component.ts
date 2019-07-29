import { Component, OnInit } from '@angular/core';
import { Properties } from 'src/app/models/properties';
import { PropertiesService } from 'src/app/services/properties/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private propertiesService : PropertiesService) { }

  public properties : Array<Properties> = [];

  ngOnInit() {
    this.propertiesService.getAll().then((response : any) => {
      this.properties = response;
    }).catch((err) => {
    });
  }

}
