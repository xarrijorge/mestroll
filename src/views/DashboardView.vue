<template>
  <div class="px-20 flex flex-col align-center dashboard">
    <header class="header">
      <CheckInView :username="username"/>
      <div class="buttonbox">
      <button class="prompt"> Send Prompt </button>
      <button @click="logout" class="logout hover:bg-red-500 py-2 px-4 rounded"> Log Out </button>
      </div>
    </header>
    <section class="charts">
      <article>
        <LineChartView />
      </article>
      <article>
            <th class="border border-slate-600 ...">EIT</th>
        <BarChartView />
      </article>
    </section>
    <main class="tables">
      <section class="excuses">
        <table class="attendance">
        <caption>
         Approved Excuses 
        </caption>
        <thead>
          <tr>
            <th class="border border-slate-600 ...">EIT</th>
            <th class="border border-slate-600 ...">Reason for Absence</th>
          </tr>
        </thead>
        <tbody v-for="item in excuses" :key="item.name">
          <tr>
            <td class="border border-slate-700">{{ item.name }}</td>
            <td class="border border-slate-700">{{ item.excuse}}</td>
          </tr>
        </tbody>
      </table>

      </section>
      <table class="attendance">
        <caption>
          Attendance
        </caption>
        <thead>
          <tr>
            <th class="border border-slate-600 ...">EIT</th>
            <th class="border border-slate-600 ...">Time in</th>
            <th class="border border-slate-600 ...">Country</th>
          </tr>
        </thead>
        <tbody v-for="person in attendance" :key="person.name">
          <tr>
            <td class="border border-slate-700">{{ person.name }}</td>
            <td class="border border-slate-700">{{ person.timestamp}}</td>
            <td class="border border-slate-700">{{ person.country}}</td>
          </tr>
        </tbody>
      </table>
    </main>
    <footer>

    </footer>
  </div>
</template>
<script>
import CheckInView from '../components/CheckInView.vue'
import LineChartView from '../components/charts/LineChartView.vue'
import BarChartView from '../components/charts/BarChartView.vue'

export default {
  components: { CheckInView, BarChartView, LineChartView },
  data() {
    return {
      username: this.currentUser ?? 'Fellow',
      attendance: [
        { name: 'Nkwi Loh', country: 'Cameroon', timestamp: "9:00" },
        { name: 'Sila Kironji', country: 'Kenya', timestamp: "9:00" },
        { name: 'Muthoni Peris Muriuki', country: 'Kenya', timestamp: "9:00" },
        { name: 'Maku Mazakpe', country: 'Uganda', timestamp: "9:00" },
        { name: 'Sika Nana Antwi', country: 'Ghana', timestamp: "9:00"},
        { name: 'Sara Kadoon', country: 'Nigeria' , timestamp: "9:00"},
      ],
      excuses: [
        { name: 'Kaba', excuse: 'Out Sick' },
        { name: 'Taz', excuse: 'Personal Emergency' },
        { name: 'Derek', excuse: 'Out Sick' },
        { name: 'Courtney', excuse: 'Eye Checkup' },
        { name: 'Nunya', excuse: 'Out Sick' },
        { name: 'Rawk', excuse: 'Out Sick' },
      ]
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.dashboard {
  padding: 20px;
  padding-bottom: 500px;
  width: 80vw;
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
}
.header {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header * {
  margin: 0 20px;
}
.logout {
  margin-left: auto;
}
.charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: 0 auto;
  margin-bottom: 30px;
  width: 100%;
  min-height: 40vh;
}
.tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
}
.attendance {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.attendance td,
.attendance th {
  border: 1px solid #ddd;
  padding: 8px;
}

.attendance tr:nth-child(even) {
  background-color: #f2f2f2;
}

.attendance tr:hover {
  background-color: #ddd;
}

.attendance th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #1d49a6;
  color: white;
}
.attendance caption {
  font-size: 20px;
}
.excuses {
  margin-right: 20px;
  /* padding: 20px; */
}
.logout{
  background-color: #E0474B;
  color: whitesmoke;
  margin-left: auto;
  padding: 10px;
}

.prompt{
  padding: 10px;
  background-color: #0038B0;
  color: whitesmoke;
  border-radius: 5px;
  
}
.buttonbox{
  width: auto;
  display: flex;
}

@media (max-width: 720px) {
  header{
    width: 90vw;
  }
  .buttonbox{
    flex-direction: column;
    font-size: 10px;
  }
  .buttonbox *{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .excuses{
    margin: 0;
  }
}
</style>
