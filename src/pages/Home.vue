<template>
	<div id="Home">

		<ParallaxLanding />

		<div class="test">
			<img src="../assets/cloud-left.svg" class="cloud-left"/>
		</div>

	</div>
</template>

<script>
import ParallaxLanding from '../components/organisms/ParallaxLanding.vue';
export default {
	name: "Home",
	components: { ParallaxLanding }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';
#Home {
	height: 100vh;
	perspective: 1px;
  transform-style: preserve-3d;
  overflow-x: hidden;
  overflow-y: scroll;
}

.test {
	height: 100vh;
	width: 100%;
	background-color: $pale-yellow;
	position: relative;

	.cloud-left {
		position: absolute;
		top: -100px;
		left: 0;
	}
}
</style>
