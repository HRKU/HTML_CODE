import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {


  ProductPrice = ['100000', '799999', '110000', '40000',
                      '10000','100','3000','20000', '500' ]
  
      ProductName = ['Mac Book', 'LG TV', 'Iphone', 'OnePlus 7t', 'Mixer', 'Toy car',
                    "Pond's Face Cream", 'Jhonson Baby Cart', 'Dumbells']
  
  
       
      
      
                    
  

  ProductImage =['../../assets/mac.jpg','../../assets/Lgtv.jpg',
  '../../assets/ip.jpg', '../../assets/one.jpg','../../assets/mix.jpg',
  '../../assets/toy.jpg','../../assets/pond.jpg',
  '../../assets/bb.jpg','../../assets/dum.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
