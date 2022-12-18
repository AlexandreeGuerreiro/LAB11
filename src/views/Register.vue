<template>
  <div>


    <Header/>

    <Footer/>

    <h1 class="text-center text-white"> Register</h1>
    <form @submit.prevent="register">
      
		
		<div class="card mx-auto shadow-lg p-3 mb-5" style="width: 25%;">
        <div class="form-group m-2">
          <label for="name"><b>Name</b></label>
          <br>
          <input v-model="user.name" type="text" placeholder="Enter Name" name="name" id="name" required>
          <hr>
        </div>
        <div class="form-group m-2">
          <label for="email"><b>Email</b></label>
          <br>
          <input v-model="user.email" type="text" placeholder="Enter Email" name="email" id="email" required>
          <hr>
        </div>

        <div class="form-group m-2">
          <label for="psw"><b>Password</b></label>
          <br>
          <input v-model="user.password" type="password" placeholder="Enter Password" name="psw" id="psw" required>
          <hr>
        </div>

        <div class="form-group m-2">
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <br>
          <input v-model="passwordConfirmation" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
          <hr>
        </div>

        <div style="position:relative; left:8px">
          <button type="submit" class="registerbtn">Register</button>
        </div>


        <div class="container signin">
          <br>
          Already have an account?
          <router-link to="/login">Log In</router-link>
        </div>
	</div>


    </form>
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
      user: {
        name: '',
        email: '',
        password: '',
      },
      passwordConfirmation: '',
      submitting: true,
      error: true,
    }
  },

  methods: {
    validate() {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!this.user.email.match(validRegex)) {
        this.error = true;
        return false;
      } else if (this.user.password.length < 6) {
        this.error = true;
        return false;
      } else if (this.user.password !== this.passwordConfirmation) {
        this.error = true;
        return false;
      } 

      this.error = false;
      return true;
    },

    async register() {
      if (this.validate()) {
        const exists = await this.$store.dispatch('user/userExists', this.user);
        if(!exists) { //add user to database
          const addedUser = await this.$store.dispatch('user/addUser');
          console.log(addedUser);
          this.$router.push({path: '/message/1'});
        }
      }
      else {
        return
      }
    },
  },

  computed: {},
  directives: {},
  created: function () {


  }
}
</script>