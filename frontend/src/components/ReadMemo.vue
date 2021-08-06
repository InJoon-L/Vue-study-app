<template>
    <div>
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-card>
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>{{ memo.title }}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                v-model="content"
                                disabled
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="userid"
                                disabled
                            >
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="deleteMemo">Delete</v-btn>
                        </v-card-actions>

                    </v-card>
                    

                </v-layout>
            </v-container>

        </v-main>
    </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
    name: 'ReadMemo',
    data() {
        return {
            memo: {},
            content: '',
            userid: ''
        }
    },
    mounted() {
        memoApi.getMemo(this.$route.params.memoId)
        .then(res => {
            this.memo = res.data
            this.content = this.memo.content
            this.userid = this.memo.userid
            console.log(this.memo)
        })
        .catch(()=>{})
    },
    methods: {
        deleteMemo() {
            memoApi.deleteMemo(this.$route.params.memoId)
            .then(res => {
                this.$router.push('/')
                console.log(res)
            })
            .catch(() => {})
        }
    }
}
</script>

<style>

</style>