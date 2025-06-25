<script setup lang="ts">
import { PropType, ref } from 'vue';
import { MusicCover } from '..';
import { CoverSizeEnum } from '../MusicCover/enums';
import { UiButton } from '@/components/ui';
import { TrackModel } from './models';

const props  = defineProps({
    coverSize:{type : String as PropType<CoverSizeEnum>,required:true},
    trackData:{type: TrackModel, defaut: new TrackModel('none','none','none')}
})

</script>

<template>
    <UiButton>
        <div class="card-body">
            <div class="cover-container">
                <MusicCover :size="coverSize" :src="trackData?.cover"/>
            </div>
            <div class="info-container">
                <div class="track-info">
                    <span class="track-name">{{trackData?.trackName}}</span>
                    <span class="track-author">{{trackData?.trackAuthor}}</span>
                </div>
                <div class="decor-line"></div>
            </div>
        </div>
    </UiButton>
</template>

<style lang="scss" scoped>
.card-body{
    display: flex;
    border: 1px solid var(--strokeColor);
    border-radius: var(--strokeRadius);
    padding: 10px;
}

.track-info{
    display: flex;
    flex-direction: column;
}


.decor-line{
    background: var(--strokeColor);
    width: 75px;
    height: 5px;

    border-radius: var(--strokeRadius);
}

.info-container{
    display: flex;
    justify-content: space-around;
    flex-direction:column;

    margin-top: 0.5%;
    margin-bottom: 0.5%;
    
}
</style>