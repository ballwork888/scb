<template>
  <header class="v-sheet theme--dark v-toolbar v-app-bar" right="" style="
      height: 64px;
      margin-top: 0px;
      transform: translateY(0px);
      left: 0px;
      right: 0px;
      background-color: rgb(7, 19, 43);
      border-color: rgb(7, 19, 43);
    " data-booted="true">
    <div class="v-toolbar__content" style="height: 64px">
      <button type="button" class="v-app-bar__nav-icon v-btn v-btn--icon v-btn--round theme--dark v-size--default">
        <span class="v-btn__content"><img src="/images/icon/menu/bars-solid.svg" class="-menu-bar" />11111</span>
      </button>
      <div class="v-toolbar__title -banner-left">
        <div class="-logo">
          <NuxtLink href="/" class="nuxt-link-exact-active active-link" aria-current="page">
            <div class="v-image v-responsive theme--dark" style="height: 48px; width: 150px">
              <div class="v-responsive__sizer" style="padding-bottom: 100%"></div>
              <div class="v-image__image v-image__image--cover" style="
                  background-image: url('/images/spcial-logo/logo.png.webp?v=6');
                  background-position: center center;
                "></div>
              <div class="v-responsive__content" style="width: 330px"></div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <aside
    class="v-navigation-drawer v-navigation-drawer--close v-navigation-drawer--fixed v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
    style="height: 100%; top: 0px; transform: translateX(100%); width: 256px; z-index:25" data-booted="true">
    <div class="v-navigation-drawer__content">
      <div role="list" class="v-list v-sheet theme--light v-list--dense v-list--nav">
        <div role="listbox" class="v-item-group theme--light v-list-item-group">
          <!---->
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="/" aria-current="page" class="nuxt-link-exact-active active-link">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""
                      class="-img svg-inline--fa fa-home fa-w-18">
                      <path fill="currentColor"
                        d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z">
                      </path>
                    </svg>
                  </div>
                  <div class="-name">หน้าแรก</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!---->
          <!---->
          <!---->
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="/promotion" class="">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <img src="/images/icon/menu/icon-promotion.svg" alt="โปรโมชั่น" width="27" height="30" />
                  </div>
                  <div class="-name">โปรโมชั่น</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="https://game.ufascbx.vip/dashboard" target="_blank">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <img src="/images/icon/menu/crosshairs.svg" alt="กิจกรรม" width="27" height="30" />
                  </div>
                  <div class="-name">กิจกรรม</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="https://eurolive24.com/" target="_blank">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <img src="/images/icon/menu/futbol.svg" alt="ดูบอลสด" width="27" height="30" />
                  </div>
                  <div class="-name">ดูบอลสด</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="https://lin.ee/dams8xT">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" class="-img">
                      <path fill="currentColor"
                        d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z">
                      </path>
                    </svg>
                  </div>
                  <div class="-name">ติดต่อเรา</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div tabindex="0" role="option" aria-selected="false" class="v-list-item v-list-item--link theme--light">
            <div class="v-list-item__title">
              <NuxtLink href="https://bit.ly/3InX63J">
                <div class="-m-nav-flex">
                  <div class="-icon">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="line" role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" class="-img">
                      <path fill="currentColor"
                        d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z">
                      </path>
                    </svg>
                  </div>
                  <div class="-name">Telegram</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </div>
    <div class="v-navigation-drawer__border"></div>
  </aside>
</template>
