<script setup lang="ts">
import Popup from "~/components/Popup.vue";
import { useAuthStore } from '~/stores/auth'
import { usePaymentStore } from '~/stores/payment'

const authStore = useAuthStore()

const amount = useState<Number>("amount", () => 0);
const errorMessage = ref('')
const paymentStore = usePaymentStore()


interface PopupState {
  error: boolean
  success: boolean
  warning: boolean
  confirm: boolean
  paymentError: boolean
  processing: boolean
}

const popupState = reactive<PopupState>({
  error: false,
  success: false,
  warning: false,
  confirm: false,
  paymentError: false,
  processing: false
})

const stopProcessing = () => {
  popupState.processing = false
}


const handleChangeAmount = (value: number) => {
  amount.value = value;
};

onMounted(async () => {
  if (!authStore.user) {
    //await authStore.loadUserFromStorage()
    //console.log(authStore.user)
    await navigateTo('/login')
  }

  if (authStore.user?.pending_request) {
    popupState.processing = true;
    const interval = setInterval(async () => {

      await authStore.loadUserFromStorage()

      if (!authStore.user?.pending_request) {
        clearInterval(interval)

        const comp = authStore.user.completed_requests[0]
        popupState.processing = false
        //console.log(comp)
        if (comp.status == "cancalled") {

          errorMessage.value = comp.deleted_cause
          console.log(errorMessage.value)
          popupState.error = true
        } else {
          popupState.success = true
          window.location.reload()
        }

      }
    }, 5000)
  }
})

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  popupState.processing = true;
  const res = await paymentStore.withdraw(amount.value)
  console.log(res)
  if (res.success) {
    popupState.processing = true;

    const interval = setInterval(async () => {

      await authStore.loadUserFromStorage()

      if (!authStore.user?.pending_request) {
        clearInterval(interval)

        const comp = authStore.user?.completed_requests[0]
        popupState.processing = false
        //console.log(comp)
        if (comp.status == "cancalled") {

          errorMessage.value = comp.deleted_cause
          console.log(errorMessage.value)
          popupState.error = true
        } else {
          popupState.success = true
          window.location.reload()
        }

      }
    }, 5000)
  } else {
    popupState.processing = false
    errorMessage.value = res.message
    popupState.error = true
  }

}
</script>

<template>

  <div class="-homepage-box -normal-info" v-if="authStore.user">
    <div class="-inner-box">
      <div class="-card-box">
        <div class="-affiliate-box">
          <div class="-deposit-box">
            <form @submit="handleSubmit">
              <div class="content_play">
                <div class="-notication-deposit">
                  <div class="-header">ยอดเงินคงเหลือ</div>
                  <div class="-content">
                    <div class="-money-summary">
                      <span>฿</span>
                      {{ authStore.user.ufabet_credit }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="content_play -second-box">
                <div class="-notication-deposit">
                  <div class="-header">ถอนเงิน</div>
                  <div class="-content">
                    <div class="deposit-w">
                      <div class="-info-flex -dis-border">
                        <div class="-block1">
                          <div :class="['-bank', `bank_${authStore.user.bank?.toLowerCase()}`]">
                            <img :src="`/images/bank/${authStore.user.bank?.toLowerCase()}.svg`" />
                          </div>
                        </div>
                        <div class="-block2">
                          <div class="-name -deposit">{{ authStore.user.bank }}</div>
                          <div class="-name -deposit2">{{ authStore.user.name }}</div>
                          <div class="-bank">{{ authStore.user?.account_number }}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="v-input v-input--dense theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined">
                      <div class="v-input__control">
                        <div class="v-input__slot">
                          <fieldset aria-hidden="true">
                            <legend style="width: 0px">
                              <span class="notranslate">​</span>
                            </legend>
                          </fieldset>
                          <div class="v-text-field__slot">
                            <label for="input-955" class="v-label theme--light"
                              style="left: 0px; right: auto; position: absolute">จำนวนเงินที่ต้องการถอน</label><input
                              pattern="[0-9]*" inputmode="numeric" :v-model="amount" required="required" id="input-955"
                              type="text" :value="amount" />
                            <div class="v-text-field__suffix">บาท</div>
                          </div>
                        </div>
                        <div class="v-text-field__details">
                          <div class="v-messages theme--light">
                            <div class="v-messages__wrapper"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!---->
                    <div class="money-select-flex">
                      <div class="-money-select-box" @click="handleChangeAmount(100)">
                        100
                      </div>
                      <div class="-money-select-box" @click="handleChangeAmount(200)">200</div>
                      <div class="-money-select-box" @click="handleChangeAmount(300)">300</div>
                      <div class="-money-select-box" @click="handleChangeAmount(500)">500</div>
                      <div class="-money-select-box" @click="handleChangeAmount(1000)">1000</div>
                      <div class="-money-select-box" @click="handleChangeAmount(2000)">2000</div>
                      <div class="-money-select-box" @click="handleChangeAmount(3000)">3000</div>
                      <div class="-money-select-box" @click="handleChangeAmount(5000)">5000</div>
                    </div>
                    <div class="my-2">
                      <button type="submit"
                        class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
                        <span class="v-btn__content"> ตกลง </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>

  <Popup v-if="popupState.processing" type="info" title="กำลังดำเนินการ" :close-on-overlay="false"
    @close="stopProcessing">
    <div class="processing-content">
      <div class="loading-spinner"></div>
      <p>กรุณารอสักครู่...</p>
      <p>กำลังประมวลผลรายการของคุณ</p>
    </div>
  </Popup>

  <Popup v-if="popupState.success" type="success" title="สำเร็จ" @close="popupState.success = false">
    <p>ทำรายการเสร็จสิ้น</p>
  </Popup>

  <Popup v-if="popupState.error" type="error" title="ทำรายการไม่สำเร็จ" :message="errorMessage"
    @close="popupState.error = false" />
</template>
