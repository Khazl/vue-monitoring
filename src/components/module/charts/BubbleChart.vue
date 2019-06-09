<script>
import { Bubble, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'bubble-chart',
  extends: Bubble,
  mixins: [reactiveProp],
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
