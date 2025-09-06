<script lang="ts" setup>
import AlertError from '../AlertError.vue';
import { useRegisterStore } from "@/stores/register"
import { ref, computed } from 'vue'

const regis = useRegisterStore()
const emit = defineEmits(["updateStep"]);

// Reactive data
const password = ref('')
const password_confirmation = ref('')
const passwordError = ref('')


// Computed property to check if passwords match
const passwordsMatch = computed(() => {
  if (!password.value || !password_confirmation.value) return true
  return password.value === password_confirmation.value
})

// Password validation rules
const isPasswordValid = computed(() => {
  const pwd = password.value
  if (!pwd) return false

  // Check length (8-15 characters)
  if (pwd.length < 8 || pwd.length > 15) return false

  // Check for at least one lowercase letter
  if (!/[a-z]/.test(pwd)) return false

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(pwd)) return false

  // Check for at least one number
  if (!/[0-9]/.test(pwd)) return false

  return true
})

// Check passwords match when user types
const checkPasswordMatch = () => {
  if (password_confirmation.value && !passwordsMatch.value) {
    passwordError.value = 'รหัสผ่านไม่ตรงกัน'
  } else {
    passwordError.value = ''
  }
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  // Validate password
  if (!isPasswordValid.value) {
    passwordError.value = 'รหัสผ่านไม่ตรงตามเงื่อนไข'
    return
  }

  // Check if passwords match
  if (!passwordsMatch.value) {
    passwordError.value = 'รหัสผ่านไม่ตรงกัน'
    return
  }

  // Clear error and emit
  passwordError.value = ''

  const res = await regis.setPassword(password.value, password_confirmation.value)
  if (res.status === 'success') {
    console.log("สมัครสำเร็จ:", res.message)
    emit('updateStep')
  }

}

</script>

<template>
  <form @submit="handleSubmit">
    <div class="-notication-deposit">
      <div class="-header">รหัสผ่าน</div>
      <div class="-content">
        <div class="content_flex">
          <div class="content">
            <!-- Password Input -->
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
                    <label for="input-494" class="v-label theme--light"
                      style="left: 0px; right: auto; position: absolute">ตั้งรหัสผ่าน</label>
                    <input v-model="password" required="required" id="input-494" type="password"
                      @input="checkPasswordMatch" />
                  </div>
                  <div class="v-input__append-inner">
                    <div class="v-input__icon v-input__icon--append">
                      <button type="button" aria-label="ตั้งรหัสผ่าน appended action"
                        class="v-icon notranslate v-icon--link mdi mdi-eye-off theme--light"></button>
                    </div>
                  </div>
                </div>
                <div class="v-text-field__details">
                  <div class="v-messages theme--light">
                    <div class="v-messages__wrapper"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Confirm Password Input -->
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
                    <label for="input-498" class="v-label theme--light"
                      style="left: 0px; right: auto; position: absolute">พิมพ์รหัสผ่านอีกครั้ง</label>
                    <input v-model="password_confirmation" required="required" id="input-498" type="password"
                      @input="checkPasswordMatch" />
                  </div>
                  <div class="v-input__append-inner">
                    <div class="v-input__icon v-input__icon--append">
                      <button type="button" aria-label="พิมพ์รหัสผ่านอีกครั้ง appended action"
                        class="v-icon notranslate v-icon--link mdi mdi-eye-off theme--light"></button>
                    </div>
                  </div>
                </div>
                <div class="v-text-field__details">
                  <div class="v-messages theme--light">
                    <div class="v-messages__wrapper"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Error Messages -->
            <div v-if="passwordError" class="error-message" style="color: red; margin: 10px 0; font-size: 14px;">
              {{ passwordError }}
            </div>

            <div>
              <AlertError />
            </div>

            <div class="my-2">
              <button type="submit" :disabled="!passwordsMatch || !isPasswordValid"
                class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4"
                :class="{ 'disabled-btn': !passwordsMatch || !isPasswordValid }">
                <span class="v-btn__content"> ตกลง </span>
              </button>
            </div>

            <div class="my-2">
              <div class="-box-waring" style="margin-bottom: 5px">
                <ul>
                  <li>รหัสผ่านมีความยาว 8-15 ตัวอักษร</li>
                  <li>ต้องเป็นภาษาอังกฤษ ตัวเล็ก ตัวใหญ่และตัวเลข อย่างละตัว</li>
                  <li>รหัสผ่านต้องมี ตัวอักษรภาษาอังกฤษอย่างน้อย 1 ตัว</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>
.disabled-btn {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  background-color: #ffebee;
  border: 1px solid #f44336;
  border-radius: 4px;
  padding: 8px 12px;
}
</style>