const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeDataFromURL(url) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });

    // Trích xuất dữ liệu từ các bài viết
    const data = await page.evaluate(() => {
      const postItems = document.querySelectorAll(".post-item.row.clearfix");
      const results = [];

      for (let i = 0; i < 10 && i < postItems.length; i++) {
        const post = postItems[i];
        const title = post.querySelector(".post-title h4 a").textContent;
        const imageUrl = post.querySelector(".post-image a img").src;
        results.push({ title, imageUrl });
      }

      return results;
    });

    // Lưu dữ liệu vào tệp JSON
    fs.writeFileSync("scraperData.json", JSON.stringify(data, null, 2));
    console.log("Dữ liệu đã lưu vào scraperData.json");

    return data;
  } catch (error) {
    console.error("Lỗi khi scrap dữ liệu:", error);
  } finally {
    await browser.close();
  }
}

(async () => {
  const url = "https://laichau.gov.vn/tin-tuc-su-kien";
  await scrapeDataFromURL(url);
})();
