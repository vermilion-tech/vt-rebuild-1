<!-- A navbar designed to fit at the top -->
<template>

	<div class="navbar">

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

		<!-- Mobile Menu -->
		<div class="mobile-nav" v-if="drawer && $mq == 'tablet' || $mq == 'smartphone'">

			<div class="overlay">
			</div>

			<div class="mobile-drawer">

				<div class="text-center vt-m-2">
					<div class="brand">
						<img src="../../assets/vt-logo-wide.png"/>
					</div>

					<GradientLinkButton
						class="offset-bottom"
						:filled="true"
						path=""
						name="Get a quote"/>
				</div>

				<div class="menu">

					<router-link v-for="page in pages" class="h5"
						:to="{ path: page.path}">
						{{ page.name }}
					</router-link>

				</div>

			</div>

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

.mobile-nav {

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: $black;
		opacity: 0.8;
	}

	.mobile-drawer {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 1;
		width: 95%;
		height: 100%;
		background-color: lighten($purple-dark, 7%);

		.menu {
			display: block;

			a {
				background-color: $pale-yellow;
				color: $maroon;
				text-transform: uppercase;
				border-bottom: 1px solid darken($pale-yellow, 20%);
			}
		}
	}

}

</style>
