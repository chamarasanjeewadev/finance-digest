export type NewsCategoryTypes =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';

export type ApiMarketNews = {
  category: string;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
  datetime: number;
};

export type MarketNews = {
  category: string;
  title: string;
  id: number;
  thumbnail: string;
  related: string;
  source: string;
  summary: string;
  url: string;
  date: string;
};
