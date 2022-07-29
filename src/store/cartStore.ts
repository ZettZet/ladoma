import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {CartEntry} from "@/models/product";
import {useProductStore} from "@/store/productStore";

const useCartStore = defineStore('cartStore', () => {
    const cart = ref<CartEntry[]>([])

    const {getProductById} = useProductStore()

    const getProductIndexInCartById = (id: number): number => cart.value.findIndex(cartEntry => cartEntry.product.id === id)

    const increaseProductCount = (productId: number) => {
        const index = getProductIndexInCartById(productId)
        if (index === -1) {
            return
        }
        cart.value[index].count += 1
    }

    const decreaseProductCount = (productId: number) => {
        const index = getProductIndexInCartById(productId)
        if (index === -1) {
            return
        }
        cart.value[index].count -= 1
    }

    const setProductCount = (productId: number, count: number) => {
        const index = getProductIndexInCartById(productId)
        if (index === -1 || count < 0) {
            return
        }
        cart.value[index].count = count
    }
    const addProduct = (productId: number) => {
        const index = getProductIndexInCartById(productId)
        const product = getProductById(productId)
        if (index === -1) {
            cart.value.push({product, count: 1})
        }
    }

    const removeProduct = (productId: number) => {
        const index = getProductIndexInCartById(productId)
        if (index === -1) {
            return
        }
        cart.value.splice(index, 1)
    }

    const getTotalPrice = computed(() =>
        cart.value.reduce((accumulatedPrice, {count, product: {price}}) => accumulatedPrice + (price * count), 0)
    )

    return {cart, getTotalPrice, setProductCount, decreaseProductCount, increaseProductCount, removeProduct, addProduct}
})

export {useCartStore}