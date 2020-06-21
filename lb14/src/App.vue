<template>
	<div id="app">
    <div class="container">
		<div class="row">
			<h1>{{title}}</h1>
		</div>
		<div class="row">
		<div class="form-group w-100">
			<label for="name">Имя</label>
			<input type="text" id="name" class="form-control" v-model="name">
		</div>
		<div class="form-group w-100">
			<label for="surname">Фамилия</label>
			<input type="text" id="surname" class="form-control" v-model="surname">
		</div>
		<div class="form-group w-100">
			<label for="phone">Телефон</label>
			<input type="text" id="phone" class="form-control" v-model="phone">
		</div>
		<div class="btn btn-success" @click="onSave">Сохранить</div>
		<div class="btn btn-primary" @click="onLoad">Получить</div>
		</div>
		<div class="row mt-1" v-for="(note,index) in notes" :key="note.id">
			<div class="col-8" v-if="Visible" v-on:click="onEdit(index)" >{{note.name}} {{note.surname}} {{note.phone}}</div>
			<div class="col-2" v-if="Visible" v-on:click="Visible = false" ><button>Изменить</button></div>
			<div class="col-2" v-if="Visible" v-on:click="onDelete(index)" ><button>Удалить</button></div>
			
			<div class="col-3" v-if="!Visible"  ><input type="text" id="nameEdit" class="form-control" v-model="notes[index].name"></div>
			<div class="col-3" v-if="!Visible"  ><input type="text" id="surnameEdit" class="form-control" v-model="notes[index].surname"></div>
			<div class="col-3" v-if="!Visible"  ><input type="text" id="phoneEdit" class="form-control" v-model="notes[index].phone"></div>
			<div class="col-1" v-if="!Visible" v-on:click="onEdit(index)" ><button>Сохранить</button></div>
			<div class="col-2" v-if="!Visible" v-on:click="Visible = true" ><button>Отменить</button></div>
			
		</div>
	</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			title: "Записная книжка",
			name: "Иван",
			surname: "Иванов",
			phone: "89355645788",
			Visible: true,
			notes: []
		}
	  },
	methods: {
		onSave() {
			let note = {
				name: this.name,
				surname: this.surname,
				phone: this.phone
			};
			try{
			this.$http
				.post('http://localhost:3000/notes', note)
				.then(res => this.onLoad());
				this.name = "";
				this.surname = "";
				this.phone = "";
			}catch(err){
				console.log(err);
			};
		},
		onLoad() {
			this.$http
				.get("http://localhost:3000/notes")
				.then(res => res.json())
				.then(res => (this.notes = res));
		},
		onEdit(index){
			let note = {
				name : this.notes[index].name,
				surname : this.notes[index].surname,
				phone : this.notes[index].phone
			}
			this.$http
				.put('http://localhost:3000/notes/'+this.notes[index].id, note)
				.then(res => this.onLoad());
			this.Visible = true;
				
			
		},
		onDelete(index){
			this.$http
					.delete('http://localhost:3000/notes/'+this.notes[index].id)
					.then(res => this.onLoad());
		},
	}
  }

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
