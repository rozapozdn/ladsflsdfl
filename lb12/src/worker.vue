<template>
	<div>
		<p>Имя: {{name}}</p>
		<p>Фамилия: {{surname}}</p>
		<p>Должность: {{type}}</p>
	</div>
</template>

<script>
export default{
	data(){
		return{
			name: "Андрей",
			surname: "Иванов",
			type: "Слесарь"
		}
	}
}
</script>