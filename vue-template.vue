<template>

  <div id="component">
    <div v-id="is_mobile">Hi Mobile!</div>
  </div>
</template>

<script>
export default {
	data: function () {
	  return {
		state: {
		  is_mobile: false,
		  }
		}
	  }
	},
  methods: {
  
  }
}
</script>


<style scoped>

</style>
