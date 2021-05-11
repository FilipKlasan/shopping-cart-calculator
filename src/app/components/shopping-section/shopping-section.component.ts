import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { ZoomComponent } from '../zoom/zoom.component';

@Component({
  selector: 'app-shopping-section',
  templateUrl: './shopping-section.component.html',
  styleUrls: ['./shopping-section.component.css']
})
export class ShoppingSectionComponent implements OnInit {

  prikaziOd: boolean = true;
  prikaziOb: boolean = false;
  
  constructor(private counter: CounterService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  prikaziOdecu() {
    this.prikaziOb = false;
    this.prikaziOd = true;
  }

  prikaziObucu() {
    this.prikaziOd = false;
    this.prikaziOb = true;
  }

  plus(proizvod) {
    this.counter.plus(proizvod);
  }

  minus(proizvod) {
    this.counter.minus(proizvod);
  }

  zoom(proizvod) {
    this.dialog.open(ZoomComponent, {
      width: '400px',
      height: 'auto',
      data: proizvod
    })
  }

}