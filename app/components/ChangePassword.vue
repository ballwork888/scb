<template>
  <div class="-block-w">
    <div class="-box-changepassword">
      <form>
        <div class="-changepassword-inner">
          <div
            class="v-input v-input--has-state theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed v-text-field--placeholder error--text"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-670"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >รหัสผ่านเดิม</label
                  ><input required="required" id="input-670" type="password" />
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light error--text" role="alert">
                  <div class="v-messages__wrapper">
                    <div
                      class="v-messages__message message-transition-enter-to"
                    >
                      รหัสผ่านเดิม
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="v-input v-input--has-state theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed v-text-field--placeholder error--text"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-673"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >รหัสผ่านใหม่</label
                  ><input required="required" id="input-673" type="password" />
                </div>
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">
                    <button
                      type="button"
                      aria-label="รหัสผ่านใหม่ appended action"
                      class="v-icon notranslate v-icon--link mdi mdi-eye-off theme--light error--text"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light error--text" role="alert">
                  <div class="v-messages__wrapper">
                    <div class="v-messages__message">รหัสผ่านใหม่</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="v-input v-input--has-state theme--light v-text-field v-text-field--single-line v-text-field--solo v-text-field--is-booted v-text-field--enclosed v-text-field--placeholder error--text"
          >
            <div class="v-input__control">
              <div class="v-input__slot">
                <div class="v-text-field__slot">
                  <label
                    for="input-677"
                    class="v-label theme--light"
                    style="left: 0px; right: auto; position: absolute"
                    >ยืนยันรหัสผ่านใหม่</label
                  ><input required="required" id="input-677" type="password" />
                </div>
                <div class="v-input__append-inner">
                  <div class="v-input__icon v-input__icon--append">
                    <button
                      type="button"
                      aria-label="ยืนยันรหัสผ่านใหม่ appended action"
                      class="v-icon notranslate v-icon--link mdi mdi-eye-off theme--light error--text"
                    ></button>
                  </div>
                </div>
              </div>
              <div class="v-text-field__details">
                <div class="v-messages theme--light error--text" role="alert">
                  <div class="v-messages__wrapper">
                    <div class="v-messages__message">
                      พิมพ์รหัสผ่านใหม่อีกครั้ง
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---->
          <button
            type="button"
            class="-btn-style bnt-submit v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
          >
            <span class="v-btn__content"> ตกลง </span>
          </button>
          <button
            type="button"
            class="-btn-style bnt-cancel v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
          >
            <span class="v-btn__content"> ยกเลิก </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
