<template>
    <li class="post">
        <div>
            <p><strong>Id:</strong>{{ post.id }}</p>
            <p><strong>Title:</strong>{{ post.title }}</p>
            <p><strong>Description:</strong>{{ post.body }}</p>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)"
                >Open</my-button
            >
            <my-button class="btn__delete" @click="$emit('remove', post)"
                >Delete</my-button
            >
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
.post__btns > button:not(:last-child) {
    margin-right: 5px;
}
.btn__delete {
    border: 1px solid rgb(212, 45, 45);
    background-color: rgb(212, 45, 45);
}
.btn__delete:hover {
    border-color: rgb(212, 45, 45);
    color: rgb(212, 45, 45);
}
</style>
