<template>
    <div>
        <h1>Edit Beverage</h1>
        <form v-on:submit.prevent="editBeverage">
            <p>name : <input type="text" v-model="beverages.Beveragename"></p>
            <p>brand : <input type="text" v-model="beverages.Beveragebrand"> </p>
            <p>price : <input type="text" v-model="beverages.Beverageprice"> </p>
            <p>category: <input type="text" v-model="beverages.Beveragecategory"> </p>
            <p><button type="submit">Edit beverage</button></p>
        </form>
         <button v-on:click="navigateTo('/beverages')">กลับ</button>
        <hr>
        <div>
            <p>name: {{ beverages.Beveragename }}</p>
            <p>brand: {{ beverages.Beveragebrand }}</p>
            <p>price: {{ beverages.Beverageprice }}</p>
            <p>category: {{ beverages.Beveragecategory }}</p>
            <p></p>
        </div>
    </div>
</template>
<script>
import BeverageService from '@/services/BeverageService'
export default {
    data() {
        return {
            beverages: {
                Beveragename: '',
                Beveragebrand: '',
                Beverageprice: '',
                Beveragecategory: '',
            }
        }
    },
    methods: {
        async editBeverage() {
            try {
                await BeverageService.put(this.beverage)
                this.$router.push({
                    name: 'beverages'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let beverageId = this.$route.params.beverageId
            this.beverages = (await BeverageService.show(beverageId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>

<style scoped></style>