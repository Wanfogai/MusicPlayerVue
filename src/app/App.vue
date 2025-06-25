<script lang="ts" setup>
import { MusicCover, SearchBar,TrackCard,UiButton, UiIcon } from '@/components';
import { IconTypeEnum } from '@/components/ui/UiIcon/enums';
import { CoverSizeEnum } from '@/components/widget/MusicCover/enums';
import { ref } from 'vue';

const SearchSong = ref("");

const image = require("/src/app/assets/images/solid-color-image.jpeg")

</script>

<template>
<SearchBar v-model="SearchSong"></SearchBar>

<MusicCover :size="CoverSizeEnum.Big" :src="image"/>

 <UiButton v-for="types in IconTypeEnum">
    <UiIcon :type="types" />
 </UiButton>
</template>
