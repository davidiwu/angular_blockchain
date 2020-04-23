import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../blockchain.service';
import { ActivatedRoute } from '@angular/router';
import { IBlockChain } from '../blockchain';

@Component({
  selector: 'app-blockdetail',
  templateUrl: './blockdetail.component.html',
  styleUrls: ['./blockdetail.component.css']
})
export class BlockdetailComponent implements OnInit {

  public loaded = false;
  public blockdetail: IBlockChain; // todo: null when the component is loaded

  constructor(private _blockchainService: BlockChainService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this._route.snapshot.paramMap.get('id');

    this._blockchainService.getBlockDetail(id)
      .subscribe(data => this.blockdetail = data);

    this.loaded = true;
  }

}