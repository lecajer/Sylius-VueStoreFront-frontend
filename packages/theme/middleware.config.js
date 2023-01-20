module.exports = {
  integrations: {
    sylius: {
      location: '@vue-storefront/sylius-api/server',
      configuration: {
        api: process.env.SYLIUS_BASE_URL + '/api/v2/graphql',
        locale: process.env.SYLIUS_DEFAULT_LOCALE,
        imagePaths: {
          thumbnail: process.env.IMAGES_BASE_URL + '/media/cache/sylius_shop_product_thumbnail',
          regular: process.env.IMAGES_BASE_URL + '/media/cache/sylius_shop_product_large_thumbnail'
        },
        customHeaders: {}
      }
    }
  }
};
