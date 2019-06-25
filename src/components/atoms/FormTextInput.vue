<!-- Component for rendering a form input -->
<template>

	<div class="vt-form-text">

		<input type="text"
			:placeholder="placeholder"
			:value="value"
			@input="$emit('input', $event.target.value)"/>

	</div>

</template>

<script>
export default {
	name: "FormTextInput",
	props: ['placeholder', 'value']
}
</script>
