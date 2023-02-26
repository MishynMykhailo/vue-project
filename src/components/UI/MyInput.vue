<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    font-size: 14px;
    outline: none;
    width: 100%;
    border: 1px solid var(--dark-color);
    border-radius: 5px;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>
