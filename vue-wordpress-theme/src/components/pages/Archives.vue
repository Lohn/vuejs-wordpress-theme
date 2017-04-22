<template>
    <div id="archives-page">
        <h2 class="title is-2">Post Archives</h2>

        <ul class="list-archives">
            <li v-for="archive in archives">
                <router-link :to="{ path:'search-date', query: {year: archive.year, month: archive.month} }">{{ archive.year }}/{{ archive.month }} Posts ({{ archive.posts }})</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import axios from 'axios'

export default{
  data () {
    return {
      archives: []
    }
  },

  created () {
    this.getArchives()
  },

  methods: {
    getArchives () {
      axios.get(process.env.API_URL + '/wp-json/wp/v2/posts/archives')
      .then(response => {
        this.archives = response.data
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
