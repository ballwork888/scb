<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { usePaymentStore } from '~/stores/payment'
import { useSharedStore } from '~/stores/shared'

const authStore = useAuthStore()
const paymentStore = usePaymentStore()
const sharedStore = useSharedStore()

interface Promotion {
  id: number;
  img: string;
  name: string;
}

const amount = useState<Number>("amount", () => 100);


onMounted(async () => {
  if (!authStore.user) {
    await authStore.loadUserFromStorage()
    //console.log(authStore.user)
  }

})

const handleIsPromotionSet = () => {
  sharedStore.updatePromotionData({
    isPromotionSet: true,
    name: '- ไม่รับโปรโมชั่น -',
    id: '0',
  })
};

const handleChangeAmount = (value: number) => {
  amount.value = value;
};

const emit = defineEmits(["mode"]);
const handleChangeMode = async (mode: String) => {
  sharedStore.updatePromotionData({
    amount: amount.value,
  })

  emit("mode", mode);


};
</script>
<template>
  <div class="-notication-deposit">
    <div class="-header">ใช้บัญชีด้านล่าง สำหรับการฝากเงินเท่านั้น</div>
    <div class="-content -flex" v-if="authStore.user">
      <div class="-box-bank">
        <div :class="['-bank', `bank_${authStore.user.bank?.toLowerCase()}`]">
          <img :src="`/images/bank/${authStore.user.bank?.toLowerCase()}.svg`" />
        </div>
      </div>
      <div class="-box-info">
        <div class="-bname">{{ authStore.user.account_number }}</div>
        <div class="-name">{{ authStore.user.name }}</div>
      </div>
    </div>
  </div>
  <form @submit="handleChangeMode('payment')">
    <div class="-notication-deposit">
      <div class="-header">ฝากเงิน</div>
      <div class="-content">
        <!---->

        <div class="my-2" v-if="sharedStore.promotionData.name">
          <h6 class="yellow--text theme--light"> {{ sharedStore.promotionData.name }}</h6>
          <button type="button" @click="handleChangeMode('promotion')"
            class="-bnt-promotion v-btn v-btn--block v-btn--outlined theme--light v-size--default yellow--text text--darken-1">
            <span class="v-btn__content"> เปลี่ยนโปรโมชั่น คลิกที่นี่ </span>
          </button>
        </div>

        <div class="my-2" v-if="!sharedStore.promotionData.name">
          <h6 class="yellow--text theme--light"> {{ sharedStore.promotionData.name }}</h6>
          <button type="button" @click="handleChangeMode('promotion')"
            class="-bnt-promotion v-btn v-btn--block v-btn--outlined theme--light v-size--default yellow--text text--darken-1">
            <span class="v-btn__content"> รับโปรโมชั่น คลิกที่นี่ </span>
          </button>
        </div>

        <div class="my-2">
          <button type="button" @click="handleIsPromotionSet"
            class="-bnt-promotion v-btn v-btn--block v-btn--outlined theme--light v-size--default grey--text text--lighten-1">
            <span class="v-btn__content"> ไม่รับโปรโมชั่น </span>
          </button>
        </div>
        <!---->
        <div class="fablink -deposit-form" v-if="sharedStore.promotionData.isPromotionSet">
          <i class="fas fa-arrow-down fa-2x"></i>
        </div>
        <div v-if="sharedStore.promotionData.isPromotionSet">
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
                  <label for="input-1176" class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute">จำนวนเงิน</label>
                  <input pattern="[0-9]*" inputmode="numeric" required="required" id="input-1176" type="text"
                    v-model="amount" />
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
          <span style="display: none"></span>
          <!---->
          <div class="money-select-flex">
            <div class="-money-select-box" @click="handleChangeAmount(100)">
              100
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(200)">
              200
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(300)">
              300
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(500)">
              500
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(1000)">
              1000
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(2000)">
              2000
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(3000)">
              3000
            </div>
            <div class="-money-select-box" @click="handleChangeAmount(5000)">
              5000
            </div>
          </div>
          <div class="my-2">
            <button type="submit"
              class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
              <span class="v-btn__content"> ตกลง </span>
            </button>
          </div>
        </div>
        <!---->
        <div class="-contact">
          *หากมีข้อสงสัย กรุณาติดต่อ
          <NuxtLink href="https://lin.ee/dams8xT" target="_blank" title="ฝ่ายบริการลูกค้า">ฝ่ายบริการลูกค้า</NuxtLink>
        </div>
      </div>
    </div>
  </form>
</template>
