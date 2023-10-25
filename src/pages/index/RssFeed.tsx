// RssFeed.tsx
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

const RssFeed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        const parser = new Parser();
        const feed = await parser.parseURL(
          "https://createfeed.fivefilters.org/extract.php?url=https%3A%2F%2Flaichau.gov.vn%2Ftin-tuc-su-kien&in_id_or_class=post-title&max=5&order=document&guid=0"
        );

        setFeedItems(feed.items);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };

    fetchRssFeed();
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      <ul>
        {feedItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.contentSnippet}</p>
            <p>{item.isoDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RssFeed;
