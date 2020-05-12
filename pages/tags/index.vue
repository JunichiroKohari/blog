<template>
  <div>
    <breadcrumbs :add-items="addBreads" />

    <v-container>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          sm="10"
          md="8"
        >
          <v-card>
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>

            <v-data-table
              :headers="headers"
              :items="tableItems"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
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