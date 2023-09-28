<template>
  <div class="px-20 flex flex-col align-center">
    <div class="flex justify-between align-center">
      <CheckInView :username="username" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded teal">
        Send Prompt
      </button>
    </div>
    <section class="flex w-4/5">
      <article class="w-1/2">
        <LineChartView />
      </article>
      <article class="w-1/2">
        <BarChartView />
      </article>
    </section>
    <main class="flex flex-row pt-500px">
      <section class="excuses w-1/2">
        <h2 class="underline">Approved Excuses</h2>
        <ul v-for="item in excuses" :key="item.name">
            {{ item.name }} - {{ item.excuse }}
        </ul>
      </section>
        <table class="border-collapse border border-slate-500 table-auto w-1/2">
          <caption>
            Attendance
          </caption>
          <thead>
            <tr>
              <th class="border border-slate-600 ...">EIT</th>
              <th class="border border-slate-600 ...">Time in</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-700 ...">Maku</td>
              <td class="border border-slate-700 ...">dwIndianapolis</td>
            </tr>
            <tr>
              <td class="border border-slate-700 ...">Saveline</td>
              <td class="border border-slate-700 ...">Columbus</td>
            </tr>
            <tr>
              <td class="border border-slate-700 ...">Sila</td>
              <td class="border border-slate-700 ...">Detroit</td>
            </tr>
          </tbody>
        </table>
    </main>
  </div>
</template>
<script>
import CheckInView from '../components/CheckInView.vue'
import LineChartView from '../components/charts/LineChartView.vue'
import BarChartView from '../components/charts/BarChartView.vue'

export default {
  data() {
    return {
      username: this.currentUser ?? 'Saveline',
      excuses: [{name: "Xarri", excuse: "Out Sick"}, {name: "Taz", excuse: "Personal Emergency"}]
    }
  },
  components: { CheckInView, BarChartView, LineChartView }
}
</script>
