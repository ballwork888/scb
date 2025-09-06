<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useSharedStore } from '~/stores/shared'

const authStore = useAuthStore()
const sharedStore = useSharedStore()

onMounted(async () => {
  console.log('promotion Mounted')
  if (!authStore.user) {
    await authStore.loadUserFromStorage()
    //console.log(authStore.user)
  }
})


interface Promotion {
  id: string;
  img: string;
  name: string;
}

// ดึง promotions จาก authStore
const promotions = computed<Promotion[]>(() => {
  if (!authStore.user?.promotion_ids) {
    return []
  }

  // แปลง object promotion_ids เป็น array
  return Object.entries(authStore.user.promotion_ids).map(([id, name]) => ({
    id: id,
    img: "/logo.png", // ใช้รูปเดียวกันทุก promotion หรือปรับตามต้องการ
    name: name
  }))
})



const emit = defineEmits(["mode", "promotion"]);
const handleChangeMode = () => {
  emit("mode", "deposit");
};

const handleChangePromotion = (promotion: Promotion) => {
  sharedStore.updatePromotionData({
    isPromotionSet: true,
    name: promotion.name,
    id: promotion.id
  })
  handleChangeMode();
};
</script>
<template>
  <form>
    <div class="-popup-box1 -notication-deposit">
      <div class="-header">เลือกโปรโมชั่น</div>
      <div class="content_play1 -content">
        <div class="-getpromotion-box">
          <div class="-pro-box" v-for="(promotion, index) in promotions" :key="index"
            @click="handleChangePromotion(promotion)">
            <div class="-img">
              <img src="/logo.png" :alt="promotion.name" />
            </div>
            <div class="-title">{{ promotion.name }}</div>
          </div>
        </div>
        <div class="my-2">
          <button type="button" @click="handleChangeMode"
            class="-bnt-promotion v-btn v-btn--block v-btn--outlined theme--light v-size--default grey--text text--lighten-1">
            <span class="v-btn__content"> ย้อนกลับ </span>
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
