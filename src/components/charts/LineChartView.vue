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
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
        datasets: [
          {
            label: 'In Class',
            color: '#1d49a6',
            backgroundColor: 'royalBlue',
            borderColor: '#4d83f7',
            data: [50, 48, 51, 40, 45, 32, 50, 50, 51, 49, 48, 51],
            yAxisID: 'y'
          },
          {
            label: 'Absent',
            color: '#E0474B',
            backgroundColor: 'pink',
            borderColor: '#E0474B',
            data: [1, 3, 0, 11, 6, 19, 1, 1, 0, 2, 3, 0 ],
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
