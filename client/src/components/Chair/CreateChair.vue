<template>
    <div>
        <h1>Create Chair</h1>
        <form v-on:submit.prevent="createChair">
            <p>Name : <input type="text" v-model="chair.ChairName"></p>
            <p>Material : <input type="text" v-model="chair.ChairMaterial"> </p>
            <p>Color : <input type="text" v-model="chair.ChairColor"> </p>
            <p>Size: <input type="text" v-model="chair.ChairSize"> </p>
            <p>Price : <input type="text" v-model="chair.ChairPrice"> </p>
            <p><button type="submit">Create chair</button></p>
        </form>
         <button v-on:click="navigateTo('/chairs')">กลับ</button>
        
        <hr>
    </div>
</template>
<script>

import ChairService from '@/services/ChairService'
export default {
    data() {
        return {
            chair: {
                ChairName: '',
                ChairMaterial: '',
                ChairColor: '',
                ChairSize: '',
                ChairPrice: '',
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route).catch(err => {})
        },
        async createChair() {
            try {
                await ChairService.post(this.chair)
                this.$router.push('/chairs')
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>