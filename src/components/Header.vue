<template>
  <nav class="navbar navbar-expand-sm " style="background-color: rgba(0, 0, 0, 1)">

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <router-link class="navbar-brand" to="/" style="margin-left: 10px;"><img src="../assets/images/logo.png" alt="..." height="45"></router-link>
      <router-link class="nav-link text-white" to="/">Home</router-link>
      <router-link class="nav-link text-white" to="/products">Products</router-link>
    </div>

    <span class='badge badge-warning' id='lblCartCount' style="margin-right: -20px; font-size: medium;">{{getTotalItems()}}</span>
    <router-link class="nav-link navbar-right text-white" to="/basket" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 1 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
    </router-link>
    

    <router-link v-if="!userLoggedIn" class="nav-link navbar-right text-white" to="/register"
                 style="background-color: rgba(204, 0, 0, 1); border: 1px solid black; margin-right: 10px;">Register
    </router-link>

    <router-link v-if="!userLoggedIn" class="btn-dark nav-link navbar-right text-white" to="/login"
                 style="background-color: rgba(204, 0, 0, 1); border: 1px solid black; margin-right: 10px;">Log In
    </router-link>

    <router-link  v-if="userLoggedIn" class="nav-link text-white" to="/orders" style="margin-right: 0px;"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg></router-link>

    <router-link v-if="userLoggedIn" class="btn-dark nav-link navbar-right text-white" to="/logout"
                 style="background-color: rgba(204, 0, 0, 1); border: 1px solid black; margin-right: 10px;">Log Out
    </router-link>
  </nav>
</template>

<script>


export default {
    data() {
        const getUser = this.$store.getters['user/getUser'];
		const isUserLoggedIn = getUser.id != undefined;

		return {
			userLoggedIn: isUserLoggedIn,
			user: {
				id: getUser.id, 
				name: getUser.name, 
				email: getUser.email, 
			},
		}

},
  methods: {
    getTotalItems() {
      this.totalItems= 0;
      this.basket = this.$store.getters['basket/getProducts']
      if(this.basket[0]!=undefined) {
        for (let index = 0; index < this.basket.length; index++) {
          this.totalItems = this.totalItems + this.basket[index].quantity;
        }
      }
      return this.totalItems;
    }
  },
  computed: {},
}

</script>  
