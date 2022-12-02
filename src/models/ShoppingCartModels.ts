import { ProductItem } from "./ProductModels"

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number 
}

/* Namn, pris, kategori och så vidare kommer ifrån ProductItem */
