# デプロイと運用

## デプロイ

```
npm run deploy
```

`wrangler.jsonc` の設定に基づいてデプロイされます。

## 環境変数

`GAS_WEBAPP_URL` は GAS Webアプリの URL です。  
機密性が高い場合は Wrangler の Secret を使用してください。

```
wrangler secret put GAS_WEBAPP_URL
```

## 監視

`wrangler.jsonc` で `observability.enabled = true` が指定されています。  
Cloudflare ダッシュボードでログとメトリクスを確認できます。
