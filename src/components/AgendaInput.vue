<template>
  <div >
    <body v-for="user in listCv" :key="user">
<div style="display: flex;" class="app">
    <div class="op">

    <center>
        <h1>{{ user.nama}}</h1>
    </center>
        <img src="https://images.bisnis-cdn.com/thumb/posts/2019/01/29/883405/bisnis.jpg?w=600&h=400"><br><br>
    <h2>PROFILE</h2>

        <h3>Contact<hr></h3>
        <p><b>Address:</b><br>
       {{user.alamat }}</p>
        <p><b>Phone:</b><br>
       {{user.phone}}</p>
        <b>Email:</b><br>
        <u>{{user.email }}</u><br><br>
        <b>Linkedln:</b><br>
        <u>{{user.Linkedln}}</u><br><br>

        <h3>Languages<hr></h3>
      
           {{user.pp1}} <br>
           {{user.pp2}} <br>
           {{user.pp3}} <br>
        
        <h3>Hobbies
            <hr>
        </h3>
        <ul>
            <li>{{ user.hobi1}}</li>
            <li>{{ user.hobi2}}</li>
            <li>{{ user.hobi3}}</li>
            <li>{{ user.hobi4}}</li>

        </ul>
    </div>
    <div class="pp">
        <h3>Summary</h3>
            <hr>
            <p>{{ user.sumary}}</p>

            <h3>Skill Highlights</h3>
            <hr>
            <ul>
                <li>{{user. exp1}}</li>
                <li>{{user. exp2}}</li>
                <li>{{user. exp3}}</li>
                <li>{{user. exp4}}</li>
                <li>{{user. exp5}}</li>
                <li>{{user. exp6}}</li>
            </ul>

            <h3>Experience</h3>
            <hr>
            <b>Web Develover</b> - 09/2015 to 05/2019 <br>
            <b>Luna Web Design</b>, New York
            <ul>
                <li>{{user.Experience1}}</li>
                <li>{{user.Experience2}}</li>
                <li>{{user.Experience3}}</li>
                <li>{{user.Experience4}}</li>
                <li>{{user.Experience5}}</li>
            </ul>
            <h3>Education</h3>
            <hr>
           {{user.Edu}}
            <h3>Certifications</h3>
            <hr>
            <p>{{user.cer}}</p>
    </div>
</div>
</body>
  </div>
</template>
<script>
export default {
    name:"AgendaInput",
    computed: {
        listCv(){
            return this.$store.state.listCv
        }
    }
}

</script>
<style scoped>
body{
    font-family: sans-serif;
}
.op {
  background-color: rgb(230, 228, 228);
  border-radius: 1px;
  position: relative;
  width: 300px;
  border: 2px;
  padding: 20px;
}

.pp {
  background-color: whitesmoke;
  border-radius: 1px;
  position: relative;
  width: 700px;
  border: 2px;
  padding: 20px;
}

img {
  width: 250px;
}
p,
ul,
li {
  font-size: 15px;
}
</style>