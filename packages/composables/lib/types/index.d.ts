import { ProductsSearchParams } from '@vue-storefront/core';
export { UseCategory, UseProduct } from '@vue-storefront/core';
export declare type Address = Record<string, unknown>;
export declare type Category = Record<string, unknown>;
export declare type User = {
    firstName?: string;
    lastName?: string;
    email?: string;
};
export declare type UserAddress = Record<string, unknown>;
export declare type CartItem = Record<string, unknown>;
export declare type Cart = {
    totals: number;
    items: CartItem[];
};
export declare type Coupon = Record<string, unknown>;
export declare type Order = Record<string, unknown>;
export declare type OrderItem = Record<string, unknown>;
export declare type Product = Record<string, unknown>;
export declare type Review = Record<string, unknown>;
export declare type Shipping = Record<string, unknown>;
export declare type ShippingMethod = Record<string, unknown>;
export declare type WishlistProduct = Record<string, unknown>;
export declare type Wishlist = Record<string, unknown>;
export declare type ProductsResponse = {
    data: Product[];
    total: number;
};
export declare type OrderSearchParams = Record<string, any>;
export declare type OrdersResponse = {
    results: any[];
    total: number;
};
export declare type TODO = any;
export declare type UseBillingAddParams = TODO;
export declare type UseCategorySearchParams = TODO;
export declare type UseFacetSearchParams = TODO;
export declare type UseProductSearchParams = ProductsSearchParams;
export declare type UseReviewSearchParams = TODO;
export declare type UseReviewAddParams = TODO;
export declare type UseShippingAddParams = TODO;
export declare type UseUserUpdateParams = TODO;
export declare type UseUserRegisterParams = TODO;
export declare type useUserOrderSearchParams = TODO;
