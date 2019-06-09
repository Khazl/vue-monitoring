<script>
import { Radar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'radar-chart',
  extends: Radar,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
