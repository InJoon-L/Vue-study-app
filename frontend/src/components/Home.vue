<template>
    <div>
         <v-container fluid>
            <v-row>
                <v-col v-for="memo in memos" :key="memo.memoid" cols="4">
                    <router-link :to="'/memos/' + memo.memoid">
                    <v-card>
                        <!-- <v-img max-height="150" contain :src="book.cover" />
                        <v-divider></v-divider> -->
                        <v-card-title>
                            {{ memo.title }}
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-subtitle>{{ memo.savedTime }}</v-card-subtitle>
                    </v-card>
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
    name: "Home",
    data() {
        return {
            memos: [],
        }
    },
    mounted() {
        memoApi.getMemos()
        .then(res => {
            console.log(res)
            this.memos = res.data
        })
        .catch(() => {})
    }
}
</script>

<style>

</style>