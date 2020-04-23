import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockdetailComponent } from './blockdetail/blockdetail.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { SearchblockComponent } from './searchblock/searchblock.component';

const routes: Routes = [
  { path:'details/:id', component: BlockdetailComponent },
  { path:'', component: BlockchainComponent },
  { 
    path:'search/:height', 
    component:SearchblockComponent,
    children: [
      {path:'details/:id', component:BlockdetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlockdetailComponent, BlockchainComponent, SearchblockComponent]
