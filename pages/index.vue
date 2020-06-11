<template>
<div class="contents-wrapper">
  <div class="contents">
    <template v-if="posts.length">
      <span>hello, guys</span>
      <a v-for="(post, i) in posts" :key="i">
        <img :src="post.fields.image.fields.file.url" :alt="post.fields.image.fields.title" width="300px" height="200px">
      </a>
    </template>
    <template v-else>
      <span>お探しの記事はありません。</span>
    </template>
  </div>
</div>
</template>

<script>
import client from '~/plugins/contentful'
import { mapState, mapGetters } from 'vuex'
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
  position: relative;
  height: 81vh;
  margin: 10%;
  margin-top: 5.8rem;
  border-radius: 2em;
  background: floralwhite;
}
.menu-bubble::before, .menu-bubble::after {
  position: absolute;
  content: '';
}
.menu-bubble::before {
  bottom: .25em; right: 0;
  border: solid 0 transparent;
  border-right: solid 14.5em floralwhite;
  width: 0; height: 1em;
  transform: rotate(10deg) skewX(80deg);
}
@media screen and (max-width: 1199px) {
    .menu-bubble::before {
      right: 3em;
    }
}
@media screen and (max-width: 768px) {
    .menu-bubble {
      height: 85vh;
      margin-top: 3.5rem;
    }
    .menu-bubble::before {
      right: 5em;
    }
}
@media screen and (max-width: 449px) {
    .menu-bubble::before {
      height: 0.8em;
      border-right: solid 8.5em floralwhite;
      transform: rotate(10deg) skewX(70deg);
    }
}
</style>