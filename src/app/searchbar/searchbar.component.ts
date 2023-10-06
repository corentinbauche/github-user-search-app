import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent {
 username = '';
 resp:any;
 err:any;

 constructor(
  
    private http:HttpClient,
    private gtmService: GoogleTagManagerService,
  
  ){}

  ngOnInit():void{
    this.GetGithubProfil('octocat')
   }

  
 GetGithubProfil(data:string){
  this.http.get<any[]>('https://api.github.com/users/'+data).subscribe(
    (response)=>{
      this.resp = response;
    },
    (error)=>{
      this.err=error.error.message;
    }
  );
}

  onSubmit(form: NgForm){
    this.username = form.value['username'];
    this.GetGithubProfil(this.username);
  }

}
