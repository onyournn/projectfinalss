<template>
    <div>
        <h1>Get Beverage By Id</h1>
        <hr>
        <p>ID : {{ beverage.id }}</p>
        <p>ชื่อเครื่องดื่ม : {{ beverage.name }}</p>
        <p>ยี่ห้อ : {{ beverage.brand }}</p>
        <p>ราคา : {{ beverage.price }} บาท</p>
        <p>หมวดหมู่ : {{ beverage.category }}</p>
        <p>
            <button v-on:click="navigateTo('/beverage/edit/'+beverage.id)" class="btn">Edit beverage</button>
            <button v-on:click="navigateTo('/beverages')">back</button>
        </p>
        <hr>
    </div>
</template>

<script>

import BeverageService from '@/services/BeverageService'

export default {

    data() {
        return {
            beverage: ""
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
            let beverageId = this.$route.params.beverageId
            this.beverage = (await BeverageService.show(beverageId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>

<style scoped></style>