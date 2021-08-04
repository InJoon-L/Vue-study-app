<template>
    <div>
        <p>{{ err_msg }}</p>
        <v-container fluid>
            <v-row>
                <v-col v-for="book in books" :key="book.bookId" cols="3">
                    <v-card>
                        <v-img max-height="150" contain :src="book.cover" />
                        <v-divider></v-divider>
                        <v-card-title>
                            <router-link :to="'/books/' + book.bookId">{{ book.title }}</router-link>
                        </v-card-title>
                        <v-card-subtitle>{{ book.author }}</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <div class="text-center">
            <v-pagination
                v-model="page"
                :length="6"
            ></v-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    data() {
        return {
            books: [],
            err_msg: '',
            page: 1,
        }
    },
    mounted() {
        axios.get('/api/books')
        .then(res => {
            console.log(res.data)
            this.books = res.data
        })
        .catch(err => {
            this.err_msg = err.err_msg
        })
    }
}
</script>

<style>

</style>