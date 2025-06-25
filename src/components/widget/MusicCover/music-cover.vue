<script setup lang="ts">
import { computed, PropType, reactive, ref } from 'vue';
import { CoverSizeEnum } from './enums';
import { IconTypeEnum } from '@/components/ui/UiIcon/enums';
import { CoverConfigInterface } from './interfaces';
import { UiIcon } from '@/components/ui';
import UiButton from '@/components/ui/UiButton/ui-button.vue';
import { loadEnvFile } from 'process';

const props = defineProps({
    src:{type:String, default: ''},
    size:{type: String as PropType<CoverSizeEnum>,required:true}
})


const BigCoverStyle = reactive(({
    width: '120px',
    height: '120px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA",
    marginRight:"20px"
}))

const BigPlayIconStyle = reactive(({
    bottom: '48px',
    left:'4px'
    
}))

const NormalCoverStyle = reactive(({
    width: '64px',
    height: '64px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA",
    marginRight: "10px"
}))

const NormalPlayIconStyle = reactive(({
    bottom: '36px',
    left: '4px'
}))

const MiniCoverStyle = reactive(({
    width: '48px',
    height: '48px',
    borderRadius: "12px",
    backgroundColor: "#AAAAAA",
    marginRight:"10px"
}))

const MiniPlayIconStyle = reactive(({
    bottom: '28px',
    left: '4px'
    
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
                <img :src="props.src" alt="Cover Image" class="cover-image">
                <UiIcon :type="currentCover.playIconSize" class="play-icon" :style="currentCover.PlayIconStyle" />
            </div>
        </UiButton>
</template>

<style lang="scss" scoped>

.cover-body{
    overflow: hidden;
    user-select: none;
}

.play-icon{
    position: relative;
}

.cover-image{
    max-width: 100%;
    height: auto;
    background-color: transparent;
}
</style>