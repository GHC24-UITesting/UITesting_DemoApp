import React, { useState } from "react";
import axios from "axios";
import { Stack } from "@fluentui/react";
import {
  Button,
  Combobox,
  Option,
  Input,
  Label,
  MessageBar,
} from "@fluentui/react-components";
interface Article {
  title: string;
  url: string;
  source: {
    name: string;
  };
  publishedAt: string;
}

interface NewsAppProps {
  parent: "card" | "page";
}

const categoryOptions = [
  { key: "all", text: "All Categories" },
  { key: "business", text: "Business" },
  { key: "entertainment", text: "Entertainment" },
  { key: "general", text: "General" },
  { key: "health", text: "Health" },
  { key: "science", text: "Science" },
  { key: "sports", text: "Sports" },
  { key: "technology", text: "Technology" },
];

const NewsApp: React.FC<NewsAppProps> = (props) => {
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("all");
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async () => {
    const apiKey = ""; // Replace with your NewsAPI key
    const categoryParam = category !== "all" ? `&category=${category}` : "";
    const url = `https://newsapi.org/v2/top-headlines?country=${country}${categoryParam}&apiKey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const displayedArticles = props.parent === "card" ? articles.slice(0, 3) : articles;

  return (
    <div>
      <Stack tokens={{ childrenGap: 20, padding: 20 }}>
        <Label>Country Code{" "}</Label>
        <Input
          placeholder="Enter country code (e.g., us)"
          appearance="outline"
          value={country}
          onChange={(e, { value }) => setCountry(value || "")}
          width='100%'
        />

        <Label>Category{" "}</Label>
        <Combobox
          value={category}
          onOptionSelect={(e, data) => {
            console.log("Selected category:", data.optionValue);
            setCategory(data.optionValue as string);
          }}
        >
          {categoryOptions.map((option) => (
            <Option key={option.key} value={option.text}>
              {option.text}
            </Option>
          ))}
        </Combobox>
        <Button appearance="primary" onClick={handleSearch}>
          Search
        </Button>
        <Stack tokens={{ childrenGap: 10 }}>
          <h2>Top Headlines</h2>
          {displayedArticles.length > 0 ? (
            displayedArticles.map((article, index) => (
              <MessageBar key={index} intent="error">
                <strong>{article.title}</strong> - {article.source.name}
                <br />
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </MessageBar>
            ))
          ) : (
            <p>No news articles found</p>
          )}
        </Stack>
      </Stack>
    </div>
  );
};

export default NewsApp;
