<template>
    <NavBar />
    <div class="app">
        <RouterView></RouterView>
    </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';

export default { components: { NavBar } };
</script>

<style>
:root {
    --primary-color: #f2f8f7;
    --secondary-color: #e8f3f3;
    --dark-color: #00aaa1;
    --main-transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
html {
    height: 100%;
    background-color: var(--primary-color);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
}
li {
    list-style: none;
}
.app {
    padding: 20px;
}
</style>
