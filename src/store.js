import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listCv: [
            {
                nama: 'Fajar Ariyanto',
                alamat: 'Tambaksari,Rt 05,Rw 06, Sruni, Musuk, Boyolali',
                phone: '0821 9530 7133',
                email: 'fajarariyanto447@gmail.com',
                Linkedln: 'linkedin.com/fajar.ariyanto',

                hobi1: 'Renang',
                hobi2: 'Badminton',
                hobi3: 'Tidur',
                hobi4: 'Mukbang',


                pp1: 'indonesia - c1',
                pp2: 'English - A2',
                pp3: 'German - c2',

                sumary: 'Pengembang Web Senior yang berspesialisasi dalam pengembangan ujung depan. Berpengalaman dengan semua tahapa perkembangan siklus untuk proyek web dinamis. Berpengalaman dalam berbagai bahasa pemrograman termasuk HTML5, PHP OOP,JavaScript, CSS, MySQL. Latar belakang yang kuat dalam manajemen proyek dan hubungan pelanggan',
                exp1: 'Manajemen proyek',
                exp2: 'Desain kreatif',
                exp3: 'Pembuat keputusan yang kuat',
                exp4: 'Inovatif',
                exp5: 'Pemecah masalah yang kompleks',
                exp6: 'Berfokus pada layanan',

                Experience1: 'Bekerja sama Dengan desainer untuk membuat antarmuka yang bersih dan interaksi intuitif yang sederhana dan pengalaman.',
                Experience2: 'Kembangkan konsep proyek dan pertahankan alur kerja yang optimal.',
                Experience3: 'Bekerja dengan pengembang senior untuk mengelola proyek desain yang besar dan kompleks untuk klien korporat.',
                Experience4: 'Selesaikan tugas pemrograman dan pengembangan terperinci untuk situs web publik dan internal ujung depan serta kode server dan belakang yang menantang.',
                Experience5: 'melakukan tes jaminan kualitas untuk menemukan kesalahan dan mengoptimalkan kegunaan.',

                Edu: 'Sarjana sains: Sistem informasi komputer - Universitas Columbia 2014, NY',

                cer: 'Kerangka kerja PHP (sertifikat): Zend, Codeigniter, Symfony. Bahasa pemrograman: HTML5, PHP OOP, JavaScript, CSS, MySQL'
            }
        ]
    }
})
