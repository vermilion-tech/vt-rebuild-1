<!-- A navbar designed to fit at the top -->
<template>
	<div class="navbar">

		<div>
			<!-- placeholder for image -->
		</div>

		<!-- Links proper.  Fits on the right-hand side -->
		<div class="navbar-right">

			<div class="menu">
				<router-link v-for="page in pages" class="h6"
					:to="{ path: page.path}">
					{{ page.name }}
				</router-link>
			</div>

			<GradientLinkButton
				class="offset-bottom"
				:filled="true"
				path=""
				name="Get a quote"/>
		</div>

	</div>
</template>

<script>
import GradientLinkButton from '../atoms/GradientLinkButton.vue';
export default {
	name: "Navbar",
	props: ['pages'],
	components: { GradientLinkButton }
}
</script>

<style lang="scss" scoped>
@import '../../styles/colors';
.navbar {
	background-color: lighten($purple-dark, 7%);
	height: 7.5rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	.navbar-right {
		display: flex;
		align-items: flex-end;
	}

	.menu {
		display: inline-flex;
		height: 100%;
		align-items: center;

		a {
			color: $white;
			display: block;
			flex-grow: 0;
			padding: 2rem;
		}
	}

	.vt-gradient-btn {
		display: inline-block;
	}

}
</style>
