<template>
    <div>
        <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Create memo</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="title"
                              name="title"
                              label="title"
                              type="text"
                              v-model="title"
                           ></v-text-field>
                           <v-text-field
                              prepend-icon="content"
                              name="content"
                              label="content"
                              type="text"
                              v-model="content"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="file"
                              name="file"
                              label="file"
                              type="text"
                              @change="selectFile"
                              ref="file"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="addMemo">Save</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
        <!-- <input type="text" v-model="title"><br>
        <input type="text" v-model="content"><br>
        <input type="text" @change="selectFile" ref="file">
        <button @click="addMemo">Save</button> -->
    </div>
</template>

<script>
import memoApi from '../apis/memos'
export default {
    name: 'AddMemo',
    data() {
        return {
            title: '',
            content: '',
            file: ''
        }
    },
    methods: {
        selectFile() {
            this.file = this.$refs.file.files[0]
        },
        addMemo() {
            const data = new FormData();
            data.append('title', this.title);
            data.append('content', this.content);
            data.append('file', this.file);

            memoApi.addMemo(data)
            .then((res) => {
                console.log(res)
                this.$router.push('/')
            }).catch((err) => {
                console.log(err)
                this.$router.push('/')
            });
        }
    }
}
</script>

<style>

</style>