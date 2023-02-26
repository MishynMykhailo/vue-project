<template>
    <div>
        <h1 class="title">Page with posts</h1>
        <my-input
            class="findInput"
            v-focus
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Find..."
        />
        <div class="app__btns">
            <my-button @click="showDialog"> Create Post </my-button>
            <my-select
                :model-value="selectedSort"
                :options="sortOptions"
                @update:model-value="setSelectedSort"
            />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <PostForm @create="createPost" />
        </my-dialog>
        <PostList
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div class="loading" v-else>Идет загрузка...</div>
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            dialogVisible: false,
        };
    },
    components: {
        PostForm,
        PostList,
    },
    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
            removePost: 'post/removePost',
        }),
        ...mapActions({
            fetchPosts: 'post/fetchPosts',
            loadMorePosts: 'post/loadMorePosts',
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },

        showDialog() {
            this.dialogVisible = true;
        },
    },
    mounted() {
        if (this.posts.length > 0) {
            return;
        }
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            isPostsLoading: (state) => state.post.isPostsLoading,
            selectedSort: (state) => state.post.selectedSort,
            searchQuery: (state) => state.post.searchQuery,
            page: (state) => state.post.page,
            limit: (state) => state.post.limit,
            totalPages: (state) => state.post.totalPages,
            sortOptions: (state) => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
        }),
    },
};
</script>

<style>
.title {
    color: var(--dark-color);
}

.loading {
    color: var(--dark-color);
}
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
.observer {
    height: 30px;
}
</style>
