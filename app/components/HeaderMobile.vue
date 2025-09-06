<script setup lang="ts">
const open = ref(false);

import { getData, setData, removeItem } from "nuxt-storage/local-storage";

const isLogin = useState<boolean>("isLogin", () => false);

onMounted(() => {
  getAuth();
});

const getAuth = () => {
  isLogin.value = getData("isLogin");
};

const logout = () => {
  removeItem("isLogin");
  window.location.reload();
};
</script>
<template>
  <header
    class="v-sheet theme--dark v-toolbar v-app-bar"
    right=""
    style="
      height: 80px;
      margin-top: 0px;
      left: 0px;
      right: 0px;
      background-color: rgb(7, 19, 43);
    "
  >
    <div
      v-if="!isLogin"
      class="v-toolbar__content d-flex justify-content-between"
      style="height: 80px"
    >
      <div class="v-toolbar__title">
        <div class="-logo">
          <NuxtLink href="/" class="-mobile-logo">
            <img src="/images/spcial-logo/logo.png.webp?v=6" />
          </NuxtLink>
        </div>
      </div>
      <button
        type="button"
        @click="open = true"
        class="v-app-bar__nav-icon v-btn v-btn--icon v-btn--round theme--dark v-size--default"
      >
        <span class="v-btn__content"
          ><img src="/images/icon/menu/bars-solid.svg" class="-menu-bar"
        /></span>
      </button>
    </div>

    <div
      v-else
      class="v-toolbar__content d-flex justify-content-between"
      style="height: 56px"
    >
      <div class="v-toolbar__title -banner-left">
        <div class="-logo">
          <NuxtLink
            href="/"
            aria-current="page"
            class="nuxt-link-exact-active -mobile-logo"
          >
            <img src="/images/spcial-logo/logo.png.webp?v=6" />
          </NuxtLink>
        </div>
      </div>

      <button
        type="button"
        @click="open = true"
        class="v-app-bar__nav-icon v-btn v-btn--icon v-btn--round theme--dark v-size--default"
      >
        <span class="v-btn__content"
          ><div class="-authen-info">
            <div class="-authen-credit">
              0.00
              <img
                src="/images/icon/sync.svg"
                alt="refresh credit"
                class="bnt-credit"
              />
            </div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="info-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-info-circle fa-w-16 -svg"
            >
              <path
                fill="currentColor"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
              ></path>
            </svg></div
        ></span>
      </button>
    </div>
  </header>
  <Transition>
    <aside
      v-if="open"
      class="v-navigation-drawer v-navigation-drawer--close v-navigation-drawer--fixed v-navigation-drawer--is-mobile v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
      style="height: 100%; top: 0px; transform: translateX(60%); width: 65%"
      data-booted="true"
    >
      <div class="v-navigation-drawer__content" v-if="!isLogin">
        <div
          role="list"
          class="v-list v-sheet theme--light v-list--dense v-list--nav"
        >
          <div
            role="listbox"
            class="v-item-group theme--light v-list-item-group"
          >
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <div class="close">
                  <button
                    type="button"
                    @click="open = false"
                    class="active-link"
                  >
                    <div class="-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                      >
                        <path
                          fill="#ffffff"
                          d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <!---->
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/" class="active-link"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="home"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                        class="-img svg-inline--fa fa-home fa-w-18"
                      >
                        <path
                          fill="currentColor"
                          d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">หน้าแรก</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <!---->
            <!---->
            <!---->
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/promotion" class=""
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/icon-promotion.svg"
                        alt="โปรโมชั่น"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">โปรโมชั่น</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a
                  href="https://game.ufascbx.vip/auto-login?access_token=null"
                  target="_blank"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/crosshairs.svg"
                        alt="กิจกรรม"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">กิจกรรม</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://eurolive24.com/" target="_blank"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/icon-sport.svg"
                        alt="ดูบอลสด"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">ดูบอลสด</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://lin.ee/dams8xT"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="line"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">ติดต่อเรา</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://bit.ly/3InX63J"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="line"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">Telegram</div>
                  </div></a
                >
              </div>
            </div>
            <!---->
          </div>
        </div>
      </div>

      <div class="v-navigation-drawer__content" v-else>
        <div
          role="list"
          class="v-list v-sheet theme--light v-list--dense v-list--nav"
        >
          <div class="v-list-item__title">
            <div class="close">
              <button type="button" @click="open = false" class="active-link">
                <div class="-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      fill="#ffffff"
                      d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div
            role="listbox"
            class="v-item-group theme--light v-list-item-group"
          >
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <div class="-lmenu-info">
                  <div class="-img">
                    <img
                      src="/images/spcial-logo/logo.png.webp?v=6"
                      width="200"
                      height="64"
                    />
                  </div>
                  <div class="-phone"></div>
                  <div class="-block-money">
                    0.00
                    <img
                      src="/images/icon/sync.svg"
                      alt="refresh credit"
                      class="bnt-credit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink
                  href="/"
                  aria-current="page"
                  class="nuxt-link-exact-active active-link"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="home"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                        class="-img svg-inline--fa fa-home fa-w-18"
                      >
                        <path
                          fill="currentColor"
                          d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">แดชบอร์ด</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/history?tab=0" class=""
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="info-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">ข้อมูลบัญชี</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/history?tab=1" class=""
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="award"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">โบนัสกิจกรรม</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/history?tab=2" class=""
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="exchange-alt"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">ข้อมูลฝาก-ถอน</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <NuxtLink href="/promotion" class=""
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/icon-promotion.svg"
                        alt="โปรโมชั่น"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">โปรโมชั่น</div>
                  </div></NuxtLink
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a
                  href="https://game.ufascbx.vip/auto-login?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL25ld3NjYnguZ2FtZW11bi5vbmxpbmUvYXBpL2xvZ2luIiwiaWF0IjoxNzU1MjE3MjM5LCJleHAiOjE3ODY3NTMyMzksIm5iZiI6MTc1NTIxNzIzOSwianRpIjoiTnBWcE1OS1daOEJOdzBoZCIsInN1YiI6ODkzNiwicHJ2IjoiOGI0MjJlNmY2NTc5MzJiOGFlYmNiMWJmMWUzNTZkZDc2YTM2NWJmMiJ9.L51GSipvHwC8bzqdbZxewFqGDRtLYv7R-70-r9cxDsk"
                  target="_blank"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/crosshairs.svg"
                        alt="กิจกรรม"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">กิจกรรม</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://eurolive24.com/" target="_blank"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <img
                        src="/images/icon/menu/icon-sport.svg"
                        alt="ดูบอลสด"
                        width="27"
                        height="30"
                      />
                    </div>
                    <div class="-name">ดูบอลสด</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://lin.ee/dams8xT"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="line"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">ติดต่อเรา</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="https://bit.ly/3InX63J"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="line"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                        class="-img"
                      >
                        <path
                          fill="currentColor"
                          d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">Telegram</div>
                  </div></a
                >
              </div>
            </div>
            <div
              tabindex="0"
              role="option"
              aria-selected="false"
              class="v-list-item v-list-item--link theme--light"
            >
              <div class="v-list-item__title">
                <a href="javascript:void(0);" @click="logout"
                  ><div class="-m-nav-flex">
                    <div class="-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="sign-out"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                        class="-img svg-inline--fa fa-sign-out fa-w-16"
                      >
                        <path
                          fill="currentColor"
                          d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"
                        ></path>
                      </svg>
                    </div>
                    <div class="-name">ออกจากระบบ</div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="v-navigation-drawer__border"></div>
    </aside>
  </Transition>
</template>
