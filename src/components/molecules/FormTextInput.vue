<!-- Component for rendering a form input -->
<template>

	<div class="vt-form-text">

		<input type="text"
			:id="id"
			:class="{'has-content': value != ''}"
			:placeholder="showPlaceholder ? placeholder: ''"
			:required="required"
			:value="value"
			@focus="togglePlaceholder(true)"
			@blur="togglePlaceholder(false)"
			@input="$emit('input', $event.target.value)"/>

		<slot></slot>

	</div>

</template>

<script>
import TogglePlaceholderMixin from '../../mixins/forms/toggle-placeholder';
export default {
	name: "FormTextInput",
	props: ['id', 'placeholder', 'required', 'value'],
	mixins: [ TogglePlaceholderMixin ]
}
</script>
