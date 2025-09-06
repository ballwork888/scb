<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { usePaymentStore } from '~/stores/payment'
import { useSharedStore } from '~/stores/shared'



const authStore = useAuthStore()
const paymentStore = usePaymentStore()
const sharedStore = useSharedStore()

const emit = defineEmits(["mode"]);
const errorMessage = ref<string>("");


onMounted(async () => {
  if (!authStore.user.pending_request) {
    const res = await paymentStore.createQr(sharedStore.promotionData.amount, sharedStore.promotionData.id)
    console.log(res)
    if (!res.success) {
      errorMessage.value = res.message

      await nextTick()
      setTimeout(() => {
        window.location.reload()
      }, 4000)
    }

    authStore.loadUserFromStorage()
  }

})

const cancelOrder = async (id: string) => {
  console.log('cancel payment')
  const res = await paymentStore.cancel(id);
  window.location.reload()
}
</script>

<template>
  <div class="-notication-deposit">
    <div class="-header">ฝากเงิน</div>
    <div class="-header">สแกน QR เพื่อฝากเงิน</div>
    <AlertError :message="errorMessage" />



    <div class="content" v-if="authStore.user.pending_request">
      <div class="-qr-box">
        <div class="qrcode_box">
          <div class="-qrcode-header">
            <img src="/images/payment/thai_qr_payment-header.jpg" alt="thai QR payment" />
          </div>
          <div class="qrcode_img">
            <img src="/images/payment/prompt-pay3.png" alt="พร้อมเพย์" class="qrcode_img2" />
            <div class="-box-qrcode">
              <div class="watermark">
                ใช้สำหรับเติมเกมส์เท่านั้น
              </div>
              <img :src="`data:image/png;base64,${authStore.user.pending_request.qr_code}`" alt="QR Code พร้อมเพย์" />
            </div>
            <p class="bank-name" style="margin-bottom: 0px;">{{ authStore.user.pending_request.name }}
            </p>
            <!---->
            <div class="-deposit-data2" style="padding-top: 0px;">
              <div class="-money -flex">
                <div>
                  {{ authStore.user.pending_request.amount }}
                  <span>บาท</span>
                </div>
                <div class="-remark">
                  ห้ามใช้สลิปซ้ำ สแกน 1 ครั้งต่อสลิปเท่านั้น
                  ไม่เช่นนั้นยอดเงินจะไม่เข้า
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="content_deposit">
        <div class="content">
          <div class="-box-process">
            <div class="-title">
              เมื่อโอนเสร็จแล้ว กรุณากดปุ่มด้านล่าง
            </div>
            <div class="fablink">
              <i class="fas fa-arrow-down fa-2x"></i>
            </div>
          </div>
          <button id="bnt_deposit_process" class="bnt-submit text-blink">
            ตกลง
          </button>
          <div class="my-2">
            <button type="button"
              class="-btn-style v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default blue grey darken-1">
              <span class="v-btn__content" @click="cancelOrder(authStore.user.pending_request.id)">
                ยกเลิก </span>
            </button>
          </div>
          <div class="-box-notification">
            กรุณาโอนเข้าเลขบัญชีข้างบนนี้
            ระบบจะเติมเครดิตโดยอัตโนมัติภายใน 3-5 นาที
            หากยังไม่ได้รับเครดิตหรือมีปัญหาสงสัย
            กรุณาเลือกที่เมนูติดต่อเจ้าหน้าที่ 24 ชม.
            ขอบพระคุณค่ะ
          </div>
          <div class="-box-waring -no-left">
            กรุณาโอนจากบัญชีที่ท่านได้ลงทะเบียนไว้เท่านั้น
            บริษัทขอสงวนสิทธิ์ในการยกเลิกยอดที่ไม่ได้โอนมาจากบัญชีที่ลงทะเบียนไว้
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
