<template>
  <div class='products'>
    NOS PRODUITS

    <action-button label="Button default" :icon="iconTest1" />
    <action-button label="Button default" :icon="iconTest2" />
  </div>
</template>

<script setup lang='ts'>
import { TickDouble01Icon, Tick01Icon } from '@hugeicons/core-free-icons'
import { iconSide } from '~/types/enum/global/icon';
import type { iconProps } from '~/types/type/icon';

const iconTest1: iconProps = {
  side: iconSide.RIGHT,
  hugeicons: TickDouble01Icon
}

const iconTest2: iconProps = {
  side: iconSide.LEFT,
  hugeicons: Tick01Icon
}
</script>

<style lang='scss' scoped>
    .products{
        
    }
</style>