const savedArticles = [
  {
    isSaved: true,
    title: "Breaking News: Tech Innovation in 2024",
    urlToImage: "https://via.placeholder.com/300",
    keyword: "Technology",
    content:
      "The latest advancements in AI and robotics are reshaping the industry...",
    pubDate: "2024-02-10",
    author: "John Doe",
  },
  {
    isSaved: true,
    title: "Finance: Stock Market Hits Record Highs",
    urlToImage: "https://via.placeholder.com/300",
    keyword: "Finance",
    content: "The stock market soared to new highs...",
    pubDate: "2024-02-08",
    author: "Michael Johnson",
  },
].map((article) => ({ ...article, _id: crypto.randomUUID() }));

// const saveArticles = async ({ _id, isSaved}) => {
//   if (isSaved) {
//     // Add article if not already saved
//     return {...}
//   } else {
//     // Remove article if isSaved is false
//     setSavedArticles(prev => prev.filter(a => a._id !== _id));
//   }
// }

const getArticles = async () => {
  return savedArticles;
};

export default getArticles;
