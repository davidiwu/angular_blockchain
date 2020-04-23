import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlockChainService } from './blockchain.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchblockComponent } from './searchblock/searchblock.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchblockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BlockChainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
