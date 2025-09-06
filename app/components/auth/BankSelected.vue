<script lang="ts" setup>
import AlertError from '../AlertError.vue';
import { useRegisterStore } from "@/stores/register"

const emit = defineEmits(["updateStep"]);
const bank = useState<String>("bank", () => "");
const bankName = useState<String>("bankName", () => "");
const regis = useRegisterStore()

const errorMessage = ref<string>("");
// Reactive data
const account_number = ref('')
const name = ref('')
const line = ref('')


const handleSubmit = async (e: Event) => {
  e.preventDefault()
  errorMessage.value = ""
  //console.log(line.value)
  const res = await regis.setBank(bank.value, account_number.value, name.value, line.value)
  console.log(res)
  //emit("updateStep");
  if (res.status === 'error') {
    errorMessage.value = res.message
    return
  }

  if (res.status === 'success') {
    console.log("สมัครสำเร็จ:", res.message)
    emit('updateStep')
  }

};

const changeBank = (key: String, name: String) => {
  bank.value = key;
  bankName.value = name;
};


</script>


<template>
  <form @submit="handleSubmit">
    <div class="-notication-deposit">
      <div class="-header">บัญชีธนาคาร</div>
      <div class="bank_content -content">
        <div class="-select-bank">เลือกธนาคาร</div>
        <div class="bank_flex">
          <div class="bank_box bank_kbank" @click="changeBank('KBANK', 'ธนาคารกสิกรไทย')"
            :class="{ 'is-active': bank === 'KBANK' }">

            <img src="/images/bank/kbank.svg" />
          </div>
          <div class="bank_box bank_scb" @click="changeBank('SCB', 'ธนาคารไทยพาณิชย์')"
            :class="{ 'is-active': bank === 'SCB' }">

            <img src="/images/bank/scb.svg" />
          </div>
          <div data-bank="BBL" class="bank_box bank_bbl" @click="changeBank('BBL', 'ธนาคารกรุงเทพ')"
            :class="{ 'is-active': bank === 'BBL' }">

            <img src="/images/bank/bbl.svg" />
          </div>
          <div class="bank_box bank_bay" @click="changeBank('BAY', 'ธนาคารกรุงศรีอยุธยา')"
            :class="{ 'is-active': bank === 'BAY' }">

            <img src="/images/bank/bay.svg" />
          </div>
          <div class="bank_box bank_ktb" @click="changeBank('KTB', 'ธนาคารกรุงไทย')"
            :class="{ 'is-active': bank === 'KTB' }">

            <img src="/images/bank/ktb.svg" />
          </div>
          <div class="bank_box bank_ttb" @click="changeBank('TTB', 'ธนาคารทหารไทยธนชาต')"
            :class="{ 'is-active': bank === 'TTB' }">

            <img src="/images/bank/ttb.svg" />
          </div>
          <div class="bank_box bank_gsb" @click="changeBank('GSB', 'ธนาคารออมสิน')"
            :class="{ 'is-active': bank === 'GSB' }">

            <img src="/images/bank/gsb.svg" />
          </div>
          <div class="bank_box bank_baac" @click="changeBank('BAAC', 'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร')"
            :class="{ 'is-active': bank === 'BAAC' }">

            <img src="/images/bank/baac.svg" />
          </div>
          <div class="bank_box bank_uob" @click="changeBank('UOB', 'ธนาคารยูโอบี')"
            :class="{ 'is-active': bank === 'UOB' }">

            <img src="/images/bank/uob.svg" />
          </div>
          <div class="bank_box bank_tisco" @click="changeBank('TISCO', 'ธนาคารทิสโก้')"
            :class="{ 'is-active': bank === 'TISCO' }">

            <img src="/images/bank/tisco.svg" />
          </div>
          <div class="bank_box bank_cimb" @click="changeBank('CIMB', 'ธนาคารซีไอเอ็มบี')"
            :class="{ 'is-active': bank === 'CIMB' }">

            <img src="/images/bank/cimb.svg" />
          </div>
          <div class="bank_box bank_lhb" @click="changeBank('LHB', 'ธนาคารแลนด์ แอนด์ เฮ้าส์')"
            :class="{ 'is-active': bank === 'LHB' }">

            <img src="/images/bank/lhb.svg" />
          </div>
          <div class="bank_box bank_ghb" @click="changeBank('GHB', 'ธนาคารอาคารสงเคราะห์')"
            :class="{ 'is-active': bank === 'GHB' }">

            <img src="/images/bank/ghb.svg" />
          </div>
          <div class="bank_box bank_kk" @click="changeBank('KK', 'ธนาคารเกียรตินาคินภัทร')"
            :class="{ 'is-active': bank === 'KK' }">

            <img src="/images/bank/kk.svg" />
          </div>
        </div>
        <div class="content" v-if="bankName">
          <div class="-bank-name">{{ bankName }}</div>
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
                  <label for="input-511" class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute">เลขที่บัญชี*</label>
                  <input pattern="[0-9]*" inputmode="numeric" required="required" id="input-511" type="text"
                    v-model="account_number" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
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
                  <label for="input-514" class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute">ชื่อ-สกุล*</label>
                  <input required="required" id="input-514" type="text" v-model="name" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light">
                  <div class="v-messages__wrapper"></div>
                </div>
              </div>
            </div>
          </div>
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
                  <label for="input-517" class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute">ไลน์ไอดี ถ้าไม่มีให้ใส่เบอร์มือถือ*</label>
                  <input required="required" id="input-517" type="text" v-model="line" />
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
          <div>
            <AlertError :message="errorMessage" />
          </div>
          <div class="my-2">
            <button type="submit"
              class="-btn-style bnt-submit v-btn v-btn--block v-btn--is-elevated v-btn--has-bg theme--light v-size--default darken-4">
              <span class="v-btn__content"> ตกลง </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
