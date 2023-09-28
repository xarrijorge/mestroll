<template>
  <div>
    <p>Welcome {{ username }}</p>
    <label for="rooms">Choose a room:</label>

    <select name="rooms" id="rooms">
      <option value="room1">Room1</option>
      <option value="room2">Room2</option>
      <option value="room3">Room3</option>
    </select>
  </div>
</template>
<script>
export default {
  props: ["username"]
}
</script>
