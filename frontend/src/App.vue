<template>
  <v-app>
    {{ a() }}
    <v-app-bar
      app
      color="primary"
      dark>
      <v-btn to="/" text>
        <h1>Memos</h1>
      </v-btn>
      <v-btn to="/add" text>
        <v-icon>mdi-book</v-icon>
        <span class="mr-2">Add Memo</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/login" text v-if="flag">
        <v-icon>mdi-login</v-icon>
        <span class="mr-2">Login</span>
      </v-btn>
      
      <v-btn @click="logout" text v-else>
        <v-icon>mdi-logout</v-icon>
        <span class="mr-2">logout</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    flag: null
  }),
  methods: {
    logout() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/');
      })
      .catch(() => {})
    },
    a() {
      if (this.$store.state.accessToken) {
      this.flag = false;
    } else {
      this.flag = true;
    }

    console.log(this.flag);
    }
  }

};
</script>
