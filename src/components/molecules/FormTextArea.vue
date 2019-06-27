<!-- a highly stylized textarea element -->
<template>
	<div class="vt-form-text">

		<textarea
			:id="id"
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
import TogglePlaceholderMixin from '../../mixins/forms/toggle-placeholder';
export default {
	name: "FormTextArea",
	props: ['id', 'placeholder', 'required', 'rows', 'value'],
	mixins: [ TogglePlaceholderMixin ]
}
</script>
