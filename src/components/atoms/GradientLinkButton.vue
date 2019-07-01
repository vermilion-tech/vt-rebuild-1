<!-- Variation of the the GradientButton.  Looks like a button, quacks like a
	link.  You know, because it is one. -->
<template>
	<router-link class="vt-gradient-btn" :class="{filled}"
		:to="{path}">
		{{ name }}
	</router-link>
</template>

<script>
export default {
	name: "GradientLinkButton",
	props: ['filled', 'name', 'path']
}
</script>
