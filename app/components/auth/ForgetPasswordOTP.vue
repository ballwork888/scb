<script lang="ts" setup>
import AlertError from '../AlertError.vue';
import { useSharedStore } from '~/stores/shared'
import { useAuthStore } from '~/stores/auth'

const sharedStore = useSharedStore()
const auth = useAuthStore()

const emit = defineEmits(["updateStep"]);
const otp = ref("");
const errorMessage = ref<string>("");

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  const res = await auth.forgotPasswordOtp(sharedStore.forgetPasswordData.phone, sharedStore.forgetPasswordData.token, otp.value)

  if (res.success) {
    sharedStore.updateForgetPasswprdData({
      otp: otp.value
    })
    emit("updateStep");
  } else {
    errorMessage.value = res.message
  }

};

onMounted(() => {
  console.log(sharedStore.forgetPasswordData)
})

</script>
<template>
  <div class="-forgetpassword-box">
    <form @submit="handleSubmit">
      <div class="-notication-deposit">
        <div class="-header">ลืมรหัสผ่าน</div>
        <div class="-content">
          <div class="-icon">
            <img src="/icon/profile/icon-otp.png" alt="ลืมรหัสผ่าน" class="img-box" />
          </div>
          <div class="content_flex">
            <div class="content">
              <div
                class="v-input v-input--has-state v-input--dense theme--light v-text-field v-text-field--is-booted v-text-field--enclosed v-text-field--outlined error--text">
                <div class="v-input__control">
                  <div class="v-input__slot">
                    <fieldset aria-hidden="true">
                      <legend style="width: 0px">
                        <span class="notranslate">​</span>
                      </legend>
                    </fieldset>
                    <div class="v-text-field__slot">
                      <label for="input-567" class="v-label theme--light error--text"
                        style="left: 0px; right: auto; position: absolute">OTP</label>
                      <input pattern="[0-9]*" inputmode="numeric" required="required" id="input-567" type="text"
                        v-model="otp" />
                    </div>
                  </div>

                </div>

              </div>
              <AlertError :message="errorMessage" />
              <!---->
              <div class="my-2">

                <button type="submit"
                  class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
                  <span class="v-btn__content"> ตกลง </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
