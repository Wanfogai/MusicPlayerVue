<script setup lang="ts">
import { computed, PropType, reactive, ref } from 'vue';
import { CoverSizeEnum } from './enums';
import { IconTypeEnum } from '@/components/ui/UiIcon/enums';
import { CoverConfigInterface } from './interfaces';
import { UiIcon } from '@/components/ui';
import UiButton from '@/components/ui/UiButton/ui-button.vue';
import { loadEnvFile } from 'process';

const props = defineProps({
    src:{type:String},
    size:{type: String as PropType<CoverSizeEnum>, default: CoverSizeEnum.Normal}
})

const BigCoverStyle = reactive(({
    width: '120px',
    height: '120px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA"
}))

const BigPlayIconStyle = reactive(({
    bottom: '40px',
    left:'-35px'
    
}))

const NormalCoverStyle = reactive(({
    width: '64px',
    height: '64px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA"
}))

const NormalPlayIconStyle = reactive(({
    bottom: '28px',
    left: '-13px'
}))

const MiniCoverStyle = reactive(({
    width: '48px',
    height: '48px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA"
}))

const MiniPlayIconStyle = reactive(({
    bottom: '20px',
    left: '-9px'
    
}))

const currentCover = computed<CoverConfigInterface>(()=>{
    switch(props.size){
        case CoverSizeEnum.Big:
            return {
                CoverStyle: BigCoverStyle,
                PlayIconStyle : BigPlayIconStyle,
                playIconSize: IconTypeEnum.PlayIcon120,
            };
        case CoverSizeEnum.Normal:
            return {
                CoverStyle: NormalCoverStyle,
                PlayIconStyle : NormalPlayIconStyle,
                playIconSize: IconTypeEnum.PlayIcon64
            };
        case CoverSizeEnum.Mini:
            return {
                CoverStyle: MiniCoverStyle,
                PlayIconStyle : MiniPlayIconStyle,
                playIconSize: IconTypeEnum.PlayIcon48
            };
    }
})

</script>

<template>
        <UiButton class="cover-body" :style="currentCover.CoverStyle">
            <div class="cover-container" >
                <img :src="props.src" alt="" class="cover-image">
                <UiIcon :type="currentCover.playIconSize" class="play-icon" :style="currentCover.PlayIconStyle" />
            </div>
        </UiButton>
    
</template>

<style lang="scss" scoped>

.cover-body{
    user-select: none;
    display: flex;
}

.cover-container{
    background: none;
}

.play-icon{
    background-color: transparent;
    position: relative;
}

.cover-image{
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    border: 2px var(--strokeColor);
    background-color: transparent;
}
</style>