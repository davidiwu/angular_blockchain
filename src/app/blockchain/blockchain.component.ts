import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public name = "blockchain";
  public siteUrl = window.location.href;

  public blockchains = []
  constructor(private _blockchainService: BlockChainService,
              private _router: Router) { }

  ngOnInit(): void {
    this._blockchainService.getBlockChainList()
      .subscribe(data => this.blockchains = data);
  }

  greeting(): string {
    return "hello " + this.name;
  }

  onSelect(blockchain) {
    this._router.navigate(['/details', blockchain.id])
  }
}
