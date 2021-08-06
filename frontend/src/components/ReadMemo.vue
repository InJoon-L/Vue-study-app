<template>
    <div>
        <h1>read</h1>
    </div>
</template>

<script>
import memoApi from '../apis/memos'

export default {
    name: 'ReadMemo',
    data() {
        return {
            memo: {}
        }
    },
    mounted() {
        memoApi.getMemo(this.$route.params.memoId)
        .then(res => {
            this.memo = res.data
            console.log(this.memo)
        })
        .catch(()=>{})
    }
}
</script>

<style>

</style>