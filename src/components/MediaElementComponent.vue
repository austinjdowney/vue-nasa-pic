<template>
  <div class="media">
    <img
      src=""
      class=""
      alt=""
    >
    <div class="media-body">
      <h5 class="mt-1">
        {{ nasa.date }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaElement',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  setup () {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
