import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockdetailComponent } from './blockdetail/blockdetail.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

const routes: Routes = [
  { path:'details/:id', component: BlockdetailComponent },
  { path:'', component: BlockchainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlockdetailComponent, BlockchainComponent]
