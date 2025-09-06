<script setup lang="ts">
defineProps<{
  message?: string
}>()
</script>
<template>
  <div v-if="message" role="alert" class="v-alert v-sheet theme--dark red darken-1">
    <div class="v-alert__wrapper">
      <i aria-hidden="true" class="v-icon notranslate v-alert__icon mdi mdi-alert theme--dark"></i>
      <div class="v-alert__content">
        <div>{{ message }}</div>
      </div>
    </div>
  </div>
</template>
