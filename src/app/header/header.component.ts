import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myCategory = ['Mobiles', 'Computers', 'TV',
                'Kitchen', 'Toys', 'Beauty',
                'Fitness', 'Baby Products']

  constructor() { }

  ngOnInit(): void {
  }

}
