import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatEngComponent } from './chat-eng/chat-eng.component';

const routes: Routes = [
  {path:'english',component:ChatEngComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
