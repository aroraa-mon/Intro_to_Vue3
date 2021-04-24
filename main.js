const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green'},
                {id: 2, color: 'blue'},
            ],
            cart: 0,
        };
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        changeImage(color) {
            if (color == 'green') this.image = './assets/images/socks_green.jpg';
            else this.image = './assets/images/socks_blue.jpg'
        }
    }
});
