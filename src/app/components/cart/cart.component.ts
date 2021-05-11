import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private counter: CounterService) {
    this.counter.total();
  }

  ngOnInit() {
  }

  ukloni(proizvod) {
    proizvod.kolicina = 0;
    this.counter.total();
  }

}