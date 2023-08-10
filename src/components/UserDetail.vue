<script setup>
import { useAuthStore } from '@/stores'
import { storeToRefs } from 'pinia'
const authStore = useAuthStore();
const { user } = storeToRefs(authStore)

const logOut = (e) => {
    e.preventDefault();
    authStore.logOut()
    window.location.reload()
}
</script>
<template>
    <div class="user-detail">
        <h2 class="text-center">با موفقیت وارد شد</h2>
        <div class="text-right">
            <span>نام :</span>
            <span class="font-bold">{{ user.name }}</span>
        </div>

        <div class="text-right">
            <span>شماره همراه :</span>
            <span class="font-bold">{{ user.phone }}</span>
        </div>
        <div class="d-flex justify-center">
            <button @click="logOut" class="btn-link mt-2 text-red">خروج</button>
        </div>
    </div>
</template>