<!-- A form label designed to "float" over a form input. -->
<template>
	<label class="vt-floating-label" :for="elementId">{{ name }}</label>
</template>

<script>
export default {
	name: "FloatingFormLabel",
	props: ['element-id', 'name']
}
</script>

<style lang="scss" scoped>

</style>
