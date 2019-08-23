<!-- A navbar designed to fit at the top -->
<template>

	<div class="navbar" :class="{'mobile-nav': $mq == 'smartphone' || $mq == 'tablet'}">

		<div class="brand">
			<img src="../../assets/vt-logo-wide.png"/>
		</div>

		<!-- Links proper.  Fits on the right-hand side -->
		<div class="navbar-right" v-if="$mq == 'desktop' || $mq =='xl'">

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

		<!-- Mobile drawer -->
		<div class="mobile-drawer" v-if="drawer">

			<div class="brand">
				<img src="../../assets/vt-logo-wide.png"/>
			</div>

			<GradientLinkButton
				class="offset-bottom"
				:filled="true"
				path=""
				name="Get a quote"/>

			<router-link v-for="page in pages" class="h6"
				:to="{ path: page.path}">
				{{ page.name }}
			</router-link>

		</div>

		<a class="hamburger" v-if="$mq == 'smartphone' || $mq == 'tablet'"
			@click.prevent="drawer = !drawer">
			<i class="material-icons">
				menu
			</i>
		</a>

	</div>

</template>

<script>
import GradientLinkButton from '../atoms/GradientLinkButton.vue';
export default {
	name: "Navbar",
	props: ['pages'],
	components: { GradientLinkButton },

	data: function() {
		return {
			drawer: false
		}
	}

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
	padding-top: 1rem;

	.brand {
		flex-grow: 1;

		img {
			max-width: 200px;
			margin: 2rem;
		}
	}

	.navbar-right {
		display: flex;
		align-items: flex-end;
		flex-grow: 0;
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

	.hamburger {
		margin-right: 3rem;
		color: $white;
		cursor: pointer;
	}

	.vt-gradient-btn {
		display: inline-block;
	}

}
</style>
