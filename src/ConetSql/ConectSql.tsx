const sql = require("mssql");

const config = {
  server: "DESKTOP-QI44UIO",
  user: "sa",
  password: "chien93@nv",
  database: "ThongTinDoiNgoai_V2",
  options: {
    encrypt: false, // Thay đổi thành true nếu bạn đang sử dụng kết nối an toàn (SSL)
  },
};

async function connectAndQueryDatabase() {
  try {
    await sql.connect(config);
    console.log("Kết nối SQL Server thành công.");

    const result = await sql.query`SELECT Id FROM TenBang`;
    console.log(result.recordset); // In kết quả truy vấn ra màn hình
  } catch (err) {
    console.error("Kết nối SQL Server thất bại:", err);
  } finally {
    sql.close();
  }
}

connectAndQueryDatabase();
