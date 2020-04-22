import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../blockchain.service';

@Component({
  selector: 'app-test',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public name = "blockchain";
  public siteUrl = window.location.href;

  public blockchains = []
  constructor(private _blockchainService: BlockChainService) { }

  ngOnInit(): void {
    this._blockchainService.getBlockChainList()
      .subscribe(data => this.blockchains = data);
  }

  greeting(): string {
    return "hello " + this.name;
  }
}
