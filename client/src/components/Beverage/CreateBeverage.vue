<template>
    <div>
        <div class="BgColor">
            <div class="container-xl">
                <h1>Create Beverage</h1>
                <hr>
                <form v-on:submit.prevent="createBeverage">
                    <p>name : <input type="text" v-model="beverage.name"></p>
                    <p>brand : <input type="text" v-model="beverage.brand"> </p>
                    <p>price : <input type="text" v-model="beverage.price"> bath</p>
                    <p>category : <input type="text" v-model="beverage.category"> </p>
                    <!-- <p><button type="submit"></button>Create beverage</p>  -->
                    <button type="submit" class="btn">Create beverage</button>
                </form>
                <br>
                <button v-on:click="navigateTo('/beverages')">back</button>

                <hr>
            </div>
        </div>
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
            this.$router.push(route).catch(err => { })
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







