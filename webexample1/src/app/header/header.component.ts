import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: [any];

  checked = true;

  constructor() {
    this.items = [
      { 'currentIndex': true , 'path': 'home', 'name': 'HOME' },
      { 'currentIndex': false , 'path': 'discovery', 'name': 'DISCOVERY'},
      { 'currentIndex': false , 'path': 'about', 'name': 'ABOUT' },
      { 'currentIndex': false , 'path': 'service', 'name': 'SERVICE' },
      { 'currentIndex': false , 'path': 'layout', 'name': 'LAYOUT'},
    ];
  }

  ngOnInit() {
  }

  changeIndex(index: number) {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].currentIndex = false;
    }
    this.items[index].currentIndex = true;
  }
}
