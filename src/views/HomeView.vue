<script setup>
import LoginForm from '@/components/Login/LoginForm.vue'
import UserDetail from '@/components/UserDetail.vue'
import { useAuthStore } from '@/stores'
import { storeToRefs } from 'pinia'
const authStore = useAuthStore();
const { user } = storeToRefs(authStore)
</script>

<template>
  <main>
    <login-form v-if="!user" />
    <UserDetail v-else />
  </main>
</template>
<style>
.user-detail {
  background: #ccc;
  padding: 20px 56px;
  border-radius: 7px;
}
</style>