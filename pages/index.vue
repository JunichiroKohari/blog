<template>

</template>

<script>
import client from '~/plugins/contentful'
import { mapState, mapGetters } from 'vuex'
import draftChip from '~/components/posts/draftChip'

export default {
  async asyncData({ env }) {
    let posts = []
    await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-fields.publishDate'
    }).then(res => (posts = res.items)).catch(console.error)
    return { posts }
  },
  components: {
    draftChip
  },
  computed: {
    ...mapState(['posts']),  
    ...mapGetters(['setEyeCatch', 'draftChip', 'linkTo']),
    categoryColor() {
      return (category) => {
        switch (category.fields.name) {
          case 'programming': return '#C73A31'
          case 'eating': return '#236244'
          case 'training': return 'primary'
          default: return 'grey darken-3'
        }
      }
    }
  }
}
</script>