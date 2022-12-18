<template>
  <div>


    <Header/>

    <section v-if="!isEmpty" class="h-100">
      <div class="container h-100 py-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div v-if="!isEmpty" class="col-10">

            <div class="d-flex justify-content-between align-items-center mb-4">
              <h3 class="fw-normal mb-0 text-black" style="color: white">Shopping Cart</h3>
            </div>

            <li v-for="basketItem in basket" :key="basketItem.id" style="margin-bottom: 20px;">
              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  <div class="row d-flex justify-content-between align-items-center">
                    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                          :src="require(`@/assets/images/${getProduct(basketItem.id).image}`)"
                          class="img-fluid rounded-3" alt="Cotton T-shirt">
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <p class="lead fw-normal mb-2">{{ getProduct(basketItem.id).name }}</p>
                      <p><span class="text-muted">{{ getProduct(basketItem.id).description }}</span></p>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">

                      <button class="btn btn-link px-2"
                              @click="removeProduct(basketItem)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-dash-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>

                      </button>

                      <h1 style="font-size:1em">{{ basketItem.quantity }}</h1>

                      <button class="btn btn-link px-2"
                              @click="addProduct(basketItem)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-plus-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path
                              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                      </button>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h5 class="mb-0">Price: {{ getPrice(basketItem) }}€</h5>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div>
              <h4 align="right" style="color: white">Total: {{ getTotal() }}€</h4>
            </div>


            <div style="margin-top:20px;">
              <router-link to="/products" type="button" class="btn btn-block btn-lg btn-danger"
                           style="background-color: rgba(204, 0, 0, 1); color: white;">Select more
              </router-link>

              <button v-if="userLoggedIn" @click="addOrder()" type="button" class="btn btn-block btn-lg btn-danger"
                      style="float: right; background-color: rgba(204, 0, 0, 1); color: white;">Order now
              </button>
              <router-link to="/login" v-if="!userLoggedIn" type="button" class="btn btn-block btn-lg btn-danger"
                           style="float: right; background-color: rgba(204, 0, 0, 1); color: white;">Login to order
              </router-link>
            </div>


          </div>
        </div>
      </div>
    </section>
    <div v-else class="container pt-4 pb-4">
      <div class="row">
        <div class="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
          <div class="card mb-3 cms-e-section">
            <div class="card-header border-bottom-0" style="background-color: black;">
              <div class="h6 mb-0 pt-2 pb-2" style="text-align: center; color: white;">Your cart is Empty
              </div>
            </div>
          </div>
          <router-link to="/products" type="button" class="btn btn-block btn-lg btn-danger"
                       style="background-color: rgba(204, 0, 0, 1); color: white;">Select products
          </router-link>
        </div>
      </div>
    </div>
    <div style="margin-bottom: 90px;"></div>
    <Footer/>

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {

  components: {
    Footer,
    Header
  },
  data() {
    const getUser = this.$store.getters['user/getUser'];
    const isUserLoggedIn = getUser.id != undefined;
    return {
      userLoggedIn: isUserLoggedIn,
      basket: [],
      totalPrice: 0,
      isEmpty: true
    }
  },
  created() {
    this.getBasket()
  },
  mounted() {
  },
  methods: {
    getBasket() {
      this.basket = this.$store.getters['basket/getProducts']
      this.isEmpty = this.basket[0] == undefined
    },
    getProduct(id) {
      return this.$store.getters['products/getProduct'](id)
    },
    getPrice(basketItem) {
      return this.getProduct(basketItem.id).price * basketItem.quantity;
    },
    addProduct(basketItem) {
      this.$store.commit('basket/incrementProduct', basketItem.id);
    },
    removeProduct(basketItem) {
      this.$store.commit('basket/decrementProduct', basketItem.id);
      this.isEmpty = this.basket[0] == undefined
    },
    getTotal() {
      this.totalPrice = 0;
      for (let index = 0; index < this.basket.length; index++) {
        this.totalPrice = this.totalPrice + this.getPrice(this.basket[index]);
      }
      return this.totalPrice;
    },
    async addOrder() {
      let order = {
        user_id: this.$store.getters['user/getUser'].id,
        totalAmount: this.totalPrice,
        status_id: 1,
        items: this.basket,
      }
      await this.$store.dispatch('orders/addOrder', order)
      this.$store.commit('basket/clearBasket')
      this.$router.push({path: '/message/4'});
    },
  },
  computed: {},
}
</script>

<style scoped>
</style>