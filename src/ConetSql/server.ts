// const sql = require("mssql");

// const config = {
//   server: "localhost",
//   user: "sa",
//   password: "chien93@nv",
//   database: "ThongTinDoiNgoai_V2",
//   options: {
//     encrypt: false, // Thay đổi thành true nếu bạn đang sử dụng kết nối an toàn (SSL)
//   },
// };

// async function connectAndQueryDatabase() {
//   try {
//     await sql.connect(config);
//     console.log("Kết nối SQL Server thành công.");

//     const result = await sql.query`SELECT Id FROM CMS_News`;
//     console.log(result.recordset); // In kết quả truy vấn ra màn hình
//   } catch (err) {
//     console.error("Kết nối SQL Server thất bại:", err);
//   } finally {
//     sql.close();
//   }
// }

// connectAndQueryDatabase();

const sql = require("mssql");

const config = {
  server: "localhost",
  user: "sa",
  password: "chien93@nv",
  database: "ThongTinDoiNgoai_V2",
  options: {
    encrypt: false, // Thay đổi thành true nếu bạn đang sử dụng kết nối an toàn (SSL)
  },
};

async function queryDatabase() {
  try {
    await sql.connect(config);
    console.log("Kết nối SQL Server thành công.");

    const id = 1; // ID bạn muốn truy vấn
    const result =
      await sql.query`SELECT Content FROM CMS_News WHERE Id = ${id}`;

    if (result.recordset.length > 0) {
      console.log("Dữ liệu từ cột Content:", result.recordset[0].Content);
    } else {
      console.log("Không tìm thấy dữ liệu cho ID đã cung cấp.");
    }
  } catch (err) {
    console.error("Kết nối SQL Server thất bại:", err);
  } finally {
    sql.close();
  }
}

queryDatabase();
