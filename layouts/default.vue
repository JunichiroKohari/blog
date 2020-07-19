<template>
  <v-app>
    <customHeader />
    <nuxt />
    <customFooter />
  </v-app>
</template>

<script>
import customHeader from '~/components/ui/custom-header'
import customFooter from '~/components/ui/custom-footer'

export default {
  components: {
    customHeader,
    customFooter,
  }
}
</script>