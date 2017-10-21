<template>
    <div class="container">
        <div class="row mt-3">
            <div class="card-columns">
                <div class="card" v-for="store in stories">
                    <img class="card-img-top" v-bind:src="fetchMedia(store.multimedia,'url')" v-bind:alt="fetchMedia(store.multimedia,'caption')">
                    <div class="card-body">
                        <h4 class="card-title">{{ store.title }}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{{ store.byline }}</h6>
                        <p class="card-text">{{ store.abstract }}</p>
                        <a :href="store.url" class="card-link">Read</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            section: this.$route.params.section,
            stories: []
        }
    },
    watch: {
        '$route': 'fetchItems'
    },
    methods: {
        fetchItems() {
            this.section = this.$route.params.section
            this.stories = []

            fetch(`http://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=fe593fe8976544e38796d28d30fcf601`)
                .then(response => response.json())
                .then(json => this.stories = json.results)
        },
        fetchMedia(multimedia, field) {
            return _.get( _.find(multimedia, ['format', 'superJumbo']), field)
        }
    }
}
</script>