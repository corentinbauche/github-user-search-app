import { Component } from '@angular/core';

@Component({
  selector: 'app-light-dark-mode',
  templateUrl: './light-dark-mode.component.html',
  styleUrls: ['./light-dark-mode.component.sass']
})
export class LightDarkModeComponent {
  toggleMode(){
    const el = document.querySelector('body');
    el?.classList.toggle('dark');
  }
}
