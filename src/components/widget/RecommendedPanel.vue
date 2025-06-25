<script setup lang="ts">
import { ref } from 'vue';
import { TrackCard } from '@/components/widget';
import { recommendsMock } from '@/data';
import { TrackModel } from './TrackCard/models';
import { CoverSizeEnum } from './MusicCover/enums';

const stringer = ref("")


</script>

<template>
    <div class="recommend-container">
        <span class="panel-name">Рекомендации</span>
        <div class="main-recommend">
            <TrackCard :track-data="new TrackModel(recommendsMock[0].cover,recommendsMock[0].title,recommendsMock[0].author)" 
            :cover-size="CoverSizeEnum.Big">
            </TrackCard></div>
        <div class="recommends-container">
            <TrackCard v-for="track in recommendsMock.slice(1)" :track-data="new TrackModel(track.cover,track.author,track.title)" :cover-size="CoverSizeEnum.Normal"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.recommend-container{
    display: flex;
    flex-direction: column;
}

.recommends-container{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .card-body{
        width: 22.5%;
    }
}
</style>