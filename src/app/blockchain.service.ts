import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlockChain } from './blockchain';
import { Observable } from 'rxjs';
// import { Observable, Observable } from 'rxjs';

@Injectable()
export class BlockChainService {
    private _url: string = "https://blockstream.info/api/blocks/";

    constructor(private http: HttpClient) {}

    getBlockChainList(): Observable<IBlockChain[]> {
        return this.http.get<IBlockChain[]>(this._url);
    }
}