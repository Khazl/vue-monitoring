<template>
    <div class="module">
        <h2>{{ headline }}</h2>
        <ModuleChart :design="design"></ModuleChart>
    </div>
</template>

<script>
import ModuleChart from '@/components/module/ModuleChart.vue';

export default {
    name: 'module',
    props: {
        headline: String,
        design: {
            type: String,
            validator: val => ['bar', 'horizontal-bar', 'doughnut', 'line', 'pie', 'polar-area', 'radar', 'bubble', 'scatter'].includes(val),
        }
    },
    components: {
        ModuleChart,
    }
};
</script>

<style lang="scss">

</style>
