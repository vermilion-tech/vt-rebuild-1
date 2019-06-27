<!-- Your standard, default button.  This will likely be renamed in the future -->
<template>
	<button class="vt-gradient-btn" :class="{filled}">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "GradientButton",
	props: ['filled']
}
</script>
