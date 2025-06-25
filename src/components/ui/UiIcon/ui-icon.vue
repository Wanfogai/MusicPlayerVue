<script setup lang="ts">
import { PropType } from 'vue';
import { IconTypeEnum } from './enums';

const props = defineProps({
    type: {type: String as PropType<IconTypeEnum>,required: true}
})

const icon = require('@/app/assets/icons/' + props.type + '.svg')

</script>
<template>
    <img :src="icon" alt="icon">
</template>

<style lang="scss" scoped>
img{
    background-color: transparent;
}
</style>