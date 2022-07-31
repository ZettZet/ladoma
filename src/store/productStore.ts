import {defineStore} from "pinia";
import {ref} from "vue";
import {Product} from "@/models/product";
import axios from "axios";

const useProductStore = defineStore('productStore', () => {
    const products = ref<Product[]>([])

    const fetchProducts = async () => {
        const {data} = await axios.get<Product[]>('https://fakestoreapi.com/products')
        products.value = data
    }

    const getProductById = async (id: number): Promise<Product> => {
        const {data} = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
        return data
    }
    return {products, getProductById, fetchProducts}
})

export {useProductStore}