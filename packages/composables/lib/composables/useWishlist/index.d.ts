import { Ref } from '@vue/composition-api';
import { Wishlist, WishlistProduct, Product } from '../../types';
export declare const wishlist: Ref<Wishlist>;
export declare const useWishlist: () => import("@vue-storefront/core").UseWishlist<Wishlist, WishlistProduct, Product, any>;
