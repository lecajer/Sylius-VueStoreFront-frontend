module.exports = {
  integrations: {
    sylius: {
      location: '@vue-storefront/sylius-api/server',
      configuration: {
        api: 'https://prod-l5ldlhq-ebmc54gdlmylq.fr-3.platformsh.site/api/v2/graphql',
        locale: 'en_US',
        imagePaths: {
          thumbnail: 'http://nginx:80/media/cache/sylius_shop_product_thumbnail',
          regular: 'http://nginx:80/media/cache/sylius_shop_product_large_thumbnail'
        },
        customHeaders: {}
      }
    }
  }
};
