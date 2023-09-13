<template v-if="isloaded === true">
  <div class="loading-container">
    <v-progress-circular :size="120" :width="8" color="#273339" indeterminate />
  </div>
</template>

<style lang="stylus" scoped>
.loading-container
	position: fixed
	top: 50%
	left: 50%
	transform: translate(-50%, -50%)
</style>
