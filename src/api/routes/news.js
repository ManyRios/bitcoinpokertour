const express = require("express");
const router = express.Router();

// use json
router.use(express.json());

const News = require("../schemas/news");

router.get("/", async (req, res) => {
  const news = await News.find();

  if (news.length === 0) {
    const news = [
      {
        title: "Dan runs deep in the WSOP Main Event",
        date: "2023-06-04",
        story: "Dan made it to day 6 of the WSOP Main Event. He was eliminated in 52nd place.",
        author: "Texas HODL",
        tags: "WSOP, poker",
      },
    ];

    return res.json(news);
  }

  res.json(news);
});

module.exports = router;
