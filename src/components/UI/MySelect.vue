<template>
    <select class="select" :value="modelValue" @change="changeOption">
        <option disabled value="">Select from list</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style scoped>
.select {
    border-color: var(--dark-color);
    border-radius: 5px;
    font-size: 14px;
    background-color: var(--secondary-color);
    color: var(--dark-color);
    outline: none;
}

.select::selection {
    background-color: var(--dark-color);
}
</style>
