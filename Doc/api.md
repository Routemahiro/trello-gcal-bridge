# API仕様（Worker受け口）

## エンドポイント

- `https://<your-worker>.<subdomain>.workers.dev/`
- パスは未使用（どのパスでも同じ挙動）

## メソッド別の挙動

### `GET` / `HEAD`

- 常に `200 OK`
- レスポンスボディ: `"ok"`
- Trello の Webhook 検証用

### `POST`

- リクエストボディをそのまま GAS へ転送
- 転送時ヘッダー:
  - `Content-Type: application/json`
  - `X-Bridge: cf-worker`
- 返却は常に `200 OK` / `"ok"`

### その他

- `405 Method Not Allowed`

## ボディ形式

- Trello の Webhook ペイロードをそのまま受け入れる想定
- Worker 側では JSON のパースや検証は行わない
