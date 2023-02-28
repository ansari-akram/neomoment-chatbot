import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { KernelComponent } from './kernel/kernel.component'

const routes: Routes = [
<<<<<<< HEAD
  {path:'neo',component:ChatEngComponent},
  {path:'',component:KernelComponent},
=======
  {path:'english',component:ChatEngComponent},
  {path:'',component:ChatEngComponent},
>>>>>>> 40feb7871bbcb5ac1efd9665beb7c67e621e8dd4
  {path:'kernel',component:KernelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
