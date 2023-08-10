<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import TextInput from '../shared/TextInput.vue'
import SubmitButton from '../shared/SubmitButton.vue'

const code = ref('')
const authStore = useAuthStore();
const { isCodeForm, loading, errorMessage } = storeToRefs(authStore)


const onSubmit = async (e) => {
    e.preventDefault();
    await authStore.verify(code.value);
}

const editPhoneNumber = (e) => {
    e.preventDefault();
    authStore.isCodeForm = false;
    console.log(isCodeForm);
}
</script>

<template>
    <div class="form-box position-relative" v-if="isCodeForm" >
        <p class="text-center mt-0">ورود کد تایید</p>
        <form @submit="onSubmit">
            <div class="form-group">
                <TextInput id="phone" label-title="کد ورود" placeholder="کد ورود را وارد کنید" v-model="code"
                    :error-message="errorMessage" />
                <SubmitButton title="ورود" :loading="loading" />
            </div>
            <button @click="editPhoneNumber" class="btn-link align-absolute">ویرایش شماره همراه</button>
        </form>
    </div>
</template>
