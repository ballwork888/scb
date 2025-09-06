<script setup lang="ts">
import Deposit from "~/components/Deposit.vue";
import Promotion from "~/components/Promotion.vue";
import QRPayment from "~/components/QRPayment.vue";
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()


interface Promotion {
  id: number;
  img: string;
  name: string;
}

const mode = useState<String>("mode", () => "deposit");
const promotion = useState<Promotion | null>("promotion", () => null);

const handleChangeMode = (_mode: String) => {
  mode.value = _mode;
};

onMounted(async () => {
  // ตรวจสอบว่ามีข้อมูลใน store แล้วหรือยัง
  if (!authStore.user) {
    await authStore.loadUserFromStorage()
  }
  if (!authStore.user) {
    console.log('No user found, redirecting to login')
    await navigateTo('/login')
    return
  }

  if (authStore.user?.pending_request) {
    mode.value = 'payment'
  }
})



const handleChangePromotion = (_promotion: Promotion | null) => {
  promotion.value = _promotion;
};
</script>

<template>
  <div class="-homepage-box -normal-info">
    <div class="-inner-box">
      <div class="-card-box">
        <div class="-affiliate-box">
          <div>
            <div class="-deposit-box">
              <form>
                <div class="-popup-box1">
                  <div class="content_play">
                    <Deposit v-if="mode == 'deposit'" @mode="handleChangeMode" />
                    <Promotion v-if="mode == 'promotion'" @mode="handleChangeMode" @promotion="handleChangePromotion" />
                    <QRPayment v-if="mode == 'payment'" />
                  </div>
                </div>
              </form>
            </div>
            <div><!----></div>
            <div>
              <div><!----></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
