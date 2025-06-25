<script setup lang="ts">
import { ref } from 'vue';
import { UiIcon } from '../ui';
import { IconTypeEnum } from '../ui/UiIcon/enums';

const model = defineModel();


</script>

<template>
    <div class="main-container">
        <div class="icon-container"><UiIcon :type="IconTypeEnum.SearchIcon"/></div>
        <input type="text" class="text-box" placeholder="Поиск" v-model="model">
    </div>
</template>

<style lang="scss" scoped>
.main-container{
    
    display: flex;
    min-width: 100%;
    height: auto;
    background-color: var(--backgroundSecondColor);
    border: solid 1px var(--strokeColor);
    border-radius: var( --strokeRadius);
}

.icon-container{
    user-select: none;
    display: flex;
    padding: 10px;
    border-radius: var( --strokeRadius);
}

.text-box{
    font-size: 20px;
    min-width: 94%;
    border-style: none;
    outline: none;
}
</style>