# Vue Storefront 2 frontend for Sylius

This is a sample of a e-commerce frontend based on [vuestorefront-community/sylius](https://github.com/vuestorefront-community/sylius) repository.
Additions in this repo :
 - Dockerized environment
 - Plugged to the backend : [Sylius-VueStoreFront-backend](https://github.com/lecajer/Sylius-VueStoreFront-backend)



## Overview

This project is a Sylius integration for Vue Storefront 2. It works in connection with [SyliusVueStorefront2Plugin](https://github.com/BitBagCommerce/SyliusVueStorefront2Plugin) installed on Sylius side. Here is a sample of the backend : [Sylius-VueStoreFront-backend](https://github.com/lecajer/Sylius-VueStoreFront-backend)

The current integration scope contains:

- Taxable and filterable products catalog
- Checkout process (including applying coupon codes)
- User account (including address book)

### Supported versions

The project requires node in version of `14.x.x` and yarn in version of `1.x.x || >=3.x.x`.

### Installation

Use Docker

1. Change the environment variable `SYLIUS_BASE_URL` in docker-compose if needed .  .
2. `docker-compose up -d`
