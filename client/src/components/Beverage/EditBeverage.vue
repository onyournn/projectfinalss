<template>
    <div>
        <h1>Edit Beverage</h1>
        <form v-on:submit.prevent="editBeverage">
            <p>name : <input type="text" v-model="beverage.name"></p>
            <p>brand : <input type="text" v-model="beverage.brand"> </p>
            <p>price : <input type="text" v-model="beverage.price"> </p>
            <p>category: <input type="text" v-model="beverage.category"> </p>
            <p><button type="submit" class="btn">Edit beverage</button></p>
        </form>
         <button v-on:click="navigateTo('/beverages')">back</button>
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
      this.$router.push(route)
    },

    async editBeverage() {
      try {
        await BeverageService.put(this.beverage)
        this.$router.push({ name: 'beverages' })
      } catch (err) {
        console.log(err)
      }
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