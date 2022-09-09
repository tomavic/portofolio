import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.component.html',
})
export class IntroComponent {
  // Arabic Calligrapher | Math-Magician
  whoAmIList = [
    'Typescript',
    'Angular',
    'Reactive programming',
    'Calligraphy',
    'Photography',
    'Cats',
    'Traveling',
  ];
  constructor() {}
}
