<template>
 <div class="my-form">
      <form class="ui form">
         <div  id="login">
           <h1>Login</h1>
            <div class="fields row">
             <div  class="six wide field col-sm-6">
              <input type="text" name="username" v-model="input.username"  placeholder="Username" />
            </div>
            <br>
            <div class="six wide field">
              <input type="password" name="password" v-model="input.password" placeholder="Password" />
            </div>
            <div class="six wide field">
              <button class="ui primary button" type="button" v-on:click="login()">Login</button>
            </div>       
         </div>
        </div>
    | </form>
 </div>
</template>

<script>
export default {
  name: 'Login',
   data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
 methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "bharat" && this.input.password == "Bharath") {                      
                        this.$router.replace({ name: "MyForm" });
                    } else {
                        alert('Please Enter valid Username & pasword')
                    }
                } else {
                      alert('Please Enter valid Username & pasword')
                }
            }
        }
    }
</script>
<style>
    #login {
        width: 500px;
       
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>