<template>
  <div class="template-header">
    <div class="-desktop site-header">
      <div class="container -menu-header">
        <div class="row">
          <div class="col col-mb-12">
            <div class="d-flex justify-content-between align-center">
              <div class="-template-logo">
                <NuxtLink
                  href="/"
                  class="-tem-logo nuxt-link-exact-active active-link"
                  aria-current="page"
                  ><img
                    src="/images/spcial-logo/logo.png.webp?v=6"
                    alt="UFASCBX"
                    width="120"
                /></NuxtLink>
              </div>
              <div class="d-none d-sm-block">
                <ul class="-template-menu-top">
                  <li class="-top-menu-nav">
                    <NuxtLink href="/promotion" class="-icon"
                      ><img
                        src="/icon/menu/icon-promotion.svg"
                        alt="โปรโมชั่น"
                        width="27"
                        height="30"
                      />
                      <p class="-title">โปรโมชั่น</p></NuxtLink
                    >
                  </li>
                  <li class="-top-menu-nav">
                    <NuxtLink
                      href="https://game.ufascbx.vip/auto-login?access_token=null"
                      target="_blank"
                      class="-icon"
                      ><img
                        src="/icon/menu/crosshairs.svg"
                        alt="ไอคอน กิจกรรม"
                        width="27"
                        height="30"
                      />
                      <p class="-title">กิจกรรม</p></NuxtLink
                    >
                  </li>
                  <li class="-top-menu-nav">
                    <NuxtLink
                      href="https://eurolive24.com"
                      target="_blank"
                      class="-icon"
                      ><img
                        src="/icon/menu/futbol.svg"
                        alt="ไอคอน ดูบอลสด"
                        width="27"
                        height="30"
                      />
                      <p class="-title">ดูบอลสด</p></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink href="/login" class=""
                      ><button
                        type="button"
                        class="btn-master v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                      >
                        <span class="v-btn__content"> เข้าสู่ระบบ </span>
                      </button></NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink href="/register" class=""
                      ><button
                        type="button"
                        class="btn-master -play-dice v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
                      >
                        <span class="v-btn__content"> สมัครสมาชิก </span>
                      </button></NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
