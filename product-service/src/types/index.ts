export interface productBook {
  asks: [number, number][];
  bids: [number, number][];
}

export interface ExchangeInterface {
  fetchproductBook(): Promise<productBook>;
  calculateMidPrice(productBook: productBook): number;
}

export interface PriceIndex {
  timestamp: number;
  exchanges: {
    [key: string]: {
      midPrice: number;
      productBook: productBook;
    };
  };
  globalMidPrice: number;
}
