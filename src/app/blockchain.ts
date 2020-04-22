export interface IBlockChain {
    bits: number
    difficulty: number
    height: number
    id: string
    merkle_root: string
    nonce: number
    previousblockhash: string
    size: number
    timestamp: number
    tx_count: number
    version: number
    weight: number

}