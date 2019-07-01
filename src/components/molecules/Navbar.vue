<!-- A navbar designed to fit at the top -->
<template>
	<div class="navbar">

		<div>
			<!-- placeholder for image -->
		</div>

		<!-- Links proper.  Fits on the right-hand side -->
		<div class="menu">
			<router-link v-for="page in pages" class="h6"
				:to="{ path: page.path}">
				{{ page.name }}
			</router-link>
		</div>

	</div>
</template>

<script>
export default {
	name: "Navbar",
	props: ['pages']
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors';
.navbar {
	background-color: $purple-dark;
	height: 7.5rem;

	.menu {
		align-items: center;
		display: flex;
		float: right;
		height: 100%;
	}

	a {
		color: $white;
		display: block;
		flex-grow: 0;
		padding: 2rem;
	}
}
</style>
