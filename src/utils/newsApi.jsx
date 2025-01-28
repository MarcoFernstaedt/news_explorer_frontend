import apiKey from "../utils/constants";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const request = (url, options) => {
  return fetch(url, options).then(processServerResponce);
};

const processServerResponce = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

// 7 days ago
const get7DaysAgo = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0]; // "YYYY-MM-DD"
};

const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

const parseNewsData = (newsData) => {
  return Object.values(newsData["articles"]);
};

const getNews = async (keyword) => {
  const url = `${baseUrl}?q=${encodeURIComponent(
    keyword
  )}&apiKey=${apiKey}&from=${get7DaysAgo()}&to=${getToday()}&pageSize=100`;

  try {
    const articleObject = await request(url);
    let articleArrays = parseNewsData(articleObject);
    return articleArrays;
  } catch (err) {
    console.log("Error fetching news:", err);
  }
};

export default getNews;
