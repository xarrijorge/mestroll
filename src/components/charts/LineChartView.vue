<template>
    <Line
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
  
  ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
  
  export default {
    name: 'LineChartView',
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Line },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March', "April", "May", "June", "July", "August" ],
          datasets: [ { data: [50, 48, 52, 40, 45, 32, 50, 50,] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>