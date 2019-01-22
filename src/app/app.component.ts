import { Component } from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kiwi-fruit';
}

window.onload = function() {
    const prewrap = <HTMLElement>document.getElementsByClassName('prewrap')[0];
    prewrap.style.animation = 'fadeout .8s ease 1.8s forwards';

    prewrap.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeout') {
            prewrap.remove();
        }
    });
};

console.log('> Love kiwi!  -- Cyris');
