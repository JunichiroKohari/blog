<template>
<div class="contents-wrapper">
  <div class="contents">
    <template v-if="posts.length">
      <a v-for="(post, i) in posts" :key="i" class="article-box">
        <h3 class="article-title">{{ post.fields.title }}</h3>
        <img :src="post.fields.image.fields.file.url" :alt="post.fields.image.fields.title" class="subnail">
        <time :datetime="post.fields.publishDate" class="publishDate">{{ post.fields.publishDate }}</time>
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
    // categoryColor() {
    //   return (category) => {
    //     switch (category.fields.name) {
    //       case 'programming': return '#C73A31'
    //       case 'eating': return '#236244'
    //       case 'training': return 'primary'
    //       default: return 'grey darken-3'
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
.contents-wrapper {
  background: #8ecdf5;
}
.contents {
  position: relative;
  margin: 20%;
  margin-top: 4.5rem;
  border-radius: 2em;
  background: floralwhite;
}
.article-box {
  position: relative;
  display: block;
  width: 290px;
  height: 250px;
  transition: opacity 0.5s;
}
.article-box:hover {
  opacity: 0.8;
}
.article-title {
  position: absolute;;
  bottom: 24px;
}
.subnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
}
.publishDate {
  position: absolute;
  bottom: 0;
}
</style>