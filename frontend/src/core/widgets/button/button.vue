<script setup lang="ts">
import { cn } from "@/core/utils";
import { buttonVariants } from "@/ui/button/button.config";
import { computed } from "vue";

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>["size"];
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});

const classes = computed(() => {
  return buttonVariants({ variant: props.variant, size: props.size });
});
</script>

<template>
  <component
    :is="as"
    :class="cn(classes)"
    >
    <slot />
  </component>
</template>