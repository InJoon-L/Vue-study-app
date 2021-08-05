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
                              prepend-icon="name"
                              name="name"
                              label="name"
                              type="text"
                              v-model="name"
                           ></v-text-field>
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
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="register">Register</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Register",
    data() {
        return {
            name: '',
            userid: '',
            password: ''
        }
    },
    methods: {
         register() {
            let value = {
               name: this.name,
               userid: this.userid,
               password: this.password
            }
            axios.post('/api/users', value)
            .then(res => {
               console.log(res);
               this.$router.push('/login');
            })
            .catch(err => {
               console.log(err)
            })
         }
    }
}
</script>

<style>

</style>