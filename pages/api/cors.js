import Cors from 'cors';

// CORS のミドルウェアを初期化
const cors = Cors({
  methods: ['GET', 'HEAD']
});

// 後続の処理を行う前にミドルウェアの実行を待ち、
// また、ミドルウェアでエラーが発生したときエラーを投げるためのヘルパーメソッド
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // ミドルウェアを実行する
  await runMiddleware(req, res, cors);
  // API ロジックの残り部分
  res.json({ message: 'Hello Everyone!' });
}

export default handler;