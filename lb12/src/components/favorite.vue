<template>
	<div>
	<div id="favor">
			<input type="text" v-on:input="getName" value="Имя">
			<input type="text" v-on:input="getSurname" value="Фамилия">
			<input type="text" v-on:input="getPatronymic" value="Отчество">
			<input type="number" v-on:input="getPhone" value="8">
			<p></p>
			<button v-on:click="addOther()">Добавить</button>
			<button v-on:click="addFavorite()">Добавить в избранное</button>
			<p></p>
			<button v-on:click="surSort()">Сортировка по фамилии</button>
			<button v-on:click="getSort()">Сортировка по имени</button>

			<ol >
				<li v-for="favor in favorite" v-bind:key="favor">{{favor}}</li>
			</ol>

			<ol>
				<li v-for="one in others" v-bind:key="one">{{one}}</li>
			</ol>
	</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			name: 'Имя',
			surname: 'Фамилия',
			patronymic: 'Отчество',
			numberPhone: '8',
			others: [],
			othersName: [],
			othersSurname: [],
			favorite: [],
			favoriteName: [],
			favoriteSurname: []
		};
	},
	methods:{
			getName: function () {
			this.name = event.target.value;
			},
			getSurname: function () {
				this.surname = event.target.value;
			},
			getPatronymic: function () {
				this.patronymic = event.target.value;
			},
			getPhone: function () {
				this.numberPhone = event.target.value;
			},
			addOther: function () {
				this.othersName.unshift(this.name + " " +
					this.surname + " " + " " + this.patronymic + " " +
					this.numberPhone);
				this.othersSurname.unshift(this.surname + " " +
					this.name + " " + " " + this.patronymic + " " +
					this.numberPhone);
				this.getSort();
			},
			addFavorite: function () {
				this.favoriteName.unshift(this.name + " " +
					this.surname + " " + " " + this.patronymic + " " +
					this.numberPhone);
				this.favoriteSurname.unshift(this.surname + " " +
					this.name + " " + " " + this.patronymic + " " +
					this.numberPhone);
				
				this.getSort();
			},
			getSort: function () {
				this.others = this.othersName;
				this.others.sort();
				this.favorite = this.favoriteName;
				this.favorite.sort();
				
			},
			surSort: function () {
				this.others = this.othersSurname;
				this.others.sort();
				this.favorite = this.favoriteSurname;
				this.favorite.sort();
			}
		}
		
	};

</script>