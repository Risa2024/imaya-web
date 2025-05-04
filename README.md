# 今屋のハンバーガー えひめ 公式ウェブサイト

[今屋のハンバーガー えひめ](https://www.imaya-ehime.com/)の公式ウェブサイトのソースコードです。

## 技術スタック

- **フレームワーク**: Next.js 15.0.2
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIコンポーネント**: shadcn/ui
- **CMS**: microCMS

## 開発環境のセットアップ

### 必要条件

- Node.js (バージョンは `.node-version` を参照)
- Yarn

### インストール

```bash
# 依存関係のインストール
yarn install

# 開発サーバーの起動
yarn dev
```

### 利用可能なスクリプト

- `yarn dev`: 開発サーバーを起動
- `yarn build`: プロダクションビルドを作成
- `yarn start`: プロダクションビルドを実行
- `yarn lint`: ESLintによるコードチェック
- `yarn format`: Prettierによるコードフォーマット
- `yarn ui`: shadcn/uiコンポーネントの追加

## プロジェクト構造

```
src/
  ├── components/     # 共通コンポーネント
  ├── app/           # ページコンポーネント
  ├── lib/           # ユーティリティ関数
  └── styles/        # グローバルスタイル
```

## 品質管理

- ESLint: コード品質のチェック
- Prettier: コードフォーマット
- Husky: Gitフックによる品質管理
- lint-staged: ステージングされたファイルのみのチェック

  ```
  utils.ts
  types.ts
  ```

- **API Routes**: kebab-case
  ```
  route.ts
  ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js)
