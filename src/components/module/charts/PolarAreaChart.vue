<script>
import { PolarArea, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'polar-area-chart',
  extends: PolarArea,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
