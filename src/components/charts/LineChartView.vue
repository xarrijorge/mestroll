<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip )

export default {
  name: 'LineChartView',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [
          {
            label: 'In Class',
            color: '#C3C7EF',
            backgroundColor: 'royalBlue',
            borderColor: '#c3c7ef',
            data: [50, 48, 52, 40, 45, 32, 50, 50],
            yAxisID: 'y'
          },
          {
            label: 'Absent',
            color: '#f87979',
            backgroundColor: 'pink',
            borderColor: '#f87979',
            data: [5, 4, 6, 4, 5, 3, 5, 8],
            yAxisID: 'y1'
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: true, // Set this to true to display the legend
          position: 'top' // You can change the position to "bottom", "left", "right"
        },
        tension: 0.3,
        // stacked: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            min: 0
          },
          y1: {
            min: 0,
            type: 'linear',
            display: true,
            position: 'right',

            // grid line settings
            grid: {
              drawOnChartArea: false // only want the grid lines for one axis to show up
            }
          }
        }
      }
    }
  }
}
</script>
