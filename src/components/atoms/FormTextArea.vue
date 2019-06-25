<!-- a highly stylized textarea element -->
<template>
	<div class="vt-form-text">
		<textarea
			:placeholder="placeholder"
			:rows="rows"
			:value="value"
			@input="$emit('input', $event.target.value)"/>
	</div>
</template>

<script>
export default {
	name: "FormTextArea",
	props: ['placeholder', 'rows', 'value']
}
</script>
