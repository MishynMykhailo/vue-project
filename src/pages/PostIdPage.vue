<template>
    <div v-if="this.post">
        <ul v-for="elem in this.post" v-bind:key="elem.id">
            <li class="post__container">
                <p><b>Id:</b>{{ elem.id }}</p>
                <p><b> Title: </b>{{ elem.title }}</p>
                <p><b> Description: </b>{{ elem.body }}</p>
            </li>
        </ul>
    </div>
    <div v-else>Not found info</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            post: null,
        };
    },
    methods: {
        async findPost() {
            const result = await this.posts.filter((p) => {
                console.log(p.id == this.$route.params.id);
                return p.id == this.$route.params.id;
            });
            this.post = result;
        },
    },
    mounted() {
        this.findPost();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
        }),
    },
};
</script>

<style scoped>
.post__container {
    color: var(--dark-color);
}
.post__container > p:not(:last-child) {
    margin-bottom: 10px;
}
</style>
