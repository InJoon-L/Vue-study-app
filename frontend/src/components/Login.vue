<template>
<div>
    <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Welcome</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="id"
                              label="Id"
                              type="text"
                              v-model="userid"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-btn color="primary" to="/register">Register</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
</div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            userid: this.userid,
            password: this.password
        }
    },
    methods: {
       login() {
         let value = {
            userid: this.userid,
            password: this.password
         }
         this.$store.dispatch('login', value)
         .then(() => {
            this.$router.push('/')
         })
         .catch(() => {
         })
       } 
    }

}
</script>
