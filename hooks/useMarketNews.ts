import { useQuery } from '@tanstack/react-query';

import { axiosInstance } from '../utils/axiosInterceptor';

import { ApiMarketNews, MarketNews, NewsCategoryTypes } from '~/types/news';
import { formatDate } from '~/utils/dateFunctions';

const mapApiToMarketNews = (apiNews: ApiMarketNews): MarketNews => ({
  category: apiNews.category,
  title: apiNews.headline,
  id: apiNews.id,
  thumbnail: apiNews.image,
  related: apiNews.related,
  source: apiNews.source,
  summary: apiNews.summary,
  url: apiNews.url,
  date: formatDate(apiNews.datetime),
});

const fetchMarketNews = async (category: string): Promise<MarketNews[]> => {
  try {
    const response = await axiosInstance.get<ApiMarketNews[]>('/news', {
      params: {
        category,
      },
    });
    return response.data.map(mapApiToMarketNews) ?? [];
  } catch (error) {
    console.error('Error fetching market news:', error);
    throw error;
  }
};

export const useMarketNews = (newsCategory: NewsCategoryTypes = 'general') => {
  return useQuery({
    queryKey: ['marketNews', newsCategory],
    queryFn: () => fetchMarketNews(newsCategory),
    retry: 2,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};
