import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import { Category } from '@vue-storefront/sylius-api/src/types';
export declare const getCategoryTree: (category: Category) => AgnosticCategoryTree;
export declare const categoryGetters: CategoryGetters<Category>;
