<template>
    <div v-if="posts.length > 0">
        <h3>Список пользователей</h3>
        <TransitionGroup name="post-list" tag="ul">
            <PostItem
                :post="post"
                v-for="post in posts"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </TransitionGroup>
    </div>
    <div v-else>
        <h2 style="color: red">Список постов пуст</h2>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
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

<style scoped>
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.post-list-move {
    transition: transform 0.4s ease;
}
</style>
