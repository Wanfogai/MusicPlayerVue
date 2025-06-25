<script lang="ts" setup>
import { reactive } from 'vue';

const props = defineProps({
    active:{type: Boolean, default: true},
    routeTo:{type: String, default: '#'},
    background:{type: String, default: '#202020'},
    strokeColor:{type: String, default: '#333333'}
})

const buttonStyle = reactive(({
    bacground:props.background,
    border:'solid 1px ' + props.strokeColor,
    cursor:'pointer'
}))

const emit = defineEmits<{
    /**Клик*/
    click: [event: MouseEvent]
}>()

</script>
<template>
    <div :style="buttonStyle" class="button-container" 
                @click="emit('click',$event)">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
</style>