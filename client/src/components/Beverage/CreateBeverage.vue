<template>
    <div>
        <h1>Create Beverage</h1>
        <form v-on:submit.prevent="createBeverage">
            <p>name : <input type="text" v-model="beverage.Beveragename"></p>
            <p>brand : <input type="text" v-model="beverage.Beveragebrand"> </p>
            <p>price : <input type="text" v-model="beverage.Beverageprice"> </p>
            <p>category: <input type="text" v-model="beverage.Beveragecategory"> </p>
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
                Beveragename: '',
                Beveragebrand: '',
                Beverageprice: '',
                Beveragecategory: '',
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