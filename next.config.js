/** @type {import('next').NextConfig} */
const nextConfig = {
  // 既存の設定を保持
  images: {
    domains: ['images.microcms-assets.io'],
  },
  // 静的アセットの設定を追加
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
