<template >
  <div class="px-20 flex flex-col align-center dashboard">
    <header class="header">
      <CheckInView :username="username" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send Prompt
      </button>
      <button @click="logout" class="bg-yellow-500 logout hover:bg-yellow-700 py-2 px-4 rounded">
       Log Out 
      </button>

    </header>
    <section class="charts">
      <article>
        <LineChartView />
      </article>
      <article>
        <BarChartView />
      </article>
    </section>
    <main class="tables">
      <section class="excuses">
        <h2 class="underline">Approved Excuses</h2>
        <ul v-for="item in excuses" :key="item.name">
            {{ item.name }} - {{ item.excuse }}
        </ul>
      </section>
        <table class="attendance border-collapse border border-slate-500 table-auto">
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
          </tbody>
        </table>
    </main>
  </div>
</template>
<script>
import CheckInView from "../components/CheckInView.vue";
import LineChartView from "../components/charts/LineChartView"
import BarChartView from "../components/charts/BarChartView"
export default {
    data() {
        return {
            username: this.currentUser ?? "Saveline" 
        };
    },
    components: { CheckInView, LineChartView, BarChartView }
}
</script>
<style scoped>
.dashboard{
  padding: 20px;
  width: 80vw;
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
}
.header{
  margin: 20px 0;
  padding: 10px 0;
  display: flex;
  height: min-content;
}
.header * {
  margin: 0 20px;
}
.logout{
  margin-left: auto;
}
.charts{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  margin-bottom: 50px;
  width: 100%;
}
.tables{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
}
.attendance {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.attendance td, .attendance th {
  border: 1px solid #ddd;
  padding: 8px;
}

.attendance tr:nth-child(even){background-color: #f2f2f2;}

.attendance tr:hover {background-color: #ddd;}

.attendance th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #C2C7EF;
  color: white;
}
.attendance caption{
  font-size: 20px;
}
.excuses{
  border-right: 1px solid grey;
  margin-right: 20px;
  background-color: rgb(243, 238, 238);
  padding: 20px;
}
</style>
