<template>
    <div id="author">
        <h2 class="title is-2">{{ author.name }} Posts</h2>

        <p>{{ author.description }}</p>

        <list-posts v-bind:posts="posts"></list-posts>
    </div>
</template>

<script>
import axios from 'axios'
import ListPosts from '../global/ListPosts.vue'

export default{
  name: 'Author',
  data () {
    return {
      posts: [],
      author: []
    }
  },

  created () {
    this.getAuthor()
    this.getPosts()
  },

  methods: {
    getPosts () {
      var path = this.$route.path.split('/')
      axios.get(process.env.API_URL + '/wp-json/wp/v2/posts?author=' + path[path.length - 1])
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
      })
    },

    getAuthor () {
      var path = this.$route.path.split('/')
      axios.get(process.env.API_URL + '/wp-json/wp/v2/users/' + path[path.length - 1])
      .then(response => {
        this.author = response.data

        if (this.author === undefined) {
          this.$router.push({name: 'NotFound'})
        }

        document.title = this.author.name + ' Posts'
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
