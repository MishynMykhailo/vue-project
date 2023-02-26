<template>
    <div class="navbar">
        <div class="navbar__logo" @click="$router.push('/')">Vue3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/')">Home</my-button>
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')">About</my-button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
    background-color: var(--secondary-color);
    box-shadow: 2px 2px 4px rgba(133, 133, 133, 0.212);
    display: flex;
    align-items: center;
    padding: 15px 20px;
    justify-content: space-between;
}
.navbar__logo {
    cursor: pointer;
    transition: var(--main-transition);
    font-size: 20px;
    font-weight: 500;
    color: var(--dark-color);
}
.navbar__logo:hover {
    opacity: 0.5;
}
.navbar__btns > .btn:not(:last-child) {
    margin-right: 15px;
}
</style>
