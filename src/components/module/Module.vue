<template>
    <div class="module">
        <ModuleHeadline>{{ headline }}</ModuleHeadline>
        <ModuleChart v-if="chart" :design="chart"></ModuleChart>
    </div>
</template>

<script>
import ModuleHeadline from '@/components/module/ModuleHeadline.vue';
import ModuleChart from '@/components/module/ModuleChart.vue';

export default {
    name: 'module',
    props: {
        headline: String,
        chart: {
            type: String,
            validator: val => ['bar', 'horizontal-bar', 'doughnut', 'line', 'pie', 'polar-area', 'radar', 'bubble', 'scatter'].includes(val),
        },
    },
    components: {
        ModuleHeadline,
        ModuleChart,
    },
};
</script>

<style lang="scss">

</style>
