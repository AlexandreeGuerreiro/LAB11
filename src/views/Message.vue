<template>


  <div>
    <nav class="navbar navbar-expand-sm " style="background-color: rgba(0, 0, 0, 1)">

      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <div class="navbar-brand" to="/" style="margin-left: 10px;"><img src="../assets/images/logo.png" alt="..."
                                                                         height="45"></div>
      </div>

    </nav>

    <Footer/>

    <h1 class="success-message text-white" style="text-align: center;">{{ message }}</h1>

  </div>

</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer,
  },
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    this.setMessage()
  },
  methods: {
    setMessage() {
      if (this.$route.params.id == 1) {
        this.message = "Welcome! You can now login"
      }
      if (this.$route.params.id == 2) {
        this.message = "Welcome back " + this.$store.getters['user/getUser'].name + "!"
      }
      if (this.$route.params.id == 3) {
        this.message = "Logged out, see you soon!"
      }
      if (this.$route.params.id == 4) {
        this.message = "Thank you for your order"
      }

      var timeleft = 2;
      var downloadTimer = setInterval(() => {
        if (timeleft <= 0) {
          clearInterval(downloadTimer)
          this.$router.push('/')
        }
        timeleft -= 1
      }, 1000)
    },


  },

}
</script>

<style scoped>
.logout {
  margin: 0 auto;
  max-width: 800px;
}

.success-message {
  color: #32a95d;
}

.error-message {
  color: #d33c40;
}

</style>



