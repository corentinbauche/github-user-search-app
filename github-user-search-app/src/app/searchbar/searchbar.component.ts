import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass']
})
export class SearchbarComponent {
 username = '';
 resp:any;

 constructor(private http:HttpClient){}
  
 GetGithubProfil(data:string){
  this.http.get<any[]>('https://api.github.com/users/'+data).subscribe(
    (response)=>{
      this.resp = response;
      console.log(this.resp);
    },
    (error)=>{
      console.log('erreur');
    }
  );
}

  onSubmit(form: NgForm){
    this.username = form.value['username'];
    this.GetGithubProfil(this.username);
  }

}
