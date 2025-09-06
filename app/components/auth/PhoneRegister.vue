<script lang="ts" setup>
import AlertError from '../AlertError.vue';
import { useRegisterStore } from "../../stores/register";


const emit = defineEmits(['updateStep']);
const regis = useRegisterStore();
const phone = ref("");

// state สำหรับเก็บ error message
const errorMessage = ref<string>("");

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  errorMessage.value = ""

  const res = await regis.registerPhone(phone.value)
  //console.log(res)
  if (res.status === 'error') {
    errorMessage.value = res.message
    return
  }

  if (res.status === 'success') {
    console.log("สมัครสำเร็จ:", res.message)
    emit('updateStep')
  }


}

</script>

<template>
  <div class="-notication-deposit">
    <div class="-header">สมัครสมาชิก</div>
    <div class="-content">
      <form @submit="handleSubmit">
        <!---->
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
                    <label for="input-484" class="v-label theme--light"
                      style="left: 0px; right: auto; position: absolute">เบอร์โทรศัพท์</label>
                    <input pattern="[0-9]*" inputmode="numeric" required="required" id="input-484" type="text"
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
            <div class="-checkbox -condition">
              <input type="checkbox" error-messages="" id="checkbox" name="checkbox" required="required" />
              <label for="checkbox">ฉันมีอายุ 20 ปีขึ้นไป</label>
            </div>
            <div>
              <AlertError :message="errorMessage" />
            </div>
            <div class="my-2">
              <button type="submit"
                class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
                <span class="v-btn__content">
                  ถัดไป
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""
                    class="-icon-register svg-inline--fa fa-chevron-right fa-w-8 ml-1">
                    <path fill="currentColor"
                      d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z">
                    </path>
                  </svg></span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div class="-box-register-message">
        มีบัญชีอยู่แล้ว ?
        <NuxtLink href="/login" class="">เข้าสู่ระบบ</NuxtLink>
      </div>
      <div class="-message-waring">
        ไม่ให้บุคคลอายุตํ่ากว่า 20 ปีบริบูรณ์ หรือไม่บรรลุนิติภาวะเข้าเล่น
      </div>
    </div>
  </div>
</template>
