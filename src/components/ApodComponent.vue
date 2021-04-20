<template>
    <div class="">
        <!-- NOTE to pass prop data to a child component it is passed as a bound attribute -->
        <MediaElement v-for="nasa in state.apod" :key="nasa.date" :nasa="nasa" @click="setActive(nasa)" />
    </div>
</template>

<script>
    import { computed, reactive } from 'vue'
    import { AppState } from '../AppState'
    import { nasasService } from '../services/NasasService'
    import MediaElement from './MediaElementComponent'

    export default {
        name: 'apod',
        setup() {
            const state = reactive({
                apod: computed(() => AppState.apod)
            })
            return {
                state
            }
        },
        components: {
            MediaElement
        }
    }
</script>

<style lang="scss" scoped>

</style>