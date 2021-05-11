import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}

  total() {
    this.dialog.open(CartComponent, {
        width: '400px',
        height: 'auto', 
        data: {}
    });
  }
}
