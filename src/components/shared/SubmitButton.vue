<script setup>
const props = defineProps(['loading', 'title'])
import LoadingSvg from '../svg/LoadingSvg.vue';

</script>
<template>
    <div class="d-flex">
        <button class="submit-button" type="submit">
            <LoadingSvg v-if="props.loading" />
            <span v-else>{{ props.title }}</span>
        </button>
    </div>
</template>