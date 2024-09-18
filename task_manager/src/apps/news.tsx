import React, { useState } from 'react';
import axios from 'axios';
import { TextField, PrimaryButton, Stack, Dropdown, IDropdownOption, MessageBar, MessageBarType } from '@fluentui/react';

interface Article {
  title: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
}

const categoryOptions: IDropdownOption[] = [
  { key: 'all', text: 'All Categories' },
  { key: 'business', text: 'Business' },
  { key: 'entertainment', text: 'Entertainment' },
  { key: 'general', text: 'General' },
  { key: 'health', text: 'Health' },
  { key: 'science', text: 'Science' },
  { key: 'sports', text: 'Sports' },
  { key: 'technology', text: 'Technology' },
];

const NewsApp: React.FC = () => {
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('all');
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async () => {
    const apiKey = '05d4a50c7cac4fe68729798a40d2a8ff'; // Replace with your NewsAPI key
    const categoryParam = category !== 'all' ? `&category=${category}` : '';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}${categoryParam}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <Stack tokens={{ childrenGap: 20, padding: 20 }}>
      <TextField
        label="Country Code"
        value={country}
        onChange={(e, newValue) => setCountry(newValue || '')}
        placeholder="Enter country code (e.g., us)"
      />
      <Dropdown
        label="Category"
        selectedKey={category}
        onChange={(e, option) => setCategory(option?.key as string)}
        options={categoryOptions}
      />
      <PrimaryButton text="Search" onClick={handleSearch} />
      <Stack tokens={{ childrenGap: 10 }}>
        <h2>Top Headlines</h2>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <MessageBar
              key={index}
              messageBarType={MessageBarType.severeWarning}
              isMultiline={false}
              truncated={true}
              overflowButtonAriaLabel="See more"
            >
              <strong>{article.title}</strong> - {article.source.name}
              <br />
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </MessageBar>
          ))
        ) : (
          <p>No news articles found</p>
        )}
      </Stack>
    </Stack>
  );
};

export default NewsApp;