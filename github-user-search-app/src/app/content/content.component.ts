import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent {
  public getJsonValue: any;
  constructor(private http: HttpClient){
    this.getMethod();
  }
  getMethod(){
      
  }
}
