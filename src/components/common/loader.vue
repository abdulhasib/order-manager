<template v-if="isloaded === true">
  <div class="loading-container">
    <v-progress-circular
      :size="80"
      :width="8"
      color="blue-grey"
      indeterminate
    />
  </div>
</template>

<style lang="stylus">
	.loading-container
		position: fixed
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
</style>
