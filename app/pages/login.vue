<script setup lang="ts">

import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = useRouter();
const auth = useAuthStore();

// state
const phone = ref("");
const password = ref("");
const remember = ref(false);
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

definePageMeta({
  layout: "auth",
});

useHead({
  title: "ทางเข้า UFABET",
  meta: [
    {
      name: "description",
      content:
        "ทางเลือกที่ดีที่สุดทางเข้า UFABET เว็บเดิมพันที่เปิดโอกาสให้ผู้เล่นที่สนใจอยากเล่นเกมออนไลน์ ลงทุนน้อยกำไรงาม ufabet เว็บตรงทางเข้ามือถือ รองรับทุกแพลตฟอร์ม",
    },
  ],
});

const signIn = async () => {
  try {
    const profile = await auth.login(phone.value, password.value)
    //console.log("Login success ✅", profile)
    //setData("isLogin", true);
    router.replace({ path: "/" });
  } catch (err) {
    console.error("Login failed ❌", err)
    alert("เบอร์โทรศัพท์หรือรหัสผ่านไม่ถูกต้อง")
  }
}

</script>

<template>
  <div class="-homepage-box -login">
    <div class="-inner-box">
      <div class="-logo">
        <img src="/ufabet-logo.png.webp?v=6" alt="UFABET" />
      </div>

      <h2>กรอกข้อมูล เพื่อเข้าสู่ระบบ</h2>

      <form @submit.prevent="signIn">
        <div class="content_flex">
          <div class="content">
            <!-- เบอร์โทรศัพท์ -->
            <div class="v-input v-input--dense theme--light v-text-field v-text-field--outlined">
              <div class="v-input__control">
                <label for="phone" class="v-label theme--light">เบอร์โทรศัพท์</label>
                <div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <input id="phone" v-model="phone" pattern="[0-9]*" inputmode="numeric" required type="text"
                      placeholder="กรอกเบอร์โทรศัพท์" />
                  </div>
                </div>
              </div>
            </div>

            <!-- รหัสผ่าน -->
            <div class="v-input v-input--dense theme--light v-text-field v-text-field--outlined password-field">
              <div class="v-input__control">
                <label for="password" class="v-label theme--light">รหัสผ่าน</label>
                <div class="v-input__slot">
                  <div class="v-text-field__slot">
                    <input id="password" v-model="password" required :type="showPassword ? 'text' : 'password'"
                      placeholder="กรอกรหัสผ่าน" />
                    <button type="button" class="password-toggle-btn" @click="togglePassword" tabindex="-1">
                      <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="eye-icon">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="eye-icon">
                        <path
                          d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                        </path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- จดจำรหัสผ่าน -->
            <div class="v-input theme--dark v-input--selection-controls">
              <div class="v-input__control">
                <div class="v-input__slot">
                  <input id="remember" v-model="remember" type="checkbox" />
                  <label for="remember" class="v-label theme--dark">จำรหัสผ่าน</label>
                </div>
              </div>
            </div>

            <!-- ปุ่มเข้าสู่ระบบ -->
            <div class="my-2">
              <button type="submit" class="-btn-style bnt-submit v-btn v-btn--block">
                <span class="v-btn__content"> เข้าสู่ระบบ </span>
              </button>
            </div>

            <!-- ลิงก์อื่น -->
            <div class="my-2 -login-option-flex">
              <NuxtLink href="/register">สมัครสมาชิก</NuxtLink>
              <div class="-text-forgetpassword">
                <NuxtLink href="/forgetpassword">ลืมรหัสผ่าน ?</NuxtLink>
              </div>
            </div>

            <!-- ติดต่อ -->
            <div class="-contact">
              *หากมีข้อสงสัย กรุณาติดต่อ
              <a href="https://lin.ee/dams8xT" target="_blank" title="ฝ่ายบริการลูกค้า">
                ฝ่ายบริการลูกค้า
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
.password-field {
  position: relative;
}

.v-text-field__slot {
  position: relative;
  display: flex;
  align-items: center;
}

.password-toggle-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: color 0.2s ease;
}

.password-toggle-btn:hover {
  color: #333;
}

.eye-icon {
  width: 18px;
  height: 18px;
}

/* Adjust input padding to make room for button */
.password-field input {
  padding-right: 45px !important;
}

/* Dark theme support */
.theme--dark .password-toggle-btn {
  color: #aaa;
}

.theme--dark .password-toggle-btn:hover {
  color: #fff;
}
</style>