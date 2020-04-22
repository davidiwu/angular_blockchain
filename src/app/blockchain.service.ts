import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlockChain } from './blockchain';
import { Observable } from 'rxjs';

@Injectable()
export class BlockChainService {
    private _list_url: string = "https://blockstream.info/api/blocks/";
    private _detail_url: string = "https://blockstream.info/api/block/";

    constructor(private http: HttpClient) {}

    getBlockChainList(): Observable<IBlockChain[]> {
        return this.http.get<IBlockChain[]>(this._list_url);
    }

    getBlockDetail(id): Observable<IBlockChain> {
        return this.http.get<IBlockChain>(this._detail_url + id)
    }
}