<template>
<div class="contents-wrapper">
  <div class="contents">
    <article class="article">
      <h2 class="article-title">{{ currentPost.fields.title }}</h2>
      <time class="publishDate">{{ currentPost.fields.publishDate }}</time><br>
      <section class="article-body">
        {{ currentPost.fields.body }}
      </section>
    </article>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['setEyeCatch', 'linkTo']),
    addBreads() {
      return [
        {
          icon: 'mdi-folder-outline',
          text: this.category.fields.name,
          to: this.linkTo('categories', this.category)
        }
      ]
    }
  },
  async asyncData({ payload, store, params, error }) {
    const currentPost = payload || await store.state.posts.find(post => post.fields.slug === params.slug)

    if (currentPost) {
      return {
        currentPost,
        category: currentPost.fields.category
      }
    } else {
      return error({ statusCode: 400 })
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-wrapper {
  background: #8ecdf5;
}
.contents {
  position: relative;
  margin: 20%;
  margin-top: 4.5rem;
  padding: 2em;
  border-radius: 2em;
  background: floralwhite;
}
</style>