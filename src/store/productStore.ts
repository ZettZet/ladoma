import {defineStore} from "pinia";
import {ref} from "vue";
import {Product} from "@/models/product";

const useProductStore = defineStore('productStore', () => {
    const products = ref<Product[]>([
        {
            imageSource: 'https://placehold.jp/3d4070/ffffff/150x250.png',
            price: 600,
            description: 'dress',
            name: 'dress 1',
            id: 1
        },
        {
            imageSource: 'https://placehold.jp/3d4070/ffffff/150x250.png',
            price: 600,
            description: 'dress',
            name: 'dress 2',
            id: 2
        },
        {
            imageSource: 'https://placehold.jp/3d4070/ffffff/150x250.png',
            price: 600,
            description: 'dress',
            name: 'dress 3',
            id: 3
        },
    ])

    const getProductById = (id: number): Product => {
        const product = products.value.find(product => product.id === id)
        if (product === undefined) {
            throw new Error(`Not Found ${id}`)
        }
        return product
    }
    return {products, getProductById}
})

export {useProductStore}