<script setup lang="ts">

import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

onMounted(() => {
  auth.loadUserFromStorage()
})


</script>
<template>
  <div class="-desktop site-header">
    <div class="container-fluid -menu-header">
      <div class="row">
        <div class="col col-mb-12">
          <div class="d-flex justify-content-between align-center">
            <div class="-template-logo">
              <NuxtLink to="/" aria-current="page" class="-tem-logo nuxt-link-exact-active active-link"><img
                  src="/images/spcial-logo/logo.png.webp?v=6" alt="UFASCBX" width="120" /></NuxtLink>
            </div>
            <div class="">
              <ul class="-template-menu-top">
                <li class="-top-menu-nav">
                  <NuxtLink to="/promotion" class="-icon"><img src="/images/icon/menu/icon-promotion.svg"
                      alt="โปรโมชั่น" width="27" height="30" />
                    <p class="-title">โปรโมชั่น</p>
                  </NuxtLink>
                </li>
                <li class="-top-menu-nav">
                  <NuxtLink to="https://game.ufascbx.vip/dashboard" target="_blank" class="-icon">
                    <img src="/images/icon/menu/crosshairs.svg" alt="ไอคอน กิจกรรม" width="27" height="30" />
                    <p class="-title">กิจกรรม</p>
                  </NuxtLink>
                </li>
                <li class="-top-menu-nav">
                  <NuxtLink to="https://eurolive24.com" target="_blank" class="-icon"><img
                      src="/images/icon/menu/futbol.svg" alt="ไอคอน ดูบอลสด" width="27" height="30" />
                    <p class="-title">ดูบอลสด</p>
                  </NuxtLink>
                </li>

                <li v-if="auth.user">
                  <ul class="-casino-info">
                    <li class="-block-casion">
                      <NuxtLink href="/deposit" class=""><button type="button"
                          class="btn-master v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--large">
                          <span class="v-btn__content"> ฝากเงิน </span>
                        </button></NuxtLink>
                    </li>
                    <li class="-block-casion">
                      <NuxtLink href="/withdraw" class=""><button type="button"
                          class="btn-master -withdraw v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--large">
                          <span class="v-btn__content"> ถอนเงิน </span>
                        </button></NuxtLink>
                    </li>
                    <li class="-block-casion -cdit">
                      <div class="-block-phone">{{ auth.user.phone }}</div>
                      <div class="-block-money">
                        {{ auth.user.ufabet_credit }}
                        <img src="/images/icon/sync.svg" alt="refresh credit" class="bnt-credit" />
                      </div>
                    </li>
                    <li class="-block-casion">
                      <NuxtLink href="/" class="nuxt-link-exact-active active-link" aria-current="page"><svg
                          aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                          class="svg-inline--fa fa-info-circle fa-w-16 -svg">
                          <path fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                          </path>
                        </svg>
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
                <li v-if="!auth.user">
                  <NuxtLink to="/login" class=""><button type="button"
                      class="btn-master v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
                      <span class="v-btn__content"> เข้าสู่ระบบ </span>
                    </button></NuxtLink>
                </li>
                <li v-if="!auth.user">
                  <NuxtLink to="/register" class=""><button type="button"
                      class="btn-master -play-dice v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default">
                      <span class="v-btn__content"> สมัครสมาชิก </span>
                    </button></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
