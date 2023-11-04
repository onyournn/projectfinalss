<template>
    <div>
        <h1>Create Beverage</h1>
        <form v-on:submit.prevent="createBeverage">
            <p>name : <input type="text" v-model="beverage.name"></p>
            <p>brand : <input type="text" v-model="beverage.brand"> </p>
            <p>price : <input type="text" v-model="beverage.price"> </p>
            <p>category: <input type="text" v-model="beverage.category"> </p>
            <p><button type="submit">Create beverage</button></p>
        </form>
         <button v-on:click="navigateTo('/beverages')">กลับ</button>
        
        <hr>
    </div>
</template>
<script>

import BeverageService from '@/services/BeverageService'
export default {
    data() {
        return {
            beverage: {
                name: '',
                brand: '',
                price: '',
                category: '',
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route).catch(err => {})
        },
        async createBeverage() {
            try {
                await BeverageService.post(this.beverage)
                this.$router.push('/Beverages')
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>