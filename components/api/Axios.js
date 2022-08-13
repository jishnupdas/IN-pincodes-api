import axios from "axios";

const Axios = axios.create({
  baseURL: "https://api.sheetson.com/v2/sheets/",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: `Bearer ${process.env.SHEETSON_API_KEY}`,
    "X-Spreadsheet-Id": `${process.env.SHEET_ID}`,
  },
});

export default Axios;
