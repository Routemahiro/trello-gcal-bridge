# 概観

## 目的

Trello の Webhook を Cloudflare Workers で受け取り、Google Apps Script (GAS) Webアプリへ中継する「橋渡し」サービスです。  
Trello は Webhook 応答が遅いとリトライが多発するため、常に即時 200 を返すことを重視しています。

## 主要コンポーネント

- Cloudflare Worker: `src/index.ts`
- Wrangler 設定: `wrangler.jsonc`
- GAS Webアプリ: `GAS_WEBAPP_URL` で指定

## データフロー

1. Trello Webhook が Worker に HTTP リクエストを送信
2. Worker は受信したボディをそのまま GAS に転送
3. Worker は Trello に必ず 200 を返す

```
Trello --> Cloudflare Worker --> GAS Webアプリ --> (Google Calendar 等)
```

## 重要な設計方針

- `GET`/`HEAD` は常に 200 を返す（Trello の検証用）
- `POST` 以外は 405
- `POST` は GAS に転送後、常に 200 を返す（リトライ回避）
