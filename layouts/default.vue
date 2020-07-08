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
import customFooter from '~/components/ui/custom-footer'

export default {
  components: {
    customHeader,
    customFooter,
    menuBtn
  }
}
</script>