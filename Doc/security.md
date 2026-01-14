# セキュリティ注意

## 秘密情報

- `GAS_WEBAPP_URL` が公開されると、第三者が GAS に直接 POST できる可能性があります
- 本番運用では Wrangler Secret の利用を推奨

## 最低限の保護（今後検討）

- Trello からのリクエスト署名検証（Webhook の認証）
- GAS 側で送信元の検証（ヘッダー `X-Bridge` だけでは不十分）
