import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBlockChain } from './blockchain';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BlockChainService {
    private _list_url: string = "https://blockstream.info/api/blocks/";
    private _detail_url: string = "https://blockstream.info/api/block/";
    private _search_url: string = "https://blockstream.info/api/block-height/";

    constructor(private _http: HttpClient) {}

    getBlockChainList(): Observable<IBlockChain[]> {
        return this._http.get<IBlockChain[]>(this._list_url)
                         .pipe(
                             catchError(this.errorHandler)
                         );
    }

    getBlockDetail(id): Observable<IBlockChain> {
        let blockChain = this._http.get<IBlockChain>(this._detail_url + id);
        return blockChain
    }

    getBlockTrans(id): Observable<IBlockChain> {
        return this._http.get<IBlockChain>(this._detail_url + id + "/txs/0")
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server error.");
    }

    //responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    searchBlock(height): Observable<string> {
        return this._http.get(this._search_url + height,  {responseType: "text"})
                         .pipe(                             
                                catchError(this.errorHandler)  
                         );
    }
}