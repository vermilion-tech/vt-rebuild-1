<!-- Your standard, default button.  This will likely be renamed in the future -->
<template>
	<button class="vt-btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name "GradientButton"
}
</script>

<style lang="scss" scoped>
.vt-btn {
	cursor: pointer;
}
</style>
