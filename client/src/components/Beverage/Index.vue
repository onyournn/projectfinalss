<template>
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col">
                            <h2>Chair <b>List</b></h2>
                            <div class="col-btn">
                                <a class="btn btn-secondary" v-on:click="navigateTo('chair/create')"><i
                                        class="material-icons">&#xE147;</i> <span>Add New Chair</span></a>

                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name <i class=""></i></th>
                            <th>Material</th>
                            <th>Color <i class=""></i></th>
                            <th>Size(W,l,h)</th>
                            <th>Price <i class=""></i></th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        <tr v-for="chair in chairs" v-bind:key="chair.id">
                            <td>{{ chair.id }}</td>
                            <td>{{ chair.ChairName }}</td>
                            <td>{{ chair.ChairMaterial }}</td>
                            <td>{{ chair.ChairColor }}</td>
                            <td>{{ chair.ChairSize }}</td>
                            <td>{{ chair.ChairPrice }}</td>
                            <td>
                                <a class="view" title="View" data-toggle="tooltip"
                                    v-on:click="navigateTo('chair/' + chair.id)"><i class="material-icons">&#xE417;</i> </a>

                                <a class="edit" title="Edit" data-toggle="tooltip"
                                    v-on:click="navigateTo('chair/edit/'+chair.id)"><i
                                        class="material-icons">&#xE254;</i> </a>

                                <a class="delete" title="Delete" data-toggle="tooltip" v-on:click="deleteChair(chair)"><i
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

import ChairService from '@/services/ChairService'

export default {
    data() {
        return {
            chairs: ""
        }
    },
    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deleteChair(chair) {
            let result = confirm("Want to delete chair?")
            if (result) {
                try {
                    await ChairService.delete(chair)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
            console.log(chair);
        },
        async refreshData() {
            this.chairs = (await ChairService.index()).data
        }
    },

    async created() {
        this.chairs = (await ChairService.index()).data
        console.log(this.chairs);
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
    background-color: #FFE4B5;
    width: 100%;
    margin-bottom: 5px;
    padding: 20px;
}

h2 {
    color: #CD5C5C;
    font-size: 40px;
}

.btn {
    color: aliceblue;
}

.btn-secondary {
    position: absolute;
    background-color: rgb(134, 213, 134);
    right: 25px;
    bottom: 10px;
}
</style>
   