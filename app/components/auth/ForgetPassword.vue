<script lang="ts" setup>
import AlertError from "../AlertError.vue";
import { useAuthStore } from '~/stores/auth'
import { useSharedStore } from '~/stores/shared'

const auth = useAuthStore()
const sharedStore = useSharedStore()

const phone = ref("");
const emit = defineEmits(["updateStep"]);
const errorMessage = ref<string>("");


const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const res = await auth.forgotPassword(phone.value)
  console.log(res)
  if (res.success) {
    sharedStore.updateForgetPasswprdData({
      phone: phone.value,
      token: res.token
    })

    emit('updateStep')
  } else {
    errorMessage.value = res.message
  }

};
</script>


<template>
  <div class="-forgetpassword-box">
    <form @submit="handleSubmit">
      <div class="-notication-deposit">
        <div class="-header">ลืมรหัสผ่าน</div>
        <div class="-content">
          <div class="-icon">
            <img src="/icon/profile/icon-password.png" alt="ลืมรหัสผ่าน" class="img-box" />
          </div>
          <div class="content_flex">
            <div class="content">
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
                      <label for="input-557" class="v-label theme--light"
                        style="left: 0px; right: auto; position: absolute">เบอร์โทรศัพท์</label>
                      <input pattern="[0-9]*" inputmode="numeric" required="required" id="input-557" type="text"
                        v-model="phone" />
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
              <AlertError :message="errorMessage" />
              <div class="my-2">
                <button type="submit"
                  class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
                  <span class="v-btn__content"> ตกลง </span>
                </button>
              </div>
              <div class="-box-register-message -top-space">
                มีบัญชีอยู่แล้ว ?
                <NuxtLink href="/login" class="">เข้าสู่ระบบ</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
