<script lang="ts" setup>

import Footer from '~/components/Footer.vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

onMounted(async () => {
  await authStore.loadUserFromStorage()
})

useHead({
  title: "UFASCBX เว็บที่ทำกำไรได้ตลอดทั้งวันทั้งคืน",
  meta: [
    {
      name: "description",
      content:
        "UFABET เว็บตรง เดิมพันเกมออนไลน์ทางเข้า UFASCBX มือถือทำรายได้อย่างมากมาย UFASCBX เข้าสู่ระบบมาแรงล่าสุด",
    },
  ],
});


const logout = () => {
  authStore.logout()
}
</script>

<template>
  <Slider v-if="!authStore.user" class="slider-top" />

  <div v-if="authStore.user">
    <div class="-card-balance">
      <div class="-card-body">
        <div class="-name"><span>สวัสดี</span>, {{ authStore.user.name }}</div>
        <div class="-credit">
          <span>฿</span> <a href="/history?tab=2" class=""> {{ authStore.user.ufabet_credit }}</a>
          <div class="-check-credit">
            <img src="/images/icon/sync-dark.svg" alt="refresh credit" class="bnt-credit-mobile -turn-refresh" />
          </div>
        </div>
        <div class="-bank-info-flex">
          <div class="-block1">
            <div :class="['-bank', `bank_${authStore.user.bank?.toLowerCase()}`]">
              <img :src="`/images/bank/${authStore.user.bank?.toLowerCase()}.svg`" />
            </div>
          </div>
          <div class="-block2">
            <div>
              {{ authStore.user.bank }} <br />
              <strong>{{ authStore.user.account_number }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="-card-box">
      <div class="-block-deposit">
        <NuxtLink href="/deposit" class="">
          <div class="-btn-deposit">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="wallet" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="-svg-deposit">
              <path fill="currentColor"
                d="M384 256c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm80-160h-16V80c0-26.51-21.49-48-48-48H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h352c35.35 0 64-28.65 64-64V144c0-26.51-21.49-48-48-48zm16 320c0 17.64-14.36 32-32 32H96c-35.29 0-64-28.71-64-64V128c0-35.29 28.71-64 64-64h304c8.82 0 16 7.18 16 16v16H112c-8.84 0-16 7.16-16 16s7.16 16 16 16h352c8.82 0 16 7.18 16 16v272z">
              </path>
            </svg>
            ฝากเงิน
          </div>
        </NuxtLink>
      </div>
      <div class="-block-withdraw">
        <NuxtLink href="/withdraw" class="">
          <div class="-btn-withdraw">
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="hand-holding-usd" role="img"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="" class="-svg-withdraw">
              <path fill="currentColor"
                d="M256.7 135.7l56.4 16.1c8.8 2.5 14.9 10.6 14.9 19.7 0 11.3-9.2 20.5-20.5 20.5h-36.9c-8.2 0-16.1-2.6-22.6-7.3-3-2.2-7.2-1.5-9.8 1.2l-11.4 11.4c-3.5 3.5-2.9 9.2 1 12.2 12.3 9.4 27.2 14.5 42.9 14.5h1.4v24c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-24h1.4c22.8 0 44.3-13.6 51.7-35.2 10.1-29.6-7.3-59.8-35.1-67.8L263 104.1c-8.8-2.5-14.9-10.6-14.9-19.7 0-11.3 9.2-20.5 20.5-20.5h36.9c8.2 0 16.1 2.6 22.6 7.3 3 2.2 7.2 1.5 9.8-1.2l11.4-11.4c3.5-3.5 2.9-9.2-1-12.2C336 37.1 321.1 32 305.4 32H304V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h-3.5c-30.6 0-55.1 26.3-52.2 57.5 2 22.1 19 40.1 40.4 46.2zm301.6 197.9c-19.7-17.7-49.4-17.6-69.9-1.2l-61.6 49.3c-1.9 1.5-4.2 2.3-6.7 2.3h-41.6c4.6-9.6 6.5-20.7 4.8-32.3-4-27.9-29.6-47.7-57.8-47.7H181.3c-20.8 0-41 6.7-57.6 19.2L85.3 352H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h88l46.9-35.2c11.1-8.3 24.6-12.8 38.4-12.8H328c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88c-8.8 0-16 7.2-16 16s7.2 16 16 16h180.2c9.7 0 19.1-3.3 26.7-9.3l61.6-49.2c7.7-6.1 20-7.6 28.4 0 10.1 9.1 9.3 24.5-.9 32.6l-100.8 80.7c-7.6 6.1-17 9.3-26.7 9.3H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h400.5c17 0 33.4-5.8 46.6-16.4L556 415c12.2-9.8 19.5-24.4 20-40s-6-30.8-17.7-41.4z">
              </path>
            </svg>
            ถอนเงิน
          </div>
        </NuxtLink>
      </div>
      <div class="-block-50">
        <NuxtLink
          href="https://game.ufascbx.vip/auto-login?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL25ld3NjYnguZ2FtZW11bi5vbmxpbmUvYXBpL2xvZ2luIiwiaWF0IjoxNzU0OTM0MDIxLCJleHAiOjE3ODY0NzAwMjEsIm5iZiI6MTc1NDkzNDAyMSwianRpIjoibHBBUnVlNGFYVGtKMzVHZiIsInN1YiI6MjM2MTYsInBydiI6IjhiNDIyZTZmNjU3OTMyYjhhZWJjYjFiZjFlMzU2ZGQ3NmEzNjViZjIifQ.rErpCqNK2ceva3IThsxlIcm9a9i2EedPEa7H1WObF74"
          target="_blank">
          <div class="-bnt-activities">กิจกรรม</div>
        </NuxtLink>
      </div>
      <div class="-block-50 -right">
        <NuxtLink href="/history?tab=1" class="">
          <div class="-bnt-activities">โบนัส</div>
        </NuxtLink>
      </div>
      <div class="-block-50">
        <NuxtLink href="/history?tab=0" class="">
          <div class="-bnt-activities">ข้อมูลบัญชี</div>
        </NuxtLink>
      </div>
      <div class="-block-50 -right">
        <NuxtLink href="/history?tab=2" class="">
          <div class="-bnt-activities">ข้อมูลฝาก-ถอน</div>
        </NuxtLink>
      </div>
      <div class="-block-activities">
        <a href="javascript:void(0);" @click="logout">
          <div class="-bnt-activities -full -logout">ออกจากระบบ</div>
        </a>
      </div>
    </div>
    <div class="-promotion">
      <h2>โปรโมชั่น</h2>
      <div class="-promotion-flex">
        <div class="-promotion-block">
          <div><img src="/images/banner/b1-2.jpg" alt="" /></div>
        </div>
        <div class="-promotion-block">
          <div>
            <img src="/images/banner/b2.jpg" alt="ทายผลบอลลุ้นรับ 30,000 บาททุกสัปดาห์" />
          </div>
        </div>
        <div class="-promotion-block">
          <div><img src="/images/banner/b3.jpg" alt="" /></div>
        </div>
        <div class="-promotion-block">
          <div>
            <img src="/images/banner/b4.jpg" alt="คืนยอดเสียทุกวันศุกร์ 5%" />
          </div>
        </div>
        <div class="-promotion-block">
          <div><img src="/images/banner/b5.jpg" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
  <div class="_game_intro" v-if="!authStore.user">
    <ul class="box-game-flex">
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/t-ded-3.png.webp" alt="ufanews" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-sportsbook-square-mb-th.png.webp" alt="sportsbook" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-sportsbook-square-th.png.webp" alt="sportsbook" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-ae7.png.webp" alt="ae sexy" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/ht-5.png.webp" alt="joker" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-ae-gaming.png.webp" alt="ae gaming" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-ae-thailottery-th.png.webp" alt="thailottery" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-aesexy-thaihilo.png.webp" alt="aesexy thaihilo" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-yeekee-short.png.webp" alt="yeekee" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-ufa-pokdeng-th.png.webp" alt="ufa pokdeng" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/ht-2.png.webp" alt="ae sexy casino" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/ht-6.png.webp" alt="pg" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-plinko.png.webp" alt="plinko" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-ufa-slot.png.webp" alt="ufa slot" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/lc-2.png.webp" alt="sa gaming" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-gh-th.png.webp" alt="game hall" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-muaystep-small-th.png.webp" alt="muaystep" width="280" class="-img" />
      </li>
      <li class="-game-block -casino-slot">
        <img src="/images/games/hit/img-sicbo-th.png.webp" alt="sicbo" width="280" class="-img" />
      </li>
    </ul>
  </div>



  <QueenClub />
  <Footer />
</template>
