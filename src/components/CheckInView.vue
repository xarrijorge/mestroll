<template>
  <div class="main">
    <img src="../assets/mestroll.jpeg" alt="mestroll" class="logo">
    <section>
    <h1>Welcome {{ username }}</h1>
    <label for="rooms">Choose a room:</label>
    <select name="rooms" id="rooms">
      <option value="room1">Room1</option>
      <option value="room2">Room2</option>
      <option value="room3">Room3</option>
    </select>
    </section>
  </div>
</template>
<script>
export default {
  props: ["username"]
}
</script>
<style scoped>
  .main{
    display: flex;
    align-items: center;
  }
  h1{
    font-size: 2em;
    font-weight: bold;
  }
  label{
    font-weight: thin;
    font-size: 20px;
  }
  .logo{
  aspect-ratio: 16/9;
  height: 75px;
  margin-right: 20px;
}
@media(max-width: 720px){
  .logo{
    height: 50px;
  }
  h1{
    font-size: 1em;
  }
  label{
    font-size: 12px;
  }
}
</style>