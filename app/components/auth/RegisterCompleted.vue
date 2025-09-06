<script lang="ts" setup>
const emit = defineEmits(['updateStep']);
const handleSubmit = () => {
  emit('updateStep');
}

</script>

<template>
  <div class="-notication-deposit">
    <div class="-header">สมัครสมาชิกเรียบร้อย</div>
    <div class="-content">
      <!---->
      <div class="content_flex">
        <div class="content">
          <div class="icon"><img src="/ufabet-logo.png.webp?v=2" alt="" /></div>
          <h2 class="complete">คุณสมัครสมาชิก เรียบร้อยแล้ว</h2>
          <div class="my-2">
            <NuxtLink to="/login" class=""><button type="button"
                class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
                <span class="v-btn__content"> เข้าสู่ระบบ </span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
