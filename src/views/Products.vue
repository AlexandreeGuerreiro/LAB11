<template>
  <div>

    <Header/>

    <div class="container d-flex justify-content-center mt-50 mb-50">

      <div class="row">
        <li v-for="product in products" :key="product.id" class="col-md-4 mt-2" style="margin-bottom: 20px;">
          <div class="card h-100">
            <div class="card-body">
              <div class="card-img-actions" height="100">

                <td><img :src="require(`@/assets/images/${product.image}`)" class="card-img img-fluid"></td>
              </div>
            </div>

            <div class="card-body bg-light text-center">
              <div class="mb-2">
                <h6 class="font-weight-semibold mb-2">
                  <a>{{ product.name }}</a>
                </h6>

                <a>{{ product.description }}</a>
              </div>

              <h3 class="mb-0 font-weight-semibold">{{ product.price }}.00€</h3>

              <p></p>

              <button @click="addToBasket(product)" type="button" style = "background-color: rgba(204, 0, 0, 1); color: white;" class="btn bg-cart btn-danger"><i class="fa fa-cart-plus mr-2"></i> Add to cart
              </button>

            </div>
          </div>


        </li>
      </div>
    </div>

	<div style = "margin-bottom: 90px;"></div>
    <Footer/>
    <!-- <Product :product = 'this.$store.getters[product/getProduct](3)'/> -->

    <!-- <Product product= "this.$store.getters[product/getProduct](3)"/>
    <Product/>
    <Product/> -->
    <!-- <Product productImage = "../assets/images/logo.png"/> -->


  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  showModal: true,
  components: {
    Footer,
    Header
  },
  data() {
    return {
      products: []
    }
  },
  created() {
    this.getProducts()
  },
  mounted() {

  },
  methods: {
    async getProducts() {
      await this.$store.dispatch('products/getProductsFromDB')
      this.products = this.$store.getters['products/getProducts']
    },
	addToBasket(product) {
		this.$store.commit('basket/incrementProduct', product.id);
	},
  },
  computed: {},
}


</script>

