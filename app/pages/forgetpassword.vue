<script lang="ts" setup>
import AlertError from "~/components/AlertError.vue";
import ForgetPassword from "~/components/auth/ForgetPassword.vue";
import ForgetPasswordEnterPassword from "~/components/auth/ForgetPasswordEnterPassword.vue";
import ForgetPasswordOTP from "~/components/auth/ForgetPasswordOTP.vue";
import ForgetPasswordSuccess from "~/components/auth/ForgetPasswordSuccess.vue";

const step = useState<number>("step", () => 1);

definePageMeta({
  layout: "auth", // Uses layouts/admin.vue
});

useHead({
  title: "ลืมรหัสผ่าน",
  meta: [
    {
      name: "description",
      content:
        "คาสิโนชั้นนำมาแรง สล็อตออนไลน์ จ่ายจริง สล็อต เกมส์ยิงปลา แตกง่าย บาคาร่า เครดิตฟรี ฝาก-ถอน อัตโนมัติ",
    },
  ],
});

function nextStep() {
  step.value += 1;
}
</script>
<template>
  <div class="-homepage-box -register-info">
    <div class="-inner-box">
      <div class="-card-box">
        <div class="-affiliate-box">
          <ForgetPassword v-if="step === 1" @updateStep="nextStep" />
          <ForgetPasswordOTP v-if="step === 2" @updateStep="nextStep" />
          <ForgetPasswordEnterPassword v-if="step === 3" @updateStep="nextStep" />
          <ForgetPasswordSuccess v-if="step === 4" @updateStep="nextStep" />
          <!---->
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
