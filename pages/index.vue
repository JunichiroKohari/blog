<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="light-blue lighten-2"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="1000"
    >
      <v-container>
        <v-row
          justify="center"
        >
          <v-col
            cols="12"
            sm="11"
            md="10"
            xl="8"
          >
            <v-row v-if="posts.length">
              <v-col
                v-for="(post, i) in posts"
                :key="i"
                cols="12"
                sm="6"
                lg="4"
                xl="3"
              >
                <v-card
                  max-width="400"
                  class="mx-auto"
                >
                  <v-img
                    :src="setEyeCatch(post).url"
                    :alt="setEyeCatch(post).title"
                    :aspect-ratio="16/9"
                    max-height="200"
                    class="white--text"
                  >
                    <v-card-text>
                      <v-chip
                        small
                        dark
                        :color="categoryColor(post.fields.category)"
                        :to="linkTo('categories', post.fields.category)"
                        class="font-weight-bold"
                      >
                        {{ post.fields.category.fields.name }}
                      </v-chip>
                    </v-card-text>
                  </v-img>

                  <v-card-title>
                    <nuxt-link
                      :to="linkTo('posts', post)"
                    >
                      {{ post.fields.title }}
                    </nuxt-link>
                  </v-card-title>

                  <v-card-text>
                    {{ post.fields.publishDate }}
                    <span :is="draftChip(post)" />
                  </v-card-text>

                  <v-list-item three-line style="min-height: unset;">
                    <v-list-item-subtitle>
                      {{ post.fields.body }}
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-card-text>
                    <template v-if="post.fields.tags">
                      <v-chip
                        v-for="(tag) in post.fields.tags"
                        :key="tag.sys.id"
                        to="#"
                        small
                        label
                        outlined
                        class="ma-1"
                      >
                        <v-icon
                          left
                          size="18"
                          color="grey"
                        >
                          mdi-label
                        </v-icon>
                        {{ tag.fields.name }}
                      </v-chip>
                    </template>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      text
                      color="primary"
                      :to="linkTo('posts', post)"
                    >
                      この記事をみる
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <div v-else class="text-center">
              投稿された記事はありません。
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-card>

    
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