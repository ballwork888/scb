<script lang="ts" setup>
import WelcomeModal from "~/components/modal/WelcomeModal.vue";
import NavbarAuth from "~/components/NavbarAuth.vue";

() => {
  $("#welcomeModal").modal("show");
};
</script>

<template>
  <div class="template-init">
    <div class="template-header">
      <NavbarAuth />
    </div>
    <div class="w-100 p-2" style="">
      <slot />
    </div>
    <FooterNav />
  </div>
  <WelcomeModal />
</template>
