<!-- Parallax landing element.  A nice, dreamy, above-fold component for when
	the user first shows up -->
<template>
	<div class="parallax-container">

		<h1>IT for human beings who do as they dream.</h1>
		<img src="../../assets/icons-left.svg" class="icons-left"/>
		<img src="../../assets/icons-right.svg" class="icons-right"/>
		<img src="../../assets/clouds-left.svg" class="clouds-left"/>
		<img src="../../assets/falling-clouds.svg" class="falling-clouds"/>

	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../../styles/breakpoints';
@import '../../styles/colors';
.parallax-container {
	height: 100vh;
	background-color: $black;
	color: $white;
	transform: translateZ(-1px) scale(2);
	z-index: -1px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	text-align: center;
}

.icons-left {
	position: absolute;
	left: 0rem;
	top: 20rem;

	@include desktop {
		left: 3rem;
	}
}

.icons-right {
	position: absolute;
	top: 20rem;
	right: 0rem;

	@include desktop {
		right: 9rem;
	}
}

.clouds-left {
	position: absolute;
	left: 0;
	bottom: 0;
}

.falling-clouds {
	position: absolute;
	bottom: -5rem;
	right: 0rem;

	@include desktop {
		right: 5rem;
	}
}
</style>
