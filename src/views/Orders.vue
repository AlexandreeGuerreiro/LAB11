<template>
  <div>


    <Header/>

    <div class="container pt-4 pb-4">
      <div class="row">
        <div class="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1">
          <div class="card mb-3 cms-e-section">


            <div v-if="!isEmpty" class="card-header border-bottom-0" style="background-color: black;">
              <div class="row align-items-center">
                <div class="col-md-4">
                  <span class="h6 mb-0 pt-2 pb-2" style="color:white;">Ordered at</span>
                </div>

                <div class="col-md-2  text-end" style="margin-left: auto">
                  <span class="h6 mb-0 pt-2 pb-2" style="color:white;">Price</span>
                </div>
              </div>
            </div>
            <div v-else class="card-header border-bottom-0" style="background-color: black;">
              <div class="h6 mb-0 pt-2 pb-2" style="text-align: center; color: white;">You have no completed orders
              </div>
            </div>


            <ul v-if="!isEmpty" class="card-list list-group-flush">
              <li v-for="order in orders" :key="order.id" class="list-group-item">
                <div class="row align-items-center">
                  <div class="col-md-4">
                    <h4 class="h6 mb-0">{{ order.created_at }}</h4>
                  </div>
                  <div class="col-md-2" style="text-align: center; margin-left: auto;">
                    <span class="wc-editable" data-pk="ws_per_day" data-type="text">{{ order.total }}.00€</span>
                  </div>
                </div>
              </li>
            </ul>


          </div>
        </div>
      </div>
    </div>

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
    return {
      isHidden: false,
      id: 0,
      orders:
          [
            //{
            //"id":"11",
            //"customer_id":"20",
            //"created_at":"2021-12-03 18:20:31",
            //"status_id":"1",
            //"total":"190",
            //"order_items":[{"product_id":"2","name":"Salmon Roll","price":"18","quantity":"4"},{"product_id":"3","quantity":"3"},{"product_id":"4","quantity":"2"}]
            //}
          ],
      isEmpty: true,
    }
  },
  mounted() {

  },
  created() {
    this.getOrders()
  },
  methods: {
    async getOrders() {
      await this.$store.dispatch('orders/getMyOrdersFromDB')
      this.orders = this.$store.getters['orders/getOrders']
      this.isEmpty = this.orders[0] == undefined
    },
  },
  computed: {},
}
</script>

<style scoped>
</style>