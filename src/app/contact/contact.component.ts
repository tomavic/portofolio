import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  gotoPage(link: string) {
    // TODO: track users here
    window.open(link, '_blank');
  }
}
