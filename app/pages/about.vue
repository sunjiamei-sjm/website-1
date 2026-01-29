<template>
    <div @click="goToabout()">关于我们</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goToabout = () => {
    router.push('/')
}
</script>
<style scoped></style>