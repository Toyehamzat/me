import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            publicPath: `/_next/static/files/`,
            outputPath: `${isServer ? "../" : ""}static/files/`,
          },
        },
      ],
    });

    return config;
  },
};

export default withPWA(nextConfig);
