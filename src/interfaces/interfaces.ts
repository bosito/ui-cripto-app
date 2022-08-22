export interface ListCoins {
    coins: Coin[];
}

export interface Coin {
    id:              string;
    icon:            string;
    name:            string;
    symbol:          string;
    rank:            number;
    price:           number;
    priceBtc:        number;
    volume:          number;
    marketCap:       number;
    availableSupply: number;
    totalSupply:     number;
    priceChange1h:   number;
    priceChange1d:   number;
    priceChange1w:   number;
    websiteUrl:      string;
    twitterUrl:      string;
    exp:             string[];
};


export interface Newslist {
    news: News[];
}

export interface News {
    id:             string;
    feedDate:       number;
    source:         string;
    title:          string;
    icon:           string;
    imgURL:         string;
    description:    string;
    link:           string;
    sourceLink:     string;
    reactionsCount: ReactionsCount;
    shareURL:       string;
    content:        boolean;
    coins:          CoinNews[];
    relatedCoins:   string[];
}

export interface CoinNews {
    coinKeyWords:      string;
    coinPercent:       number;
    coinTitleKeyWords: string;
    coinNameKeyWords:  string;
    coinIdKeyWords:    string;
}

export interface ReactionsCount {
}

export interface Grafics {
    chart: Array<number[]>;
}

