import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})
export class DiscoveryComponent implements OnInit {

  items: [any];

  arrCarousel: [any];

  constructor() {
    this.items = [
      { 'currentIndex': true , 'path': 'home', 'name': 'Khám Phá' },
      { 'currentIndex': false , 'path': 'discovery', 'name': 'Đặt bàn'},
      { 'currentIndex': false , 'path': 'about', 'name': 'Đặt giao hàng' },
      { 'currentIndex': false , 'path': 'service', 'name': 'Đi chợ' },
      { 'currentIndex': false , 'path': 'layout', 'name': 'Làm Đẹp'},
      { 'currentIndex': false , 'path': 'layout', 'name': 'Du Lịch'},
      { 'currentIndex': false , 'path': 'layout', 'name': 'FoolyPOS'},
      { 'currentIndex': false , 'path': 'layout', 'name': 'Giảm Giá'},
    ];
    this.arrCarousel = [
      { 'path': '../assets/image/carousel1.jpg', 'name': 'Pietro Maximoff/Quicksilver' },
      { 'path': '../assets/image/carousel2.jpg', 'name': 'Wolverine (Hugh Jackman)' },
      { 'path': '../assets/image/carousel3.jpg', 'name': 'Blink (Phạm Băng Băng)' },
      { 'path': '../assets/image/carousel4.jpg', 'name': 'Colossus (Dainel Cudmore)' }
    ];
  }

  isActive(url: String) {
    return url === this.arrCarousel[0].path;
  }

  ngOnInit() {
  }

}
