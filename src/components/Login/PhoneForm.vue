<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores'
import { storeToRefs } from 'pinia'
import TextInput from '../shared/TextInput.vue'
import SubmitButton from '../shared/SubmitButton.vue'
const phoneNumber = ref('')
const authStore = useAuthStore();
const { isCodeForm, errorMessage, loading } = storeToRefs(authStore)


const onSubmit = async (e) => {
  e.preventDefault();
  await authStore.login(phoneNumber.value);
}

</script>

<template>
  <div class="form-box" v-if="!isCodeForm">
    <p class="text-center mt-0">فرم ورود</p>
    <form @submit="onSubmit">
      <div class="form-group">
        <TextInput id="phone" label-title="شماره موبایل" placeholder="شماره موبایل" v-model="phoneNumber"
          :error-message="errorMessage" />
        <SubmitButton title="تایید" :loading="loading" />
      </div>
    </form>
  </div>
</template>
