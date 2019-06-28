<!-- Literally just a div with a class="row" -->
<template>
	<div class="row">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "Row"
}
</script>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-wrap: wrap;
}
</style>
