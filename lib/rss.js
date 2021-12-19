import Parser from "rss-parser";

export const FEEDS = [
    {
      slug: "konoka-blog",
      title:"konoka Bolg",
      url : "http://ino.xrea.jp/hinatazaka46/?id=18",
    },
    {
        slug: "miho-blog",
        title:"Miho Bolg",
        url : "http://ino.xrea.jp/hinatazaka46/?id=20",
      },  
  ];

  export async function getFeed(feedUrl) {
    let parser = new Parser();
  
    let feed = await parser.parseURL(feedUrl);
  
    return feed;
  }

