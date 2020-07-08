<template>
<div class="contents-wrapper">
  <div class="contents">
    <template v-if="posts.length">
      <div v-for="(post, i) in posts" :key="i" class="article-box">
          <nuxt-link :to="linkTo('posts', post)" class="article-link"></nuxt-link>
          <h3 class="article-title">{{ post.fields.title }}</h3>
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
  },
  mounted() {
    this.$nextTick(() => {
      console.log('hello!');
      $('article-box').each(function(index, element){
        var w = $(element).width()
        $('.contents').append('<div style="height:0; width:'+ w +'px; margin:0;"></div>')
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 4.5rem 10% 13rem 10%;
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
  padding-left: .7em;
  border-radius: 5px;
  background: #d6efff;
  box-shadow:4px 4px 6px -2px #b2b2b2;
  transition: opacity 0.5s;
  &:hover {
  opacity: 0.7;
  }
}

.article-title {
  position: absolute;;
  bottom: 26px;
  width: 290px;
  color: #170de7;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: .04em;
  font-feature-settings: "palt" 1;
  -webkit-font-feature-settings: "palt" 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.subnail {
  position: absolute;
  top: 7px;
  left: 7.4px;
  width: 95%;
  height: 75%;
}
.publishDate {
  position: absolute;
  bottom: 4px;
  font-size: 13px;
}
.article-link {
  display: block;
  position: absolute;
  top: 0; bottom: 0;
  right: 0; left: 0;
  z-index: 1;
}
@media screen and (max-width: 768px) {
    .contents {
      margin-top: 3.5em;
    }
}
</style>