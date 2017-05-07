<template>
    <div class="list-posts">
        <post-preview v-for="post in posts" :key="post.id" v-bind:post="post"></post-preview>

        <nav class="pagination">
            <router-link :to="previousRoute" class="pagination-previous" v-on:click.native="previousClick">Previous</router-link>
            <router-link :to="nextRoute" class="pagination-next" v-on:click.native="nextClick">Next</router-link>
        </nav>
    </div>
</template>

<script>
import PostPreview from './PreviewPost.vue'

export default{
  data () {
    return {
      currentPage: 1
    }
  },

  props: ['posts'],

  created () {
    if (this.$route.query.page > 1) {
      this.currentPage = parseInt(this.$route.query.page)
    }
  },

  computed: {
    previousRoute () {
      let route = {}

      route['name'] = this.$route.name

      if (this.currentPage > 1) {
        route['query'] = { page: this.currentPage - 1 }
      }

      return route
    },

    nextRoute () {
      let route = {}

      route['name'] = this.$route.name
      route['query'] = { page: this.currentPage + 1 }

      return route
    },

    previousClick () {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1
      }

      this.$parent.getPosts()
      window.scrollTo(0, 0)
    },

    nextClick () {
      this.currentPage = this.currentPage + 1

      this.$parent.getPosts()
      window.scrollTo(0, 0)
    }
  },

  components: {
    'post-preview': PostPreview
  }
}
</script>
