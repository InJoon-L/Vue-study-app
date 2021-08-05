<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-btn to="/" text>
        <h1>Books</h1>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/auth/login" text>
        <v-icon>mdi-login</v-icon>
        <span class="mr-2">Login</span>
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
    //
  }),
};
</script>
