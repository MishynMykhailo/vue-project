<template>
    <li class="post">
        <div>
            <p><strong>id:</strong>{{ post.id }}</p>
            <p><strong>Название:</strong>{{ post.title }}</p>
            <p><strong>Описание:</strong>{{ post.body }}</p>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)"
                >Открыть</my-button
            >
            <my-button @click="$emit('remove', post)">Удалить</my-button>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>
