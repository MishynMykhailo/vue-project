<template>
    <div>
        <form class="form" @submit.prevent>
            <h4 class="title">Create post</h4>
            <my-input
                v-focus
                v-model="post.title"
                type="text"
                placeholder="Title"
            />
            <my-input
                v-model="post.body"
                type="text"
                placeholder="Description"
            />
            <my-button class="btn" type="submit" @click="createPost">
                Create
            </my-button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            },
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            };
        },
    },
    // Глубокое отслеживание - пример
    // watch: {
    //     post: {
    //         handler(newValue) {
    //             console.log(newValue);
    //         },
    //         deep: true,
    //     },
    // },
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}
.title {
    color: var(--dark-color);
}
.btn {
    margin-top: 15px;
    align-self: flex-end;
}
</style>
