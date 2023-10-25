import React, { useEffect, useState } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ tệp scraperData.json
    fetch("/api/scraperData") // API này trả về nội dung của tệp JSON
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Dữ liệu từ Scraper</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt="Ảnh" />
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
