import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ShoppingSectionComponent } from './components/shopping-section/shopping-section.component';

const routerRoutes: Routes = [
    { path: '', component: ShoppingSectionComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(routerRoutes);