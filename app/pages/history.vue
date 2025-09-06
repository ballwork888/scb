<script setup lang="ts">
import ChangePassword from "~/components/ChangePassword.vue";
import Footer from "~/components/Footer.vue";
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const route = useRoute()

onMounted(async () => {
  if (!authStore.user) {
    //authStore.loadUserFromStorage()
    await navigateTo('/login')
  }

  // Auto select tab จาก URL parameter
  initializeTabFromURL()
})

const curTab = useState<String>("curTab", () => "info");
const isPasswordChangeOpen = useState<Boolean>("isPasswordChangeOpen", () => false);

// Tab mapping
const tabMapping: Record<string, string> = {
  '0': 'info',
  '1': 'activity',
  '2': 'cash'
}

// Initialize tab จาก URL parameter
const initializeTabFromURL = () => {
  const tabParam = route.query.tab as string

  if (tabParam && tabMapping[tabParam]) {
    curTab.value = tabMapping[tabParam]
  }
}

// Watch route changes (สำหรับกรณีที่เปลี่ยน URL parameter แบบ dynamic)
watch(() => route.query.tab, (newTab) => {
  if (newTab && tabMapping[newTab as string]) {
    curTab.value = tabMapping[newTab as string]
  }
})

useHead({
  title: "ประวัติ",
  meta: [
    {
      name: "description",
      content:
        "คาสิโนชั้นนำมาแรง สล็อตออนไลน์ จ่ายจริง สล็อต เกมส์ยิงปลา แตกง่าย บาคาร่า เครดิตฟรี ฝาก-ถอน อัตโนมัติ",
    },
  ],
});

const handleChangeTab = (tab: String) => {
  curTab.value = tab;

  // อัปเดต URL parameter เมื่อเปลี่ยน tab (optional)
  const tabIndex = Object.keys(tabMapping).find(key => tabMapping[key] === tab)
  if (tabIndex) {
    navigateTo({
      path: route.path,
      query: { ...route.query, tab: tabIndex }
    }, { replace: true })
  }
};

const handlePasswordChangeOpen = () => {
  isPasswordChangeOpen.value = true;
}
</script>

<template>
  <div class="-homepage-box -normal-info" v-if="authStore.user">
    <div class="-inner-box">
      <div class="-card-box">
        <div class="-affiliate-box">
          <div class="-card-property v-card v-sheet theme--light">
            <div class="v-tabs v-tabs--centered theme--light">
              <div role="tablist" class="v-item-group theme--light v-slide-group v-tabs-bar primary--text"
                data-booted="true">
                <div class="v-slide-group__prev v-slide-group__prev--disabled">
                  <!---->
                </div>
                <div class="v-slide-group__wrapper">
                  <div class="v-slide-group__content v-tabs-bar__content">

                    <div tabindex="0" aria-selected="false" role="tab" class="v-tab"
                      :class="curTab == 'info' ? 'v-tab--active' : ''" @click="handleChangeTab('info')">
                      <div class="-lobby-nav-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="-svg-img-icon">
                          <path fill="currentColor"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                          </path>
                        </svg>
                      </div>
                      <div class="-lobby-nav-name">ข้อมูล</div>
                    </div>
                    <div tabindex="1" aria-selected="false" role="tab" class="v-tab"
                      :class="curTab == 'activity' ? 'v-tab--active' : ''" @click="handleChangeTab('activity')">

                      <div class="-lobby-nav-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="award" role="img"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="-svg-img-icon">
                          <path fill="currentColor"
                            d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z">
                          </path>
                        </svg>
                      </div>
                      <div class="-lobby-nav-name">กิจกรรม</div>
                    </div>
                    <div tabindex="2" aria-selected="false" role="tab" class="v-tab"
                      :class="curTab == 'cash' ? 'v-tab--active' : ''" @click="handleChangeTab('cash')">
                      <div class="-lobby-nav-icon">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exchange-alt" role="img"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="-svg-img-icon">
                          <path fill="currentColor"
                            d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z">
                          </path>
                        </svg>
                      </div>
                      <div class="-lobby-nav-name">ฝาก/ถอน</div>
                    </div>
                  </div>
                </div>
                <div class="v-slide-group__next v-slide-group__next--disabled">
                  <!---->
                </div>
              </div>
            </div>
            <div class="v-window v-item-group theme--light v-tabs-items">
              <div class="v-window__container mt-4" style="">
                <div class="v-window-item" :class="curTab == 'info' ? '' : 'd-none'">
                  <div class="v-card v-card--flat v-sheet theme--light">
                    <div class="v-card__text -friend-box">
                      <div class="-info-flex -hotz-info">
                        <div class="-block-w -hotz-w">
                          <h3>โปรปัจจุบัน : - ไม่รับโปรแรกเข้า -</h3>
                        </div>
                        <div class="-block2 -full">
                          <div class="-turn-flex">
                            <div class="-turn-box text-center">
                              เทิร์นปัจจุบัน (บาท)
                            </div>
                            <div class="-turn-box -bleft text-center">
                              เทิร์นที่ต้องทำ (บาท)
                            </div>
                            <div class="-turn-box text-center">
                              <span> {{ authStore.user.turnover_needed }} </span>
                            </div>
                            <div class="-turn-box -bleft text-center">
                              <span> {{ authStore.user.turnover_needed }} </span>
                            </div>
                          </div>
                          <div class="-turn">
                            <div class="-content-text">
                              หากเครดิตรวมของท่านเหลือน้อยกว่า 20 บาท
                              กดที่นี่เพื่อล้างเทิร์น
                            </div>
                            <div class="-content-bnt">
                              <img src="/images/icon/sync.svg" alt="refresh credit"
                                class="bnt-credit-mobile -turn-refresh" />
                            </div>
                          </div>
                          <!---->
                        </div>
                      </div>
                      <h3 class="-bt">ข้อมูลส่วนตัว</h3>
                      <div class="-info-flex -hotz-info">
                        <div class="-block1"><i class="fas fa-user"></i></div>
                        <div class="-block2">
                          <div class="-space-text">
                            เบอร์โทรศัพท์ :
                            <span>{{ authStore.user.phone }}</span>
                          </div>
                          <div class="-space-text">
                            รหัสผ่าน : {{ authStore.user.ufabet_password_always_show }}

                            <span class="v-tooltip v-tooltip--top"><!----></span><button type="button"
                              class="-m-bnt-copy v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--small">
                              <span class="v-btn__content"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                  data-fa-i2svg="" class="-copy">
                                  <path fill="currentColor"
                                    d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z">
                                  </path>
                                </svg>
                                คัดลอก
                              </span>
                            </button>
                          </div>
                          <div class="-password">
                            <a href="javascript:void(0);" @click="handlePasswordChangeOpen"> เปลี่ยนรหัสผ่าน </a>
                          </div>
                        </div>

                        <ChangePassword v-if="isPasswordChangeOpen" />
                        <!---->
                      </div>
                      <h3 class="-bt">ข้อมูลบัญชี UFABET</h3>
                      <div class="-info-flex -hotz-info">
                        <div class="-block1">
                          <div class="-ufa">UFABET</div>
                        </div>
                        <div class="-block2">
                          <div>
                            รหัสลูกค้า : {{ authStore.user.ufabet_username }}
                            <span class="v-tooltip v-tooltip--top"><!----></span><button type="button"
                              class="-m-bnt-copy v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--small">
                              <span class="v-btn__content"><svg aria-hidden="true" focusable="false" data-prefix="fas"
                                  data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                  data-fa-i2svg="" class="-copy">
                                  <path fill="currentColor"
                                    d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z">
                                  </path>
                                </svg>
                                คัดลอก
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <h3 class="-bt">บัญชีธนาคารของฉัน</h3>
                      <div class="-info-flex -hotz-info">
                        <div class="-block1">
                          <div :class="['-bank', `bank_${authStore.user.bank?.toLowerCase()}`]">
                            <img :src="`/images/bank/${authStore.user.bank?.toLowerCase()}.svg`" />
                          </div>
                        </div>
                        <div class="-block2">
                          <div class="-space-text -strong">{{ authStore.user.account_number }}</div>
                          <div class="-space-text"> {{ authStore.user.bank }}</div>
                          <div class="-space-text -account-name">
                            {{ authStore.user.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="v-window-item" :class="curTab == 'activity' ? '' : 'd-none'">
                  <div class="v-card v-card--flat v-sheet theme--light">
                    <div class="v-card__text -friend-box">
                      <h3 class="-bt">ข้อมูลกิจกรรม</h3>
                      <div class="box-info -hotz">
                        <div class="-info-flex -hotz">
                          <div class="-block2 -full">
                            <div class="-t-log-flex -header">
                              <div class="-active text-left -header">
                                รายการ
                              </div>
                              <div class="-active2 text-center -header">
                                โบนัส
                              </div>
                              <div class="-active3 text-center -header">
                                สถานะ
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!---->
                <div class="v-window-item" :class="curTab == 'cash' ? '' : 'd-none'">
                  <div class="v-card v-card--flat v-sheet theme--light">
                    <div class="v-card__text -friend-box">
                      <h3 class="-bt">ข้อมูล ฝาก/ถอน</h3>
                      <div class="box-info -hotz">
                        <div class="-info-flex -hotz">
                          <div class="-block2 -full">
                            <div class="-t-log-flex -header">
                              <div class="-block3 text-left">รายการ</div>
                              <div class="-block3 text-center">จำนวน</div>
                              <div class="-block3 text-center">โบนัส</div>
                              <div class="-block3 text-center">สถานะ</div>
                              <div class="-block3 text-center">วันที่</div>
                            </div>

                            <div class="-t-log-flex" v-for="(item, index) in authStore.user.completed_requests"
                              :key="index">
                              <div class="-block3 -inner text-left" style="color: green">
                                {{ item.type }}
                              </div>
                              <div class="-block3 -inner text-center">
                                {{ item.amount }}
                              </div>
                              <div class="-block3 -inner text-center">0.00</div>
                              <div class="-block3 text-center -status" style="color: green">
                                {{ item.status }}
                              </div>
                              <div class="-block3 -date text-center">
                                {{ item.created_at }}
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
