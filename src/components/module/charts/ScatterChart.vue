<script>
import { Scatter, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'scatter-chart',
  extends: Scatter,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
