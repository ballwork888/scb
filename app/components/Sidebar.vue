<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

onMounted(() => {
  auth.loadUserFromStorage()
})
</script>
<template>
  <ul class="-mobile-menu">
    <li class="my-2">
      <NuxtLink href="/" class="-nav-link"><img src="/icon/left-menu/icn-hot-checked.png.webp" alt="กำลังฮิต" width="38"
          height="30" class="-icon" />
        <div class="-label">
          <div class="d-none d-sm-none d-md-block">
            <p class="-en" v-if="auth.user">Dashboard</p>
            <p class="-en" v-else>HIT GAMES</p>
          </div>
          <p class="-mini" v-if="auth.user">แดชบอร์ด</p>
          <p class="-mini" v-else>กำลังฮิต</p>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2">
      <NuxtLink href="/hack-slot" class="-nav-link">
        <div class="-icon-new">NEW</div>
        <img src="/icon/left-menu/icn-ufaslot-checked.png.webp" alt="แฮกสล็อต" width="30" height="30" class="-icon" />
        <div class="-label">
          <p class="-en d-none d-sm-none d-md-block">HACK</p>
          <p class="-mini">สูตรสล็อต</p>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2">
      <NuxtLink href="/sports" class="-nav-link"><img src="/icon/left-menu/icn-sportsbook-check.png.webp" alt="กีฬา"
          width="30" height="30" class="-icon" />
        <div class="-label">
          <p class="-en d-none d-sm-none d-md-block">SPORTS</p>
          <p class="-mini">กีฬา</p>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2">
      <NuxtLink href="/casino" class="-nav-link"><img src="/icon/left-menu/icn-lc-checked.png.webp" alt="คาสิโน"
          width="30" height="30" class="-icon" />
        <div class="-label">
          <p class="-en d-none d-sm-none d-md-block">CASINO</p>
          <p class="-mini">คาสิโน</p>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2">
      <NuxtLink href="/slot" class="-nav-link nuxt-link-exact-active active-link" aria-current="page"><img
          src="/icon/left-menu/icn-ufaslot-checked.png.webp" alt="สล็อต" width="30" height="30" class="-icon" />
        <div class="-label">
          <p class="-en d-none d-sm-none d-md-block">SLOT</p>
          <p class="-mini">สล็อต</p>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2 -contact-queenclub88 -mobile">
      <NuxtLink href="https://lin.ee/dams8xT" target="_blank" class="-nav-link -contact-line">
        <div class="d-flex flex-wrap">
          <img src="/images/icon/bnt-line-support-mobile.webp" alt="บริการตลอด 24 ชั่วโมง" width="30" height="30"
            class="-icon" />
          <div class="-label">
            <p class="-mini">Line</p>
          </div>
        </div>
      </NuxtLink>
    </li>
    <li class="my-2 -contact-queenclub88 -mobile">
      <NuxtLink href="https://bit.ly/3InX63J" target="_blank" class="-nav-link -contact-telegram">
        <div class="d-flex flex-wrap">
          <img src="/images/icon/bnt-telegram-support-mobile.webp" alt="telegram บริการตลอด 24 ชั่วโมง" width="30"
            height="30" class="-icon" />
          <div class="-label">
            <p class="-mini">Telegram</p>
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>

  <div class="my-2 -contact-queenclub88">
    <a href="https://lin.ee/dams8xT" target="_blank">
      <p class="-contact-line">
        <img src="/icon/menu/icon-line.svg" alt="บริการตลอด 24 ชั่วโมง" width="50" height="57" class="-svg-img" />
        บริการตลอด <br />24 ชั่วโมง
      </p>
    </a>
  </div>

  <div class="-contact-queenclub88">
    <a href="https://bit.ly/3InX63J" target="_blank">
      <p class="-contact-line -telegram">
        <img src="/images/icon/bnt-telegram-support-mobile.webp" alt="บริการตลอด 24 ชั่วโมง" width="50" height="57"
          class="-svg-img" />
        Telegram <br />24 ชั่วโมง
      </p>
    </a>
  </div>
</template>
