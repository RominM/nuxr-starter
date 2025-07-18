<template>
  <div class='products'>
    <!-- NOS PRODUITS -->
<ul>
  <li v-for="product in products">
    <product-card/>
  </li>
</ul>
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