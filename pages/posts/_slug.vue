<template>
  <v-container fluid>
    <template v-if="currentPost">
      <v-row align="center" justify="center">
        <breadcrumbs :add-items="addBreads" />
      </v-row>
      <v-row align="center" justify="center">
          {{ currentPost.fields.title }}
          <v-img
            :src="currentPost.fields.image.fields.file.url"
            :alt="currentPost.fields.image.fields.title"
            :aspect-ratio="16/9"
            width="700"
            height="400"
            class="mx-auto"
          />
          {{currentPost.fields.publishDate}}
          {{ currentPost.fields.body }}
      </v-row>
    </template>
    <template v-else>
      お探しの記事は見つかりませんでした。
    </template>
  </v-container>
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