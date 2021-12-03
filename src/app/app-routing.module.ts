import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes), AboutModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
