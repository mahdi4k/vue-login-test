<script>
export default {
    props: {
        labelTitle: String,
        placeholder: String,
        errorMessage: String,
        modelValue: String,
        id: String
    },
    emits: ["update:modelValue"],
}
</script>
<template>
    <div>
        <label :for="id">{{ labelTitle }}</label>
        <input required :value="modelValue"  v-on:input="$emit('update:modelValue', $event.target.value)"
            type="text" class="form-control" :id="id" :placeholder="placeholder">
        <div class="alert-error">{{ errorMessage }}</div>
    </div>
</template>