<template>
<div class="contents-wrapper">
  <div class="contents">
    <span>hello, guys</span>
  </div>
</div>
</template>

<script>
import client from '~/plugins/contentful'
import { mapState, mapGetters } from 'vuex'
import blogCard from '~/components/ui/blog-card'
import contributionGraph from '~/components/ui/contribution-graph'
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
    blogCard,
    contributionGraph,
    draftChip,
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

<style lang="scss">
.contents-wrapper {
  background: #8ecdf5;
}
.contents {
  height: 81vh;
  margin: 10%;
  margin-top: 5.8rem;
  border-radius: 2em;
  background: floralwhite;
}
.contents:before {
  content: '';
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  right: 2px;
  bottom: 2px;
  border-left: 20px solid floralwhite;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transform: rotate(45deg);
}

@media screen and (max-width: 768px) {
    .contents {
      height: 85vh;
      margin-top: 3.5rem;
    }
}
</style>