import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductServiceService } from '../app/Services/product-service.service';
import {HttpClientModule} from '@angular/common/http';
const routes: Routes = [];
product:[ProductServiceService];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
