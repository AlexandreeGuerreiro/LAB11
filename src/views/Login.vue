<template>
<div>


  
<Header />

<Footer />

<h1 class="text-center text-white"> Log In</h1>
<br>
<form @submit.prevent="login">
<div class="card mx-auto shadow-lg p-3 mb-5" style="width: 25%;">
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

    <div style="position:relative; left:8px">
        <button type="submit" class="loginbtn">Log In</button>
    </div>

    <div class="container signin">
        <br>
        <p>Don't have an account? <router-link to="/register">Register</router-link>.</p>
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
			email: '',
			password: '',
        },
		submitting: false,
		error: false,
      }
    },
	
	methods: {
	async login() {
		console.log(this.user);

		const canLogin = await this.$store.dispatch('user/loginUser', this.user);
		if (canLogin) {
			this.error = false;
			console.log(this.$store.getters['user/getUser']);
			this.$router.push({ path: '/message/2'});
		}
		else this.error = true;
	},

	},
	
	computed: {

	},
	directives: {

	},
	created: function () {

	}
}
</script>

