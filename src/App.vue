<template>
  <div>
    <div >
      <agenda-input />
      <agenda-show />
    </div>
  </div>
</template>

<script>
import AgendaInput from "./components/AgendaInput.vue";
import AgendaShow from "./components/AgendaShow.vue";

export default {
  name: "app",
  components: {
    AgendaInput,
    AgendaShow,
  },
};
</script>
