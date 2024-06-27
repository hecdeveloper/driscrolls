import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

interface News {
  id: string;
  title: string;
  content: string;
}

const NewsDetail: React.FC = () => {
  const [news, setNews] = useState<News | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/news/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetail;