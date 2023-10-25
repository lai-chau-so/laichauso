import React, { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

interface Article {
  title: string;
  content: string;
}

const ArticleData: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://laichau.gov.vn/tin-tuc-su-kien"
        ); // Thay thế URL_CUA_TRANG_WEB bằng URL thực tế của trang web bạn muốn lấy dữ liệu.
        const html = response.data;
        const $ = cheerio.load(html);

        // Lọc ra các thẻ <article> có thuộc tính data-id="6524bce0d049ace9f30057a2"
        const articlesData: Article[] = [];

        $('article[data-id="6524bce0d049ace9f30057a2"]').each(
          (index, element) => {
            const article = $(element);
            const title = article.find("h2").text(); // Ví dụ: Lấy tiêu đề từ thẻ <h2> bên trong <article>
            const content = article.find(".content").text(); // Ví dụ: Lấy nội dung từ thẻ có class "content" bên trong <article>

            // Thêm dữ liệu vào mảng articlesData
            articlesData.push({ title, content });
          }
        );

        // Cập nhật state với dữ liệu đã lấy
        setArticles(articlesData);
      } catch (error) {
        console.error("Lỗi:", error);
      }
    };

    // Gọi hàm fetchData để lấy dữ liệu
    fetchData();
  }, []);

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleData;
