<template>
    <div id="search-form">
        <form v-on:submit.prevent="searchForTerm">
            <div class="field">
                <label class="label">Name</label>
                <p class="control">
                    <input class="input" type="text" placeholder="Search for keywords" v-model="term">
                </p>
            </div>

            <div class="field">
                <p class="control">
                    <button class="button is-primary">Search</button>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
export default{
  data () {
    return {
      term: ''
    }
  },

  props: ['defaultTerm'],

  created () {
    if (this.defaultTerm !== '') {
      this.term = this.defaultTerm
    }
  },

  methods: {
    searchForTerm () {
      if (this.term !== '') {
        this.$router.push({name: 'Search', params: {searchTerm: this.term}})
      }
    }
  }
}
</script>
