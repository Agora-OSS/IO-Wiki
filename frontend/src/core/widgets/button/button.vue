<script setup lang="ts">
import { cn } from "@/core/utils";
import type { buttonVariants } from "@/ui/button/button.config";

interface Props {
	variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
	size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
	as?: string;
}

withDefaults(defineProps<Props>(), {
	as: "button",
});
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants()), $attrs.class ?? ''"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: 'ButtonUI',
  inheritAttrs: false,
}
</script>

