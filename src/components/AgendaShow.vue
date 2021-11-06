<template>
  <div>
      <div class="pap">
      <p class="A">Resume</p>
      <h1 >FAJAR ARIYANTO</h1>
      </div>
    <body v-for="user in listCv" :key="user">
      <div style="display: flex" class="app">
        <div class="op">
          <center>
            <!-- <h1>{{ user.nama}}</h1> -->
          </center>
          <img
            src="https://www.novisetianurviat.com/images/comp/novi.jpg"
          /><br /><br />

          <h3>
            PROFIL
            <hr />
          </h3>
          <p>
            <b>NAMA</b><br />
            Fajar Ariyanto
          </p>
          <p>
            <b>TANGGAL LAHIR</b><br />
            09 Mei 2006
          </p>
          <b>ALAMAT</b><br />
          Tambaksari,Rt 05,Rw 06, Sruni, Musuk, Boyolali<br /><br />
          <b>WEBSITE</b><br />
          <u>fajarariyanto.com</u><br /><br />

          <h3>
            PENGHARGAAN
            <hr />
          </h3>

          <b>PENGHARGAAN KREATIF 2012</b> <br />
          Openminded.org <br /><br />
          <b>DESAIN ANTARMUKA 2013</b> <br />
          Coolideas.com <br />

          <h3>
            KONTAK
            <hr />
          </h3>
          <b>NOMOR RUMAH</b> &#9742; <br />
          (0411) 123 456 <br /><br />

          <b>NOMOR TELEPON</b> &#128222;<br />
          0821 9530 7133 <br /><br />

          <b>EMAIL</b> &#128386;<br />
          fajarariyanto447@gmail.com<br />

          <h3>
            SOSIAL
            <hr />
          </h3>
          <b>TWITER</b> <br />
          @Fajar_ariyanto <br /><br />

          <b>FABEBOOK</b> <br />
          Fajar_ariyanto <br /><br />
        </div>
        <div class="pp">
          <h2>
            SENIMAN GRAFIS
            <hr />
          </h2>
          <div id="app">
            <h3>
              WORK EXPERIENCE
              <hr />
            </h3>
            <b>CREATIVE ROOMS</b><br />
            Feb 2013-Jun 2014
            <span>
              <b>SENIOR ART DIRECTOR</b><br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              voluptas nesciunt vel explicabo deleniti animi incidunt saepe
              repellat, atque minima maxime laborum necessitatibus dolores! A
              blanditiis laboriosam porro cum assumenda!</span
            ><br /><br />
            <b>CREATIVE ROOMS</b><br />
            Feb 2013-Jun 2014
            <span>
              <b>SENIOR ART DIRECTOR</b><br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              voluptas nesciunt vel explicabo deleniti animi incidunt saepe
              repellat, atque minima maxime laborum necessitatibus dolores! A
              blanditiis laboriosam porro cum assumenda!</span
            ><br /><br />

            <b>CREATIVE ROOMS</b><br />
            Feb 2013-Jun 2014
            <span>
              <b>SENIOR ART DIRECTOR</b><br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
              voluptas nesciunt vel explicabo deleniti animi incidunt saepe
              repellat, atque minima maxime laborum necessitatibus dolores! A
              blanditiis laboriosam porro cum assumenda!</span
            ><br /><br />
          </div>
          <br />
          <div id="ppa">
            <h3>PENDIDIKAN</h3>
            <hr />
            <b>MASTER DEGREE</b><br />Feb 2011-Jun 2014 <br /><br />
            <b>MASTER DEGREE</b><br />Feb 2011-Jun 2014 <br /><br />
            <b>MASTER DEGREE</b><br />Feb 2011-Jun 2014 <br /><br />
          </div>
          <!-- <ul>
            <li>{{ user.exp1 }}</li>
            <li>{{ user.exp2 }}</li>
            <li>{{ user.exp3 }}</li>
            <li>{{ user.exp4 }}</li>
            <li>{{ user.exp5 }}</li>
            <li>{{ user.exp6 }}</li>
          </ul>

          <h3>PENGALAMAN</h3>
          <hr />
          <b>Web Develover</b> - 09/2015 to 05/2019 <br />
          <b>Luna Web Design</b>, New York -->
          <!-- <ul>
            <li>{{ user.Experience1 }}</li>
            <li>{{ user.Experience2 }}</li>
            <li>{{ user.Experience3 }}</li>
            <li>{{ user.Experience4 }}</li>
            <li>{{ user.Experience5 }}</li>
          </ul>
          <h3>PENDIDIKAN</h3>
          <hr />
          {{ user.Edu }}
          <h3>SERTIFIKAT</h3>
          <hr />
          <p>{{ user.cer }}</p> -->
        </div>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  name: "AgendaInput",
  computed: {
    listCv() {
      return this.$store.state.listCv;
    },
  },
};
</script>
<style scoped>
body {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.op {
  background-color: whitesmoke;
  border-radius: 1px;
  position: relative;
  width: 300px;
  border: 2px;
  padding: 20px;
  text-align: right;
}
#app {
  background-color: rgb(202, 197, 197);
  border-radius: 5px;
  width: 650px;
  border: 2px;
  padding: 20px;
}
#ppa {
  background-color: rgb(202, 197, 197);
  border-radius: 5px;
  width: 650px;
  border: 2px;
  padding: 20px;
}
.A{
  background-color: white;
  color: black;
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
  width: 200px;
  border-radius: 50%;
  background-color: yellow;
  float: top;
}
p,
ul,
li {
  font-size: 15px;
}
.pap{
padding: 20px;
margin-right: 249px;
color: whitesmoke;
background-color: navy;
}

</style>