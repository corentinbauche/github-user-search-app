import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent {
 @Input() profilDataResp:any;
 constructor(
  private gtmService: GoogleTagManagerService,
 ){}
}
