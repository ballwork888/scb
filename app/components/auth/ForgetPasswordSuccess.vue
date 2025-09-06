<script lang="ts" setup>
import AlertError from "../AlertError.vue";
import { useAuthStore } from '~/stores/auth'
import { useSharedStore } from '~/stores/shared'

const auth = useAuthStore()
const sharedStore = useSharedStore()


</script>


<template>
    <div class="-forgetpassword-box">

        <div class="-notication-deposit">
            <div class="-header">ลืมรหัสผ่าน</div>
            <div class="-content">
                <div class="-icon">
                    <img src="/icon/profile/icon-password.png" alt="ลืมรหัสผ่าน" class="img-box" />
                </div>
                <div class="content_flex">
                    <div class="content">

                        <p>ระบบทำการเปลี่ยนแปลงรหัสผ่านใหม่เรียบร้อยแล้ว</p>
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

    </div>
</template>
