<template>
  <div>
    <h3>Список пользователей</h3>
  </div>
  <PostItem
    v-bind:post="post"
    v-for="post in posts"
    :key="post.id"
    @remove="console.log(e)"
  />
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
