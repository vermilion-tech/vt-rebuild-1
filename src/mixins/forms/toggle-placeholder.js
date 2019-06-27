/**
 * Mixin for the togglePlaceholder method, a method for form inputs that accept
 * some form of text as a value.
 * * * * */

export default {

	data: function() {
		return {
			focused: false,
			showPlaceholder: false
		}
	},

	methods: {
		togglePlaceholder: function(isFocused) {

			this.focused = isFocused;

			if (isFocused && this.value == '') {
				this.showPlaceholder = true;
				return;
			}

			this.showPlaceholder = false;

		}
	},

	watch: {

		value: function() {
			this.togglePlaceholder(this.focused);
		}

	}
}
