<!-- Literally a div with a class="container" -->
<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Container"
}
</script>

<style lang="scss">
@import '../../styles/breakpoints';
.container {
	width: 100%;
	padding-right: 1.5rem;
	padding-left: 1.5rem;
	margin-right: auto;
	margin-left: auto;

	@include smartphone {
		max-width: 540px;
	}

	@include tablet {
		max-width: 720px;
	}

	@include desktop {
		max-width: 960px;
	}

	@include xl-desktop {
		max-width: 1140px;
	}
	
}
</style>
