import { Coin } from '../../interfaces/interfaces';

export type NavigationParams = {
    splash_screen: undefined;
    tabs_navigation: undefined;
};

export type TabNavigationParams = {
    home_navigation: undefined;
    news_navigation: undefined;
};

export type HomeNavigationParams = {
    home_screen: undefined;
    info_coin_screen: Coin;
};

export type NewsNavigationParams = {
    news_screen: undefined;
    info_news_screen: {
        link: string;
    };
};