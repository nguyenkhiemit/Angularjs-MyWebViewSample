import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  tabbars: [any];

  gallerys: [any];

  constructor() {
    this.tabbars = [
      {'currentIndex': true, 'path': '#', 'name': 'Bộ sưu tập địa điểm'},
      {'currentIndex': false, 'path': '#', 'name': 'Bộ sưu tập hình ảnh'}
    ];

    this.gallerys = [
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'},
      {'image': '../assets/image/cafe_banh_ngot.jpg', 'name': 'Cà phê bánh ', 'address': '25 Địa điểm - Thành Đạt Nguyễn'}
    ];
  }

  ngOnInit() {
  }

  changeTab(index: number) {
    for (let i = 0; i < this.tabbars.length; i++) {
      this.tabbars[i].currentIndex = false;
    }
    this.tabbars[index].currentIndex = true;
  }
}
