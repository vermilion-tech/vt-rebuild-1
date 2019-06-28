<!-- At it's base, a div with a class of "col", but does have props for sizing
	purposes.  Props are optional, you can just feed it more classes -->
<template>
	<div class="col">
	</div>
</template>

<script>
export default {
	name: "Column",
	props: ['size', 'offset']
}
</script>

<style lang="scss" scoped>
.col {
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
}
</style>
