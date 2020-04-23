import { Component, OnInit } from '@angular/core';
import { BlockChainService } from '../blockchain.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchblock',
  templateUrl: './searchblock.component.html',
  styleUrls: ['./searchblock.component.css']
})
export class SearchblockComponent implements OnInit {

  public search_height: string;
  public return_id: string;
  public errorMsg: string;

  constructor(private _blockchainService: BlockChainService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {

    let height = this._route.snapshot.paramMap.get('height');
    this.search_height = height

    this._blockchainService.searchBlock(height)
      .subscribe(data => this.return_id = data,
                  error => this.errorMsg = error);

  }

}
