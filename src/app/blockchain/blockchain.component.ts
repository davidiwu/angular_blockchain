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
  public tip = 0;
  constructor(private _blockchainService: BlockChainService,
              private _router: Router) { }

  ngOnInit(): void {
    this._blockchainService.getBlockChainList()
      .subscribe(data => {
                    this.blockchains = data;
                    let len = data.length;
                    this.tip = data[len-1].height - 1;
                  },
                  error => this.errorMsg = error );
  }

  onSelect(blockchain) {
    this._router.navigate(['/details', blockchain.id])
  }

  onSearchClick() {
    this._router.navigate(['/search', this.search])
  }

  onLoadMore() {
    this._blockchainService.loadMoreBlocks(this.tip)
    .subscribe(data => {
                data.forEach(element => {
                  this.blockchains.push(element);
                });
                let len = data.length;
                this.tip = data[len-1].height - 1;
              },
                error => this.errorMsg = error );
  }

  covertToData(timestamp) {
    let trade_time = new Date(timestamp);
    return trade_time;
  }

}
