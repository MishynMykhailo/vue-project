<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
};
</script>

<style scoped>
.btn {
    font-size: 14px;
    padding: 15px;
    background: none;
    color: var(--primary-color);
    background-color: var(--dark-color);
    border: 1px solid var(--dark-color);
    font-family: inherit;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--main-transition);
}
.btn:hover {
    color: var(--dark-color);
    border: 1px solid var(--dark-color);
    background-color: var(--primary-color);
}
</style>
