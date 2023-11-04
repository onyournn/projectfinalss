<template>
    <div>
        <h1>Get Chair By Id</h1>
        <hr>
        <p>{{ chair.id }}</p>
        <p>{{ chair.ChairName }}</p>
        <p>{{ chair.ChairMaterial }}</p>
        <p>{{ chair.ChairColor }}</p>
        <p>{{ chair.ChairSize }}</p>
        <p>{{ chair.ChairPrice }}</p>
        <p>
            <button v-on:click="navigateTo('/chair/edit/'+chair.id)">Edit chair</button>
            <button v-on:click="navigateTo('/chairs')">กลับ</button>
        </p>
        <hr>
    </div>
</template>

<script>

import ChairService from '@/services/ChairService'

export default {

    data() {
        return {
            chair: ""
        }
    },

    methods: {
        navigateTo(route) {
            // ตรง$router ต้องตั้งให้ตรง folder ของ route
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let chairId = this.$route.params.chairId
            this.chair = (await ChairService.show(chairId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>