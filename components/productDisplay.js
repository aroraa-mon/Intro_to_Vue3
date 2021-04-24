app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /* html */
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :class="{'out-of-stock-img': !inStock}" v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock"> In stock </p>
                <p v-else> Out of Stock </p>

                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div 
                    v-for="(variant, index) in variants" 
                    :key=variant.id 
                    @mouseover="changeVariant(index)"
                    :style = "{backgroundColor: variant.color}"
                    class="color-circle"
                ></div>
                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                    v-on:click="addToCart"
                >Add to Cart</button>
            </div>
        </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1, color: 'green', quantity: 40, image: './assets/images/socks_green.jpg'},
                {id: 2, color: 'blue', quantity: 0, image: './assets/images/socks_blue.jpg'},
            ],
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
        },
        shipping() {
            if(this.premium) return 'Free';
            else return '₹ 50';
        }
    }, 
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        changeVariant(index) {
            this.selectedVariant = index;
        }
    }
})