import { Component, OnInit } from '@angular/core';
import { LightDarkModeService } from '../light-dark-mode.service';

@Component({
  selector: 'app-light-dark-mode',
  templateUrl: './light-dark-mode.component.html',
  styleUrls: ['./light-dark-mode.component.sass']
})
export class LightDarkModeComponent implements OnInit{
  themeToSwitch:string='';
  iconToSwitch:string=''; 
  el = document.body;

  constructor(){}

  ngOnInit():void{
   this.detectPreferColorScheme()
  }
  
  detectPreferColorScheme(){
    let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
     
    if (colorSchemeQuery.matches){
      this.toggleLightDarkMode(true)
     }
     else{
      this.toggleLightDarkMode(false)
     }
     colorSchemeQuery.addEventListener('change',e=>{if(e.matches){this.toggleLightDarkMode(true)}else{this.toggleLightDarkMode(false)}});
   }

   buttonSwitch(){
    if(!this.el.classList.contains('dark')){
      this.toggleLightDarkMode(true);
    }
    else{
      this.toggleLightDarkMode(false);
    }
   }

  toggleLightDarkMode(theme:boolean){
    if(theme && !this.el.classList.contains('dark')){
      this.el.classList.add('dark');
      this.themeToSwitch='LIGHT';
      document.getElementById('header__darkmode')?.classList.add('header__darkmode_dark')
      document.getElementById('header__darkmode')?.classList.remove('header__darkmode_light')
    }
    else{
      this.el.classList.remove('dark');
      this.themeToSwitch='DARK';
      document.getElementById('header__darkmode')?.classList.add('header__darkmode_light')
      document.getElementById('header__darkmode')?.classList.remove('header__darkmode_dark')
    }
  }
    
  }
