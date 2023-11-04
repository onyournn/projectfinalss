<template>
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col">
                            <h2>Beverage List</h2>
                            <div class="col-btn">
                                <a class="btn btn-secondary" v-on:click="navigateTo('beverage/create')"><i
                                        class="material-icons">&#xE147;</i> <span>Add New Beverage</span></a>

                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name <i class=""></i></th>
                            <th>brand</th>
                            <th>price <i class=""></i></th>
                            <th>category</th>
                        
                        </tr>
                    </thead>
                    <tbody>


                        <tr v-for="beverage in beverages" v-bind:key="beverage.id">
                            <td>{{ beverage.id }}</td>
                            <td>{{ beverage.name }}</td>
                            <td>{{ beverage.brand }}</td>
                            <td>{{ beverage.price }}</td>
                            <td>{{ beverage.category }}</td>
                            <td>
                                <a class="view" title="View" data-toggle="tooltip"
                                    v-on:click="navigateTo('beverage/' + beverage.id)"><i class="material-icons">&#xE417;</i> </a>

                                <a class="edit" title="Edit" data-toggle="tooltip"
                                    v-on:click="navigateTo('beverage/edit/'+beverage.id)"><i
                                        class="material-icons">&#xE254;</i> </a>

                                <a class="delete" title="Delete" data-toggle="tooltip" v-on:click="deleteBeverage(beverage)"><i
                                        class="material-icons">&#xE872;</i> </a>
                            </td>
                        </tr>


                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>

import BeverageService from '@/services/BeverageService'

export default {
    data() {
        return {
            beverages: ""
        }
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteBeverage(beverage) {
            let result = confirm("Want to delete beverage?")
            if (result) {
                try {
                    await BeverageService.delete(beverage)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
            console.log(beverage);
        },
        async refreshData() {
            this.beverages = (await BeverageService.index()).data
        }
    },

    async created() {
        this.beverages = (await BeverageService.index()).data
        console.log(this.beverages);
    }

}
</script>


<style scoped>

.view {
    cursor: pointer
}

.material-icons {
    cursor: pointer;
}

.col {
    background-color: #382c18;
    width: 100%;
    margin-bottom: 5px;
    padding: 20px;
}

h2 {
    color: rgb(205, 169, 92);
    font-size: 40px;
}

.btn {
    color: rgb(46, 38, 6);
}

.btn-secondary {
    position: absolute;
    background-color: rgb(249, 170, 0);
    right: 25px;
    bottom: 10px;
}
</style>
   