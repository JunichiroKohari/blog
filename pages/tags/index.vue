<template>
  
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data: () => ({
    search: '',
    headers: [
      { text: 'タグ' },
      { text: '投稿数' }
    ]
  }),
  computed: {
    ...mapState(['tags']),
    ...mapGetters(['linkTo']),
    addBreads() {
      return [{ icon: 'mdi-tag-outline', text: 'タグ一覧', to: '/tags', disabled: true, iconColor: 'grey' }]
    },
    tableItems() {
      return []
    }
  }
}
</script>