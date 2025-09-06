<script lang="ts" setup>
import Footer from "~/components/Footer.vue";
import FooterNav from "~/components/FooterNav.vue";
import HeaderMobile from "~/components/HeaderMobile.vue";
import WelcomeModal from "~/components/modal/WelcomeModal.vue";
import Navbar from "~/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";
import Slider from "~/components/Slider.vue";

import { getData, setData, removeItem } from 'nuxt-storage/local-storage';

const isLogin = useState<boolean>("isLogin", ()=>false)

onMounted(()=>{
  getAuth();
})

const getAuth = () => {
  isLogin.value = getData('isLogin');
}
</script>

<template>
  <div class="-header-mobile">
    <HeaderMobile />
  </div>
  <div class="template-init">
    <div class="template-header">
      <div class="-header-desktop">
        <Navbar />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row -template-body">
        <div class="col-12 pt-4">
          <Slider class="slider" v-if="isLogin" />
        </div>
        <div class="col-3 col-sm-2 col-md-3">
          <Sidebar />
        </div>
        <div class="col-9 col-sm-10 col-md-9">
          <div class="-content-body" style="padding-left: 5px;">
            <slot />
          </div>
          <!-- <Footer /> -->
        </div>
      </div>
    </div>
    <FooterNav />
  </div>
  <WelcomeModal />
</template>
