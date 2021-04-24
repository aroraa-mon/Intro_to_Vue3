const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green', quantity: 40, image: './assets/images/socks_green.jpg'},
                {id: 2, color: 'blue', quantity: 0, image: './assets/images/socks_blue.jpg'},
            ],
            cart: 0,
            brand: 'Vue Mastery',
            selectedVariant: 0,
        };
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    }, 
    methods: {
        addToCart() {
            this.cart += 1;
        },
        changeVariant(index) {
            this.selectedVariant = index;
        }
    }
});
