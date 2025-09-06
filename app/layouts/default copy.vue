<script lang="ts" setup>
import Footer from "~/components/Footer.vue";
import WelcomeModal from "~/components/modal/WelcomeModal.vue";
import Navbar from "~/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";

</script>

<template>
  <div class="template-init">
    <div class="template-header">
      <Navbar />
    </div>
    <div class="container-fluid">
      <div class="row -template-body">
        <div class="row p-0">
          <div class="col-2 p-0">
            <Sidebar />
          </div>
          <div class="col-10">
            <div class="-content-body">
              <slot />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
  <WelcomeModal />
</template>
