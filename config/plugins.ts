module.exports = ({ env }) => ({
  "cloudflare-pages": {
    enabled: true,
    config: {
      instances: [
        {
          name: "production website",
          hook_url: env("CLOUDFLARE_DEPLOY_HOOK_URL"),
        },
        {
          name: "preview website",
          hook_url: env("CLOUDFLARE_DEPLOY_HOOK_URL"),
        },
      ],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
