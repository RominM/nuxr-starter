<template>
  <div class='products'>
    <!-- NOS PRODUITS -->

    <action-button label="cta" :icon="iconTest1" :type="ButtonType.CTA" />
    <action-button label="destructive" :icon="iconTest2" :type="ButtonType.DESTRUCTIVE" fill />
    <action-button :icon="iconTest3" :type="ButtonType.FAB" />
    <action-button label="primary" :icon="iconTest4" :type="ButtonType.PRIMARY" />
    <action-button label="secondary" :icon="iconTest4" :type="ButtonType.SECONDARY" />
    <action-button label="tertiary" :icon="iconTest4" :type="ButtonType.TERTIARY" />
    <action-button label="primary" :type="ButtonType.PRIMARY" />
    <action-button label="secondary" link="/" :type="ButtonType.SECONDARY" />
    <action-button label="tertiary" :type="ButtonType.TERTIARY" />
  </div>
</template>

<script setup lang='ts'>
import { AddSquareIcon, AiBrain01Icon, AiCloud02Icon } from '@hugeicons/core-free-icons'
import { iconSide } from '~/types/enum/global/icon';
import { ButtonType } from '~/types/enum/global/button';
import type { iconProps } from '~/types/type/icon';

const iconTest1: iconProps = {
  side: iconSide.RIGHT,
  hugeicons: AddSquareIcon
}

const iconTest2: iconProps = {
  side: iconSide.LEFT,
  hugeicons: AiBrain01Icon
}

const iconTest3: iconProps = {
  side: iconSide.BOTTOM,
  hugeicons: AiCloud02Icon
}

const iconTest4: iconProps = {
  side: iconSide.TOP,
  hugeicons: AiCloud02Icon
}
</script>

<style lang='scss' scoped>
    .products{
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
</style>