import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=weather OR climate&language=en&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`
      );
      return res.data.articles;
    }
  });
};
