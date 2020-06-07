<template>
  <v-app>
    <customHeader />
    <nuxt />
    <menuBtn />
  </v-app>
</template>

<script>
import customHeader from '~/components/ui/custom-header'
import menuBtn from '~/components/ui/menu-btn'

export default {
  components: {
    customHeader,
    menuBtn
  }
}
</script>