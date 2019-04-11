import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {path: '', component: ScannerComponent},
  {path: 'info/:upc', component: ItemInfoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
