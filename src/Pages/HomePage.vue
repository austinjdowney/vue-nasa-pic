<template>
    <div class="component container-fluid">
        <div class="row">
            <div class="col">
                <form @submit.prevent="search">
                    <label for="Nasa">DATE</label>
                    <input type="date" name="date" id="" placeholder="Date" v-model="state.query">
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Apod />
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue'
    import { nasasService } from '../services/NasasService'
    import Apod from '../components/ApodComponent'

    export default {
        name: 'HomePage',
        setup() {
            const state = reactive({
                query: ''
            })
            return {
                state,
                async search() {
                    try {
                        await nasasService.getNasas(state.query)
                        state.query = ''
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
        },
        components: {
            Apod,
        }
    }
</script>

<style lang="scss" scoped>

</style>