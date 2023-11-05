<template>
    <div>
        <div class="BgColor">
            <h1>Get Beverage By Id</h1>
            <hr>
            <p>ID : {{ beverage.id }}</p>
            <p>name : {{ beverage.name }}</p>
            <p>brand : {{ beverage.brand }}</p>
            <p>price : {{ beverage.price }} bath</p>
            <p>category : {{ beverage.category }}</p>
            <p>
                <button v-on:click="navigateTo('/beverage/edit/' + beverage.id)" class="btn">Edit beverage</button>
            </p>
            <button v-on:click="navigateTo('/beverages')">back</button>
            <hr>
        </div>
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

<style scoped>
.BgColor {
    background-color: rgb(248, 245, 240);
    padding: 50px;
    height: 100vh;
}

h1 {
    color: #3f312d;
    margin-bottom: 10px;
    font-size: 50px;
    padding: 5px;
    font-weight: bold;
}
</style>