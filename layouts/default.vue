<template>
  <v-app>
    <customHeader />
    <nuxt />
  </v-app>
</template>

<script>
import customHeader from '~/components/ui/custom-header'
export default {
  components: {
    customHeader
  }
}
</script>