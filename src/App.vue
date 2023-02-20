<template>
  <div class="app">
    <!-- "v-bind" === ":" -->
    <PostForm @create="createPost" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          body: "Описание",
        },
        {
          id: 2,
          title: "JavaScript2",
          body: "Описание2",
        },
        {
          id: 3,
          title: "JavaScript3",
          body: "Описание3",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
