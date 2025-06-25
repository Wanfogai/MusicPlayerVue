<script lang="ts" setup>
import { CategoryPanel, MusicCover, RecommendedPanel, SearchBar,TrackCard,UiButton, UiIcon } from '@/components';
import { IconTypeEnum } from '@/components/ui/UiIcon/enums';
import { CoverSizeEnum } from '@/components/widget/MusicCover/enums';
import { TrackModel } from '@/components/widget/TrackCard/models';
import { ref } from 'vue';

const SearchSong = ref("");

const image = require(".//assets/images/images.jpg");

</script>

<template>
<SearchBar v-model="SearchSong"></SearchBar>

<RecommendedPanel/>

<CategoryPanel/>
</template>
