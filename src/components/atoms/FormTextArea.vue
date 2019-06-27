<!-- a highly stylized textarea element -->
<template>
	<div class="vt-form-text">

		<textarea
			:class="{'has-content': value != ''}"
			:placeholder="showPlaceholder ? placeholder: ''"
			:required="required"
			:rows="rows"
			:value="value"
			@focus="togglePlaceholder(true)"
			@blur="togglePlaceholder(false)"
			@input="$emit('input', $event.target.value)"/>

		<slot></slot>

	</div>
</template>

<script>
export default {
	name: "FormTextArea",
	props: ['placeholder', 'required', 'rows', 'value'],

	data: function() {
		return {
			focused: false,
			showPlaceholder: false,
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
</script>
