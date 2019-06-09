<script>
import { Doughnut, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'doughnut-chart',
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
