<template>
    <div>
        <form class="form" @submit.prevent>
            <h4>Создание поста</h4>
            <!-- "v-on:input" === "@"- for event listener -->
            <my-input
                v-focus
                v-model="post.title"
                type="text"
                placeholder="Название"
            />
            <my-input v-model="post.body" type="text" placeholder="Описание" />
            <my-button class="btn" type="submit" @click="createPost">
                Создать пост
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

.btn {
    margin-top: 15px;
    align-self: flex-end;
}
</style>
