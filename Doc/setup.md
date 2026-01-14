# 開発環境セットアップ

## 前提

- Node.js 18+ 推奨
- Cloudflare Wrangler

## インストール

```
npm install
```

## ローカル起動

```
npm run dev
```

ローカルでの `GAS_WEBAPP_URL` は `wrangler.jsonc` の `vars` に設定されています。  
本番では Secret の利用を推奨します。

## 型定義更新

```
npm run cf-typegen
```

`worker-configuration.d.ts` が更新されます。
