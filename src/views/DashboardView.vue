<template>
  <div>
   <CheckInView :username="username"/> 
  </div>
  <div>
  </div>
</template>
<script>
import CheckInView from "../components/CheckInView.vue";
export default {
    data() {
        return {
            username: this.currentUser ?? "Saveline" 
        };
    },
    components: { CheckInView }
}
</script>
  
