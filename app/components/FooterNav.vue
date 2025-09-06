<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const auth = useAuthStore()

onMounted(() => {
  auth.loadUserFromStorage()
})
</script>

<template>
  <div class="-footer-nav-box">
    <div class="-template-footer">
      <div class="-inner-box">
        <div class="-footer-nav-flex" v-if="!auth.user">
          <NuxtLink href="/enter" class="">
            <div class="-footer-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z">
                </path>
              </svg>
              <div class="-menu">ทางเข้าเว็บ</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/promotion" class="">
            <div class="-footer-nav">
              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z">
                </path>
              </svg>
              <div class="-menu">โปรโมชั่น</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/" class="nuxt-link-exact-active active-link" aria-current="page">
            <div class="-footer-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="-svg-icon" aria-hidden="true"
                focusable="false" data-prefix="fal" data-icon="home" role="img" data-fa-i2svg="">
                <path fill="currentColor"
                  d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z">
                </path>
              </svg>
              <div class="-menu">หน้าแรก</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/register" class="">
            <div class="-footer-nav">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
                </path>
              </svg>
              <div class="-menu">สมัครเลย</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/login" class="">
            <div class="-footer-nav">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z">
                </path>
              </svg>
              <div class="-menu">เข้าระบบ</div>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="-footer-nav-flex">
          <NuxtLink href="/enter" class="">
            <div class="-footer-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z">
                </path>
              </svg>
              <div class="-menu">ทางเข้าเว็บ</div>
            </div>
          </NuxtLink>
          <NuxtLink href="javascript:void(0);">
            <div class="-footer-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M447.1 224c0-12.56-4.781-25.13-14.35-34.76l-174.9-174.9C249.1 4.786 236.5 0 223.1 0C211.4 0 198.9 4.786 189.2 14.35L14.35 189.2C4.783 198.9-.0011 211.4-.0011 223.1c0 12.56 4.785 25.17 14.35 34.8l174.9 174.9c9.625 9.562 22.19 14.35 34.75 14.35s25.13-4.783 34.75-14.35l174.9-174.9C443.2 249.1 447.1 236.6 447.1 224zM96 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S120 210.8 120 224S109.3 248 96 248zM224 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 376 224 376zM224 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1S248 210.8 248 224S237.3 248 224 248zM224 120c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S237.3 120 224 120zM352 248c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S365.3 248 352 248zM591.1 192l-118.7 0c4.418 10.27 6.604 21.25 6.604 32.23c0 20.7-7.865 41.38-23.63 57.14l-136.2 136.2v46.37C320 490.5 341.5 512 368 512h223.1c26.5 0 47.1-21.5 47.1-47.1V240C639.1 213.5 618.5 192 591.1 192zM479.1 376c-13.25 0-23.1-10.75-23.1-23.1s10.75-23.1 23.1-23.1s23.1 10.75 23.1 23.1S493.2 376 479.1 376z">
                </path>
              </svg>
              <div class="-menu">เข้าเล่นเกม</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/" aria-current="page" class="nuxt-link-exact-active active-link">
            <div class="-footer-nav">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="-svg-icon">
                <path fill="currentColor"
                  d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112z">
                </path>
              </svg>
              <div class="-menu">แดชบอร์ด</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/deposit" class="">
            <div class="-footer-nav">
              <img src="/images/icon/icon-mobile-deposit.png" alt="ฝากเงิน" class="-svg-icon" />
              <div class="-menu">ฝากเงิน</div>
            </div>
          </NuxtLink>
          <NuxtLink href="/withdraw" class="">
            <div class="-footer-nav">
              <img src="/images/icon/icon-mobile-withdrew.png" alt="ถอนเงิน" class="-svg-icon" />
              <div class="-menu">ถอนเงิน</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <div class="v-overlay theme--dark" style="z-index: 5">
    <div class="v-overlay__scrim" style="
        opacity: 0;
        background-color: rgb(33, 33, 33);
        border-color: rgb(33, 33, 33);
      "></div>
  </div>
  <div class="v-overlay theme--dark" style="z-index: 5">
    <div class="v-overlay__scrim" style="
        opacity: 0;
        background-color: rgb(33, 33, 33);
        border-color: rgb(33, 33, 33);
      "></div>
  </div>
  <div class="v-overlay loading-page theme--dark" style="z-index: 5">
    <div class="v-overlay__scrim" style="
        opacity: 0;
        background-color: rgb(33, 33, 33);
        border-color: rgb(33, 33, 33);
      "></div>
  </div>
  <div class="-notification-box"></div>
  <div>
    <div class="v-overlay theme--dark" style="z-index: 5">
      <div class="v-overlay__scrim" style="
          opacity: 0;
          background-color: rgb(33, 33, 33);
          border-color: rgb(33, 33, 33);
        "></div>
    </div>
  </div>
  <div class="v-overlay theme--dark" style="z-index: 5">
    <div class="v-overlay__scrim" style="
        opacity: 0;
        background-color: rgb(33, 33, 33);
        border-color: rgb(33, 33, 33);
      "></div>
  </div>
  <div class="v-dialog__container"><!----></div>
  <div class="v-dialog__container"><!----></div>
</template>
