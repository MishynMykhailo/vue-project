<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/')">Главная</my-button>
            <my-button @click="$router.push('/posts')">Посты</my-button>
            <my-button @click="$router.push('/about')">О сайте</my-button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
}
.navbar__btns > .btn:not(:last-child) {
    margin-right: 15px;
}
</style>
