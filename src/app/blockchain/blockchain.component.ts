import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../blockchain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {

  public errorMsg;
  public search;

  public blockchains = []
  constructor(private _blockchainService: BlockChainService,
              private _router: Router) { }

  ngOnInit(): void {
    this._blockchainService.getBlockChainList()
      .subscribe(data => this.blockchains = data,
                  error => this.errorMsg = error );
  }

  onSelect(blockchain) {
    this._router.navigate(['/details', blockchain.id])
  }

  onClick() {
    this._router.navigate(['/search', this.search])
  }

  covertToData(timestamp) {
    let trade_time = new Date(timestamp);
    return trade_time;
  }

}
