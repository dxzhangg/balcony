<template>
    <div>
        <my-header />
        <router-view />
    </div>
</template>

<script>
import MyHeader from './components/Header.vue'

export default {
    name: 'Layout',
    components: {
        MyHeader
    }
}
</script>