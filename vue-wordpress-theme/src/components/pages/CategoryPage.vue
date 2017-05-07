<template>
    <div id="category">
        <h2 class="title is-2">{{ category.name }}</h2>

        <list-posts v-bind:posts="posts"></list-posts>
    </div>
</template>

<script>
import axios from 'axios'
import ListPosts from '../global/ListPosts.vue'

export default{
  name: 'Category',
  data () {
    return {
      title: '',
      category: [],
      posts: []
    }
  },

  created () {
    this.getCategory()
  },

  methods: {
    getCategory () {
      var path = this.$route.path.split('/')
      axios.get(process.env.API_URL + '/wp-json/wp/v2/categories?slug=' + path[path.length - 1])
      .then(response => {
        this.category = response.data[0]

        if (this.category === undefined) {
          this.$router.push({name: 'NotFound'})
        }
        document.title = this.category.name
        this.getPosts()
      })
      .catch(e => {
        console.log(e)
      })
    },

    getPosts () {
      let postsUrl = process.env.API_URL + '/wp-json/wp/v2/posts?categories=' + this.category.id

      if (this.$route.query.page !== undefined) {
        postsUrl += '&page=' + this.$route.query.page
      }

      axios.get(postsUrl)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
      })
    }
  },

  components: {
    'list-posts': ListPosts
  }
}
</script>
