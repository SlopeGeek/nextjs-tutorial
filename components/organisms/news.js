import { useState, useEffect } from 'react'
import { data } from 'remark';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const SAKURAZAKA46_NEWS_URL = "https://www.happyou.info/fs/gen.php?u=517725001&p=-329324183"
const HINATAZAKA46_NEWS_URL = "https://www.happyou.info/fs/gen.php?u=1441264424&p=-1096495880"
//const HINATAZAKA46_NEWS_URL = "fs/gen.php?u=1441264424&p=-1096495880"



//パターン1
/* const RssParser = require('rss-parser'); //importではなくrequireで呼びます
const url = CORS_PROXY + 'https://www.happyou.info/fs/gen.php?u=1441264424&p=-1096495880'
const rssParser = new RssParser();
rssParser.parseURL(url)
  .then((feed) => {
    console.log(feed);
  });
 */


//パターン2
/*
const URL = 'https://www.happyou.info/fs/gen.php?u=1441264424&p=-1096495880';
fetch(URL)
.then( response => response.text())
.then( xmlData => console.log(xmlData));
*/


//パターン3
let Parser = require('rss-parser');
let parser = new Parser();

/*  (async () => {
  let feed = await parser.parseURL(CORS_PROXY + 'https://www.happyou.info/fs/gen.php?u=1441264424&p=-1096495880');
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link)
  });

})();
 */


export default function News() {

  const [value, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let feed = await parser.parseURL(HINATAZAKA46_NEWS_URL);

      feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
        setData(item.title.concat())
      });
    }
    fetchData();
  }, [])


  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}