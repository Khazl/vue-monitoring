<script>
import { Pie, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'pie-chart',
  extends: Pie,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
