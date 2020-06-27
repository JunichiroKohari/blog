<template>
<div class="contents-wrapper">
  <div class="contents">
    <template v-if="posts.length">
      <div v-for="(post, i) in posts" :key="i" class="article-box">
        <nuxt-link :to="linkTo('posts', post)"><h3 class="article-title">{{ post.fields.title }}</h3></nuxt-link>
        <img :src="post.fields.image.fields.file.url" :alt="post.fields.image.fields.title" class="subnail">
        <time :datetime="post.fields.publishDate" class="publishDate">{{ post.fields.publishDate.substring(0, 10) }}</time>
      </div>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 10%;
  margin-top: 4.5rem;
  padding: 2em;
  border-radius: 2em;
  background: floralwhite;
}
.article-box {
  position: relative;
  display: block;
  width: 290px;
  height: 250px;
  margin: .6em;
  background: #d6efff;
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
@media screen and (max-width: 768px) {
    .contents {
      margin-top: 3.5em;
    }
}
</style>