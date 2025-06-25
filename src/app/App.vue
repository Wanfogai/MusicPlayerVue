<script lang="ts" setup>
import { MusicCover, SearchBar,TrackCard,UiButton, UiIcon } from '@/components';
import { IconTypeEnum } from '@/components/ui/UiIcon/enums';
import { CoverSizeEnum } from '@/components/widget/MusicCover/enums';
import { TrackModel } from '@/components/widget/TrackCard/models';
import { ref } from 'vue';

const SearchSong = ref("");

const image = require(".//assets/images/images.jpg");

</script>

<template>
<SearchBar v-model="SearchSong"></SearchBar>

<MusicCover :size="CoverSizeEnum.Big" :src="image"/>

<TrackCard :track-data="new TrackModel(image,'Ascent','Sonic Journey')" :coverSize="CoverSizeEnum.Big"/>

 <UiButton v-for="types in IconTypeEnum">
    <UiIcon :type="types" />
 </UiButton>
</template>
