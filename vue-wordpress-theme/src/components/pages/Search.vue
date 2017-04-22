<template>
    <div id="search">
        <h2 class="title is-2">Search results for: {{ searchTerm }}</h2>

        <search-form v-bind:defaultTerm="searchTerm"></search-form>
        <list-posts v-bind:posts="posts"></list-posts>
    </div>
</template>

<script>
import axios from 'axios'
import ListPosts from '../global/ListPosts.vue'
import SearchForm from '../forms/Search.vue'

export default {
  name: 'Search',
  data () {
    return {
      searchTerm: '',
      posts: []
    }
  },

  created () {
    this.getPosts()
  },

  methods: {
    getPosts () {
      if (this.$route.name === 'Search') {
        this.searchTerm = this.$route.params.searchTerm
        axios.get(process.env.API_URL + '/wp-json/wp/v2/posts?search=' + this.searchTerm)
        .then(response => {
          this.posts = response.data
          document.title = 'Search results for: ' + this.searchTerm
        })
        .catch(e => {
          console.log(e)
        })
      }

      if (this.$route.name === 'SearchDate') {
        var startDate = new Date()
        startDate.setYear(this.$route.query.year)
        startDate.setMonth(this.$route.query.month)
        startDate.setDate(1)

        var endDate = new Date()
        endDate.setYear(this.$route.query.year)
        endDate.setMonth(this.$route.query.month)
        endDate.setDate(32)

        axios.get(process.env.API_URL + '/wp-json/wp/v2/posts?after=' + startDate.toISOString() + '&before=' + endDate.toISOString())
        .then(response => {
          this.posts = response.data
          document.title = 'Search results for: ' + this.$route.query.year + '/' + this.$route.query.month
        })
        .catch(e => {
          console.log(e)
        })
      }
    }
  },

  components: {
    'list-posts': ListPosts,
    'search-form': SearchForm
  }
}
</script>
