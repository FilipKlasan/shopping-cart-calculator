import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { routes } from './routes';
import {
  MatIconModule,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule
 } from '@angular/material';
import { ShoppingSectionComponent } from './components/shopping-section/shopping-section.component';
import { CartComponent } from './components/cart/cart.component';
import { CounterService } from './services/counter.service';
import { ZoomComponent } from './components/zoom/zoom.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingSectionComponent,
    CartComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [
    CounterService,
    { provide: MAT_DIALOG_DATA, useValue: {}}
  ],
  entryComponents: [
    CartComponent,
    ZoomComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);