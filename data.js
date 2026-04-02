const ICONS = {
  person: `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 00-8 0v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  bed: `<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>`,
  doc: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  cal: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  shield: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
};

const CATS = [
  { id: 'pendaftaran', label: 'Pendaftaran & Admisi', color: 'blue', icon: 'person' },
  // { id: 'rajal', label: 'Rawat Jalan', color: 'blue', icon: 'person' },
  // { id: 'ranap', label: 'Rawat Inap', color: 'teal', icon: 'bed' },
  // { id: 'dokumen', label: 'Pengelolaan Dokumen', color: 'amber', icon: 'doc' },
  // { id: 'admin', label: 'Administrasi Medis', color: 'red', icon: 'cal' },
  // { id: 'keamanan', label: 'Keamanan & Retensi', color: 'slate', icon: 'shield' },
];

const SPO = [
  // ── PENDAFTARAN & ADMISI ──────────────────────────────────────────────────
  {
    id: 'ADM-01', cat: 'pendaftaran',
    name: 'Admission Pasien Baru Rawat Jalan',
    unit: 'Bagian Pendaftaran',
    pengertian: 'Penerimaan pasien yang pertama kali datang ke RS Bhakti Husada II Purwakarta untuk mendapatkan pelayanan kesehatan rawat jalan.',
    tujuan: 'Sebagai acuan penerimaan pasien baru rawat jalan secara digital dan terintegrasi dengan SIMRS.',
    unitTerkait: ['Bagian Pendaftaran', 'Perawat Poliklinik', 'Petugas Farmasi', 'Kasir Rawat Jalan'],
    prosedur: [
      { title: 'Pasien datang dan diterima petugas admisi', desc: 'Petugas admisi menyapa pasien dan mengonfirmasi apakah pasien baru atau lama melalui layar antrian SIMRS.', emr: 'Sistem antrian digital SIMRS menampilkan urutan dan estimasi waktu tunggu secara real-time.' },
      { title: 'Pasien isi formulir identitas secara digital di EMR', desc: 'Petugas memandu pasien mengisi data identitas lengkap pada formulir pendaftaran digital di terminal EMR atau tablet admisi.', emr: 'Data NIK pasien dapat diverifikasi langsung ke Dukcapil melalui integrasi EMR untuk memastikan keakuratan data.' },
      { title: 'Generate nomor rekam medis dan cetak KIB di SIMRS', desc: 'SIMRS secara otomatis menghasilkan nomor rekam medis unik dan mencetak Kartu Identitas Berobat (KIB) untuk pasien.', emr: 'Nomor RM digenerate otomatis oleh SIMRS dengan sistem Unit Numbering System — tidak perlu penomoran manual.' },
      { title: 'Input data asuransi/jaminan ke EMR', desc: 'Petugas menginput jenis jaminan (umum/BPJS/asuransi swasta) dan memverifikasi eligibilitas langsung dari EMR.', emr: 'Verifikasi eligibilitas BPJS dapat dilakukan real-time melalui integrasi SIMRS dengan sistem P-Care/V-Claim.' },
      { title: 'Pasien diarahkan ke poliklinik via display antrian', desc: 'Petugas mengonfirmasi poliklinik tujuan di SIMRS. Nomor antrian dan nama poliklinik tampil otomatis pada papan display.', emr: 'Pasien dapat memantau antrian melalui display digital di setiap poliklinik.' },
    ]
  },
  {
    id: 'ADM-02', cat: 'pendaftaran',
    name: 'Admission Pasien Lama Rawat Jalan',
    unit: 'Bagian Pendaftaran',
    pengertian: 'Penerimaan pasien yang sudah pernah berobat sebelumnya dan melakukan kunjungan ulang ke Unit Rawat Jalan.',
    tujuan: 'Sebagai acuan penerimaan pasien lama rawat jalan yang terintegrasi dengan riwayat EMR pasien.',
    unitTerkait: ['Bagian Pendaftaran', 'Perawat Poliklinik', 'Petugas Farmasi', 'Kasir Rawat Jalan'],
    prosedur: [
      { title: 'Identifikasi pasien melalui KIB atau NIK di SIMRS', desc: 'Petugas memindai KIB atau menginput NIK/nomor RM pasien ke SIMRS untuk mengakses data kunjungan sebelumnya.', emr: 'Riwayat kunjungan, diagnosis, dan obat pasien langsung tersedia di EMR tanpa perlu anamnesis ulang dari awal.' },
      { title: 'Verifikasi identitas dan perbarui data jika ada perubahan', desc: 'Konfirmasikan identitas pasien dan perbarui data alamat, nomor kontak, atau jaminan kesehatan jika ada perubahan.', emr: 'Perubahan data otomatis tersinkronisasi di seluruh modul EMR.' },
      { title: 'Daftarkan kunjungan dan buat tracer di SIMRS', desc: 'Input kunjungan baru di SIMRS dan buat tracer digital sebagai penanda bahwa DRM sedang diambil dari penyimpanan.', emr: 'Tracer digital di SIMRS menginformasikan lokasi DRM kepada semua unit terkait secara real-time.' },
      { title: 'Rekam Medis mengambil DRM dari rak penyimpanan', desc: 'Petugas rekam medis mencari DRM berdasarkan nomor rekam medis yang tampil di modul distribusi SIMRS.', emr: 'Lokasi rak penyimpanan DRM tercantum di modul filling SIMRS untuk mempercepat pencarian.' },
      { title: 'Distribusikan DRM ke poliklinik tujuan via SIMRS', desc: 'Update status distribusi DRM di SIMRS dan antarkan ke poliklinik yang dituju sesuai jadwal kunjungan pasien.', emr: 'Konfirmasi penerimaan di poliklinik tercatat digital di SIMRS sebagai bukti serah terima.' },
    ]
  },
  {
    id: 'ADM-03', cat: 'pendaftaran',
    name: 'Admission Pasien Rawat Inap',
    unit: 'Bagian Pendaftaran',
    pengertian: 'Proses pendaftaran pasien yang memerlukan observasi dan perawatan di unit rawat inap, mulai dari kedatangan hingga kepastian kamar perawatan.',
    tujuan: 'Sebagai acuan penerimaan dan pendaftaran pasien rawat inap yang terintegrasi dengan SIMRS.',
    unitTerkait: ['Admission Rawat Jalan', 'Ruang Perawatan', 'Unit Rekam Medis'],
    prosedur: [
      { title: 'Terima pasien dan verifikasi surat pengantar rawat inap', desc: 'Petugas admisi rawat inap menerima pasien atau keluarga dan memverifikasi surat pengantar/rujukan rawat inap dari dokter.', emr: 'Surat pengantar rawat inap dari dokter poliklinik sudah tersedia di EMR; tidak perlu dokumen kertas terpisah.' },
      { title: 'Cek ketersediaan kamar di SIMRS', desc: 'Periksa ketersediaan kamar di SIMRS sesuai kelas yang diinginkan dan rekomendasi medis dari dokter.', emr: 'Denah kamar rawat inap dan status ketersediaan (terisi/kosong) tampil real-time di modul manajemen tempat tidur SIMRS.' },
      { title: 'Input data pendaftaran rawat inap ke EMR', desc: 'Petugas menginput seluruh identitas pasien, jaminan kesehatan, dan data pengantar ke EMR. Sistem menghitung nomor episode rawat inap baru secara otomatis.', emr: 'EMR memastikan semua data pasien lengkap sebelum proses pendaftaran dapat difinalisasi.' },
      { title: 'Buat berkas rawat inap dan cetak gelang identitas', desc: 'Siapkan berkas rawat inap dan cetak gelang identitas pasien dari modul cetak EMR sesuai jenis kelamin dan risiko pasien.', emr: 'Gelang risiko (alergi, jatuh) dicetak otomatis berdasarkan catatan klinis di EMR.' },
      { title: 'Informasikan ke ruang perawatan via SIMRS', desc: 'Konfirmasikan penerimaan pasien ke ruang perawatan yang dituju melalui notifikasi internal SIMRS.', emr: 'Perawat ruangan mendapat notifikasi real-time di SIMRS dan dapat mempersiapkan tempat tidur sebelum pasien tiba.' },
    ]
  },
  {
    id: 'ADM-04', cat: 'pendaftaran',
    name: 'Pemberian Informasi kepada Pasien/Keluarga',
    unit: 'Front Office / Admisi',
    pengertian: 'Kegiatan penyampaian informasi kepada pasien atau keluarga mengenai pelayanan yang tersedia di RS Bhakti Husada II Purwakarta.',
    tujuan: 'Agar pasien/keluarga memahami jenis layanan, tarif, prosedur pembayaran, dan hak-hak pasien di rumah sakit.',
    unitTerkait: ['Front Office', 'Keuangan', 'Poliklinik', 'IGD'],
    prosedur: [
      { title: 'Sambut pasien/keluarga dan identifikasi kebutuhan informasi', desc: 'Petugas front office menyambut pasien/keluarga dengan ramah dan mengidentifikasi jenis informasi yang dibutuhkan.', emr: '' },
      { title: 'Berikan informasi layanan medis dan penunjang', desc: 'Jelaskan jenis-jenis layanan medis, dokter spesialis yang tersedia beserta jadwalnya, dan fasilitas penunjang.', emr: 'Jadwal dokter dan kapasitas poliklinik dapat dikonfirmasi real-time melalui SIMRS untuk informasi yang akurat.' },
      { title: 'Jelaskan prosedur pembayaran dan jaminan kesehatan', desc: 'Informasikan cara pembayaran (umum/BPJS/asuransi swasta), perkiraan biaya, dan prosedur jika terdapat kekurangan pembiayaan.', emr: 'Estimasi biaya dapat dilihat di modul tarif SIMRS sesuai tindakan yang direncanakan.' },
      { title: 'Verifikasi pemahaman pasien/keluarga', desc: 'Tanyakan ulang kepada pasien/keluarga mengenai informasi yang telah diberikan untuk memastikan pemahaman.', emr: '' },
      { title: 'Arahkan pasien ke area pelayanan yang dituju', desc: 'Persilakan pasien ke loket pendaftaran atau area tunggu yang sesuai setelah informasi diterima dengan jelas.', emr: '' },
    ]
  },
  // ── RAWAT JALAN ───────────────────────────────────────────────────────────
  // {
  //   id: 'RJ-01', cat: 'rajal',
  //   name: 'Permintaan DRM Pasien Baru Rawat Jalan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian pembuatan Dokumen Rekam Medis elektronik untuk pasien baru guna mendapatkan pelayanan kesehatan sesuai kebutuhan.',
  //   tujuan: 'Sebagai acuan pembuatan DRM baru yang terintegrasi dengan EMR dan SIMRS.',
  //   unitTerkait: ['Unit Pendaftaran', 'Unit Rekam Medis', 'Unit Poliklinik', 'Unit Penunjang Medis', 'Unit Gawat Darurat'],
  //   prosedur: [
  //     { title: 'Terima notifikasi tracer dari SIMRS', desc: 'Petugas rekam medis menerima notifikasi tracer pasien baru yang dikirim secara digital oleh unit pendaftaran melalui SIMRS.', emr: 'Tracer tersedia otomatis di modul distribusi SIMRS begitu pendaftaran selesai — tidak perlu pengambilan manual.' },
  //     { title: 'Verifikasi identitas pasien di EMR', desc: 'Buka modul pasien di EMR dan verifikasi identitas: nama, nomor rekam medis, tanggal lahir, jenis kelamin, dan poliklinik tujuan.', emr: 'Data sudah terinput oleh petugas pendaftaran — tidak perlu entri ulang.' },
  //     { title: 'Siapkan map DRM sesuai jenis kelamin', desc: 'Siapkan map Dokumen Rekam Medis: merah muda untuk pasien perempuan, biru untuk pasien laki-laki.', emr: '' },
  //     { title: 'Cetak label identitas dari EMR', desc: 'Cetak label identitas pasien langsung dari modul cetak EMR yang memuat nama, nomor rekam medis, dan tanggal lahir.', emr: 'Gunakan fitur "Cetak Label" EMR untuk menghindari kesalahan penulisan manual.' },
  //     { title: 'Rakit berkas rekam medis', desc: 'Masukkan DRM beserta label identitas dan surat kontrol ke dalam map sesuai standar assembling.', emr: '' },
  //     { title: 'Distribusi ke poliklinik dan konfirmasi di SIMRS', desc: 'Input konfirmasi distribusi ke SIMRS, letakkan DRM pada rak tunda sesuai poliklinik tujuan yang tampil di layar.', emr: 'Status distribusi tercatat otomatis sehingga poliklinik dapat memantau ketersediaan dokumen secara real-time.' },
  //   ]
  // },
  // {
  //   id: 'RJ-02', cat: 'rajal',
  //   name: 'Permintaan DRM Pasien Lama Rawat Jalan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian pencarian dan persiapan Dokumen Rekam Medis pasien lama untuk kunjungan ulang rawat jalan.',
  //   tujuan: 'Sebagai acuan pencarian DRM pasien lama yang terintegrasi dengan SIMRS.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Unit Penunjang Medis', 'Perawat UGD'],
  //   prosedur: [
  //     { title: 'Terima notifikasi bon biaya/tracer dari SIMRS', desc: 'Petugas rekam medis menerima notifikasi digital dari SIMRS bahwa pasien lama sudah terdaftar dan DRM perlu disiapkan.', emr: 'Notifikasi otomatis muncul di modul distribusi SIMRS; bon biaya tersedia digital — tidak perlu serah terima kertas.' },
  //     { title: 'Cari DRM di rak berdasarkan nomor RM di SIMRS', desc: 'Cari DRM pasien di rak penyimpanan berdasarkan nomor rekam medis yang tampil di SIMRS. Sisipkan tracer digital sebagai penanda berkas keluar.', emr: 'Lokasi rak dan posisi penyimpanan DRM tercantum di modul filling SIMRS.' },
  //     { title: 'Cetak label identitas dari EMR', desc: 'Cetak label identitas terbaru dari EMR dan tempel pada map serta formulir kunjungan saat ini.', emr: '' },
  //     { title: 'Masukkan formulir kunjungan dan surat kontrol ke DRM', desc: 'Siapkan formulir asesmen ulangan yang sesuai dan masukkan beserta surat kontrol ke dalam DRM.', emr: 'Formulir asesmen ulangan tersedia di modul EMR; isi sesuai kebutuhan kunjungan saat ini.' },
  //     { title: 'Distribusikan DRM ke poliklinik tujuan via SIMRS', desc: 'Update status distribusi di SIMRS dan antarkan DRM ke poliklinik yang dituju.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'RJ-03', cat: 'rajal',
  //   name: 'Penerimaan Pasien Baru Asuransi Rawat Jalan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian penerimaan pasien baru peserta asuransi swasta maupun pemerintah untuk berobat di Unit Rawat Jalan.',
  //   tujuan: 'Sebagai acuan penerimaan pasien baru asuransi rawat jalan.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Perawat IGD'],
  //   prosedur: [
  //     { title: 'Terima notifikasi bon biaya dari SIMRS', desc: 'Petugas menerima notifikasi digital bon biaya dari petugas pendaftaran melalui SIMRS.', emr: 'Bon biaya tersedia di modul billing SIMRS; tidak perlu serah terima fisik.' },
  //     { title: 'Verifikasi kelengkapan berkas asuransi di EMR', desc: 'Periksa kelengkapan berkas asuransi yang sudah diunggah ke EMR: kartu peserta, surat rujukan, dan dokumen pendukung.', emr: 'Dokumen asuransi di-scan dan diunggah ke modul attachment EMR oleh petugas pendaftaran.' },
  //     { title: 'Input asesmen awal rawat jalan ke EMR', desc: 'Masukkan formulir asesmen awal rawat jalan ke dalam status pasien yang sudah terbuat di EMR.', emr: 'Formulir asesmen awal sudah tersedia di EMR; tinggal dilengkapi sesuai kondisi pasien.' },
  //     { title: 'Cetak stiker identitas dari EMR', desc: 'Cetak stiker identitas dari modul cetak EMR dan tempel pada map serta formulir terkait.', emr: '' },
  //     { title: 'Serahkan status ke poliklinik/IGD dan update SIMRS', desc: 'Serahkan status pasien ke poliklinik atau IGD yang dituju dan konfirmasi penerimaan di SIMRS.', emr: 'Status distribusi tercatat otomatis di SIMRS.' },
  //   ]
  // },
  // {
  //   id: 'RJ-04', cat: 'rajal',
  //   name: 'Penerimaan Pasien Lama Asuransi Rawat Jalan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian penerimaan pasien lama peserta asuransi untuk kunjungan ulang di Unit Rawat Jalan.',
  //   tujuan: 'Sebagai acuan penerimaan pasien lama rawat jalan jaminan asuransi yang terintegrasi dengan EMR.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Perawat IGD'],
  //   prosedur: [
  //     { title: 'Terima notifikasi dari SIMRS', desc: 'Petugas menerima notifikasi digital dari SIMRS bahwa pasien lama asuransi sudah terdaftar.', emr: '' },
  //     { title: 'Ambil DRM dari penyimpanan berdasarkan lokasi di SIMRS', desc: 'Cari dan ambil DRM dari rak penyimpanan berdasarkan nomor RM dan lokasi rak yang tercantum di SIMRS.', emr: 'Lokasi penyimpanan DRM selalu terbarui di modul filling SIMRS.' },
  //     { title: 'Verifikasi kelengkapan berkas asuransi', desc: 'Periksa dan cocokkan kelengkapan berkas asuransi dengan data yang tersimpan di EMR.', emr: '' },
  //     { title: 'Input asesmen ulangan rawat jalan ke EMR', desc: 'Lengkapi formulir asesmen ulangan di EMR untuk kunjungan saat ini. Riwayat sebelumnya sudah tersedia sebagai referensi.', emr: 'Riwayat kunjungan, diagnosis, dan terapi sebelumnya langsung tersedia di EMR.' },
  //     { title: 'Cetak stiker dan distribusikan ke poliklinik', desc: 'Cetak stiker identitas dari EMR, tempel pada formulir, lalu distribusikan DRM ke poliklinik dan update SIMRS.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'RJ-05', cat: 'rajal',
  //   name: 'Penerimaan Pasien Rencana Operasi',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Penerimaan dan persiapan berkas rekam medis untuk pasien yang telah dijadwalkan operasi pada kunjungan berikutnya.',
  //   tujuan: 'Sebagai acuan penerimaan pasien rencana operasi yang terintegrasi dengan jadwal OK di SIMRS.',
  //   unitTerkait: ['Bagian Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Perawat OK'],
  //   prosedur: [
  //     { title: 'Pasien mendaftar dengan nomor rekam medis', desc: 'Pasien mendaftar di loket pendaftaran dan menyerahkan nomor rekam medis atau KIB. SIMRS langsung menampilkan jadwal operasi yang terdaftar.', emr: 'Jadwal operasi sudah terinput di modul OK SIMRS oleh dokter pada kunjungan sebelumnya.' },
  //     { title: 'Verifikasi keberadaan DRM di SIMRS', desc: 'Petugas rekam medis mengecek status dan lokasi DRM pasien di modul filling SIMRS.', emr: 'Status DRM (di rak/sedang dipinjam) terlihat real-time di SIMRS.' },
  //     { title: 'Ambil DRM dan cek kelengkapan formulir pre-operasi', desc: 'Ambil DRM dari rak penyimpanan dan pastikan formulir pre-operasi (informed consent, hasil lab, pemeriksaan anestesi) sudah dilampirkan.', emr: 'Checklist kelengkapan formulir pre-operasi tersedia di modul OK EMR.' },
  //     { title: 'Serahkan DRM ke perawat OK via SIMRS', desc: 'Serahkan DRM ke perawat OK dan konfirmasi serah terima di SIMRS.', emr: 'Update status DRM di SIMRS menjadi "distribusi ke OK" agar dapat dilacak oleh semua unit.' },
  //   ]
  // },
  // {
  //   id: 'RJ-06', cat: 'rajal',
  //   name: 'Pelayanan Rekam Medis Pasien MCU',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Pengelolaan berkas rekam medis untuk pasien yang menjalani Medical Check-Up (MCU).',
  //   tujuan: 'Sebagai panduan pelayanan Unit Rekam Medis untuk pasien MCU.',
  //   unitTerkait: ['Unit Pendaftaran', 'Unit Rekam Medis', 'Unit Rawat Jalan'],
  //   prosedur: [
  //     { title: 'Terima notifikasi tracer MCU dari SIMRS', desc: 'Petugas menerima notifikasi tracer pasien poli MCU yang dikirim digital melalui SIMRS oleh unit pendaftaran.', emr: 'Tracer MCU tersedia otomatis di modul distribusi SIMRS setelah pendaftaran selesai.' },
  //     { title: 'Cetak stiker/label identitas dari EMR', desc: 'Cetak stiker identitas pasien dari modul cetak EMR sesuai data yang sudah terinput.', emr: '' },
  //     { title: 'Siapkan formulir MCU dan tempel label', desc: 'Siapkan formulir MCU dari paket yang dipilih, tempel label identitas pada semua formulir.', emr: 'Formulir MCU tersedia dalam format digital di EMR dan dapat dipilih sesuai paket pemeriksaan.' },
  //     { title: 'Distribusikan berkas melalui SIMRS', desc: 'Input konfirmasi distribusi ke SIMRS dan arahkan berkas ke poliklinik MCU yang sesuai.', emr: 'Poliklinik MCU dapat memantau kedatangan berkas secara real-time melalui SIMRS.' },
  //     { title: 'Distribusikan stiker ke seluruh poliklinik terkait', desc: 'Distribusikan stiker identitas ke semua poliklinik yang akan dikunjungi pasien MCU sesuai paket pemeriksaan.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'RJ-07', cat: 'rajal',
  //   name: 'Pendistribusian Status Rawat Jalan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Kegiatan pendistribusian dokumen rekam medis rawat jalan ke poliklinik yang dituju secara cepat dan tepat.',
  //   tujuan: 'Meningkatkan mutu pelayanan melalui distribusi status yang cepat dan tepat sasaran.',
  //   unitTerkait: ['Petugas Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Siapkan DRM dan data distribusi', desc: 'Siapkan DRM yang akan didistribusikan. Pastikan semua DRM sudah lengkap dan tersusun dengan baik.', emr: '' },
  //     { title: 'Catat distribusi di SIMRS', desc: 'Input data distribusi (tanggal, nomor RM, nama pasien, poliklinik tujuan) ke SIMRS sekaligus mencatat di buku ekspedisi fisik.', emr: 'Data digital di SIMRS memungkinkan poliklinik tujuan memantau DRM yang sedang dalam perjalanan.' },
  //     { title: 'Antar DRM ke poliklinik berdasarkan prioritas antrian', desc: 'Antar DRM ke poliklinik tujuan. Prioritaskan berdasarkan urutan antrian yang tampil di SIMRS.', emr: 'Urutan prioritas distribusi dapat dilihat dari modul antrian poliklinik SIMRS.' },
  //     { title: 'Konfirmasi penerimaan secara digital', desc: 'Minta konfirmasi penerimaan dari petugas poliklinik melalui SIMRS dan catat waktu serah terima.', emr: 'Konfirmasi digital di SIMRS mencatat siapa penerima, jam terima, dan status distribusi secara akurat.' },
  //   ]
  // },
  // // ── RAWAT INAP ────────────────────────────────────────────────────────────
  // {
  //   id: 'RI-01', cat: 'ranap',
  //   name: 'Penerimaan Pasien Rawat Inap Jaminan Pribadi',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian penerimaan pasien yang akan menjalani rawat inap dengan jaminan biaya pribadi.',
  //   tujuan: 'Sebagai acuan penerimaan pasien rawat inap jaminan pribadi yang terintegrasi dengan EMR.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Perawat IGD'],
  //   prosedur: [
  //     { title: 'Terima data pemesanan kamar dari SIMRS', desc: 'Petugas menerima data form pemesanan kamar dan lembar pertanggungjawaban rawat inap melalui modul SIMRS.', emr: 'Form pemesanan kamar sudah terekam di SIMRS oleh petugas pendaftaran.' },
  //     { title: 'Cetak gelang identitas dari EMR', desc: 'Cetak gelang identitas dari modul cetak EMR: merah muda untuk perempuan, biru untuk laki-laki.', emr: 'Data gelang terisi otomatis dari data pasien di EMR.' },
  //     { title: 'Cetak stiker identitas rawat inap', desc: 'Cetak stiker identitas rawat inap dari EMR dan tempel pada seluruh formulir berkas.', emr: '' },
  //     { title: 'Siapkan berkas rawat inap', desc: 'Susun dan lengkapi berkas rawat inap sesuai urutan assembling yang ditetapkan.', emr: 'Formulir rawat inap tersedia di modul EMR; lengkapi sesuai kondisi pasien.' },
  //     { title: 'Serahkan berkas ke unit perawatan via SIMRS', desc: 'Serahkan berkas ke unit perawatan dan konfirmasi distribusi di SIMRS.', emr: 'Unit perawatan dapat memantau kedatangan berkas secara real-time melalui SIMRS.' },
  //   ]
  // },
  // {
  //   id: 'RI-02', cat: 'ranap',
  //   name: 'Penerimaan Pasien Rawat Inap Asuransi',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian penerimaan pasien rawat inap yang merupakan peserta asuransi swasta maupun pemerintah.',
  //   tujuan: 'Sebagai acuan penerimaan pasien rawat inap peserta asuransi.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis', 'Perawat Poliklinik', 'Perawat IGD'],
  //   prosedur: [
  //     { title: 'Terima data rawat inap dari SIMRS', desc: 'Petugas menerima data pemesanan kamar dan lembar pertanggungjawaban melalui modul SIMRS.', emr: '' },
  //     { title: 'Verifikasi berkas asuransi di EMR', desc: 'Periksa kelengkapan berkas asuransi yang diunggah ke EMR: kartu peserta, surat eligibilitas, dan dokumen pendukung.', emr: 'Dokumen asuransi di-scan dan diunggah ke modul attachment EMR.' },
  //     { title: 'Cetak gelang identitas dari EMR', desc: 'Cetak gelang identitas dan gelang risiko (jika ada) dari modul cetak EMR.', emr: 'Warna gelang risiko terintegrasi dengan catatan klinis di EMR.' },
  //     { title: 'Siapkan berkas rawat inap lengkap', desc: 'Susun berkas rawat inap termasuk formulir khusus asuransi sesuai standar assembling.', emr: '' },
  //     { title: 'Serahkan berkas dan konfirmasi di SIMRS', desc: 'Serahkan berkas ke unit perawatan dan konfirmasi distribusi di SIMRS.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'RI-03', cat: 'ranap',
  //   name: 'Mutasi/Pindah Ruang Rawat Inap',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Proses pendaftaran dan pencatatan perpindahan pasien rawat inap dari satu ruangan/kelas ke ruangan/kelas lain.',
  //   tujuan: 'Memastikan data kamar dan administrasi pasien rawat inap selalu akurat di SIMRS selama proses mutasi.',
  //   unitTerkait: ['Unit Rekam Medis', 'Instalasi Rawat Inap', 'Kasir'],
  //   prosedur: [
  //     { title: 'Terima permintaan mutasi dari pasien/keluarga', desc: 'Petugas menerima permintaan pindah kamar, menanyakan tujuan kamar dan kelas yang diinginkan.', emr: 'Ketersediaan kamar dapat langsung dicek di modul manajemen tempat tidur SIMRS.' },
  //     { title: 'Konfirmasi ketersediaan ke instalasi rawat inap asal via SIMRS', desc: 'Konfirmasi rencana perpindahan ke instalasi rawat inap tempat pasien dirawat saat ini melalui notifikasi SIMRS.', emr: '' },
  //     { title: 'Konfirmasi kamar tujuan di instalasi rawat inap baru', desc: 'Pastikan kamar tujuan siap dan kosong. Jika tidak ada, informasikan kepada pasien/keluarga.', emr: 'Status kamar (bersih/kotor/dalam persiapan) terpantau real-time di SIMRS.' },
  //     { title: 'Update data kamar dan kelas di SIMRS', desc: 'Perbarui data kamar, kelas, dan tarif pasien di SIMRS secara real-time.', emr: 'Perubahan kamar otomatis memperbarui tagihan harian pasien di modul billing SIMRS.' },
  //     { title: 'Catat mutasi di DRM dan beritahu instalasi terkait', desc: 'Catat perpindahan di DRM pasien dan beritahu instalasi rawat inap baru, kasir, serta perawat ruangan melalui notifikasi SIMRS.', emr: 'Semua unit terkait mendapat notifikasi otomatis dari SIMRS setelah update dilakukan.' },
  //   ]
  // },
  // {
  //   id: 'RI-04', cat: 'ranap',
  //   name: 'Identifikasi Bayi Baru Lahir',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Rangkaian kegiatan pencatatan dan pemberian identitas pada bayi yang baru lahir untuk menghindari tertukarnya bayi.',
  //   tujuan: 'Menghindari kesulitan dalam mengenali dan membedakan bayi satu dengan bayi lainnya.',
  //   unitTerkait: ['Instalasi Radiologi', 'Instalasi Anestesi', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap'],
  //   prosedur: [
  //     { title: 'Proses kelahiran dan bawa bayi ke ruang perina', desc: 'Bayi yang baru lahir ditolong dokter/bidan, kemudian dibawa ke ruang perinatologi.', emr: '' },
  //     { title: 'Input nama sementara bayi di EMR', desc: 'Segera input nama sementara bayi di EMR dengan format "By.Ny.[nama ibu]" untuk identifikasi awal.', emr: 'Rekam medis bayi otomatis terhubung dengan rekam medis ibu di EMR.' },
  //     { title: 'Keluarga lengkapi formulir pendaftaran bayi di EMR', desc: 'Bidan/perawat memandu keluarga mengisi data pendaftaran bayi pada formulir digital di EMR.', emr: 'Formulir pendaftaran bayi tersedia dalam format digital di EMR.' },
  //     { title: 'Rekam cap kaki bayi dan sidik jari ibu', desc: 'Bubuhkan cap dua kaki bayi dan sidik jari ibu pada formulir identifikasi yang tersimpan dalam DRM.', emr: 'Hasil scan cap dapat diunggah ke modul attachment EMR.' },
  //     { title: 'Pasang gelang identitas pada bayi dan ibu', desc: 'Pasang gelang identitas pada pergelangan kaki bayi dan tangan ibu dengan data yang identik.', emr: 'Cetak gelang bayi dari modul cetak EMR untuk konsistensi data.' },
  //   ]
  // },
  // // ── PENGELOLAAN DOKUMEN ──────────────────────────────────────────────────
  // {
  //   id: 'DK-01', cat: 'dokumen',
  //   name: 'Assembling DRM Sebelum Digunakan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Kegiatan menyusun dan merakit berkas rekam medis sebelum digunakan untuk memastikan kerapihan dan konsistensi.',
  //   tujuan: 'Menjamin kerapihan dan konsistensi berkas rekam medis yang akan digunakan.',
  //   unitTerkait: ['Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Identifikasi formulir yang dibutuhkan di EMR', desc: 'Tentukan jenis formulir yang dibutuhkan berdasarkan jenis layanan (rawat jalan/rawat inap/IGD).', emr: 'Panduan jenis formulir per layanan tersedia di modul assembling EMR.' },
  //     { title: 'Rakit formulir sesuai urutan standar', desc: 'Susun formulir rekam medis sesuai urutan yang telah ditetapkan dalam standar assembling rumah sakit.', emr: '' },
  //     { title: 'Steples dan kelompokkan berkas', desc: 'Steples formulir yang sudah tersusun dan simpan terpisah sesuai jenis layanan (rawat inap, rawat jalan, IGD).', emr: '' },
  //     { title: 'Daftarkan stok berkas di SIMRS', desc: 'Input jumlah dan jenis berkas yang sudah disiapkan ke modul manajemen stok SIMRS.', emr: 'Data stok formulir di SIMRS membantu perencanaan pengadaan formulir secara tepat waktu.' },
  //   ]
  // },
  // {
  //   id: 'DK-02', cat: 'dokumen',
  //   name: 'Assembling DRM Setelah Perawatan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Penyusunan kembali berkas rekam medis dan analisis ketidaklengkapan pengisian catatan medis setelah pasien pulang dari perawatan.',
  //   tujuan: 'Merapikan berkas DRM, mengetahui kelengkapan catatan medis, dan memantau kepatuhan tenaga kesehatan dalam pengisian berkas.',
  //   unitTerkait: ['Perawat Rawat Inap', 'Dokter RS Bhakti Husada II', 'Bagian Administrasi'],
  //   prosedur: [
  //     { title: 'Terima DRM pasien pulang di unit rekam medis', desc: 'Kumpulkan DRM pasien yang sudah pulang dari semua unit perawatan di rekam medis.', emr: 'Daftar pasien pulang hari ini tersedia di modul laporan SIMRS.' },
  //     { title: 'Pilah berkas untuk bagian administrasi', desc: 'Pisahkan berkas yang perlu diteruskan ke bagian administrasi untuk proses klaim atau billing.', emr: '' },
  //     { title: 'Susun kembali sesuai urutan standar', desc: 'Urutkan kembali semua lembaran DRM sesuai urutan assembling yang ditetapkan.', emr: '' },
  //     { title: 'Analisis ketidaklengkapan di EMR', desc: 'Periksa dan tandai setiap formulir yang belum diisi atau ditandatangani. Input hasil analisis ke modul QA EMR.', emr: 'Modul analisis kelengkapan EMR membuat laporan kepatuhan pengisian berkas per dokter/unit secara otomatis.' },
  //     { title: 'Ganti map yang rusak dan register di SIMRS', desc: 'Ganti map DRM yang sudah rusak dengan yang baru dan register ulang berkas yang sudah lengkap di SIMRS.', emr: 'Update status kelengkapan DRM di SIMRS setelah assembling selesai.' },
  //   ]
  // },
  // {
  //   id: 'DK-03', cat: 'dokumen',
  //   name: 'Peminjaman Dokumen Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Kegiatan peminjaman DRM melalui mekanisme standar untuk menjaga kerahasiaan dokumen.',
  //   tujuan: 'Memberikan akses peminjaman untuk kepentingan hukum, riset, pendidikan, dan administrasi, sekaligus menjaga kerahasiaan.',
  //   unitTerkait: ['Unit Keuangan', 'Unit Rawat Inap', 'Unit Rawat Jalan', 'Unit Gawat Darurat'],
  //   prosedur: [
  //     { title: 'Terima permohonan peminjaman DRM', desc: 'Terima permohonan peminjaman beserta data pasien dan keperluan peminjaman dari pihak pemohon.', emr: 'Permohonan dapat diajukan melalui modul request SIMRS untuk jejak digital yang tercatat.' },
  //     { title: 'Cari DRM dan input tracer di SIMRS', desc: 'Cari DRM di rak penyimpanan berdasarkan nomor RM, sisipkan tracer fisik, dan tandai status "dipinjam" di SIMRS.', emr: 'Update status DRM di SIMRS agar semua unit mengetahui bahwa dokumen sedang tidak di rak.' },
  //     { title: 'Catat peminjaman di formulir dan SIMRS', desc: 'Isi formulir peminjaman lengkap (nama pemohon, keperluan, tanggal pinjam, estimasi kembali) dan input ke SIMRS.', emr: '' },
  //     { title: 'Minta tanda tangan peminjam', desc: 'Pastikan peminjam menandatangani formulir peminjaman sebagai bukti serah terima dan tanggung jawab.', emr: '' },
  //     { title: 'Serahkan DRM dan catat batas pengembalian', desc: 'Serahkan DRM kepada peminjam dan ingatkan batas waktu pengembalian sesuai kebijakan rumah sakit.', emr: 'SIMRS akan memberi notifikasi otomatis mendekati batas waktu pengembalian.' },
  //   ]
  // },
  // {
  //   id: 'DK-04', cat: 'dokumen',
  //   name: 'Pengembalian DRM Pasien Pulang',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Proses pengembalian DRM pasien pulang rawat ke Unit Rekam Medis selambat-lambatnya 1×24 jam.',
  //   tujuan: 'Memudahkan proses koding, indeksing, dan pembuatan resume medis secara tepat waktu.',
  //   unitTerkait: ['Unit Keperawatan', 'Unit Rekam Medis', 'Administrasi'],
  //   prosedur: [
  //     { title: 'Cek kelengkapan DRM di unit keperawatan', desc: 'Masing-masing unit keperawatan memeriksa kelengkapan DRM sebelum dikembalikan: resume medis, resume keperawatan, tanda tangan dokter, dan informed consent.', emr: 'Checklist kelengkapan dokumen tersedia di modul keperawatan EMR.' },
  //     { title: 'Catat pengembalian di SIMRS', desc: 'Input pengembalian DRM ke SIMRS beserta nama perawat yang menyerahkan dan waktu pengembalian.', emr: 'Pencatatan digital di SIMRS memungkinkan audit waktu pengembalian secara akurat.' },
  //     { title: 'Verifikasi DRM di rekam medis', desc: 'Petugas rekam medis memverifikasi kelengkapan DRM yang diterima dan mencatat ruangan terakhir pasien dirawat.', emr: '' },
  //     { title: 'Coding diagnosis dan tindakan di EMR', desc: 'Lakukan koding ICD-10/ICD-9-CM di modul coding EMR dan lakukan indeksing setelah koding selesai.', emr: 'Modul coding EMR memvalidasi kode secara otomatis sebelum finalisasi.' },
  //     { title: 'Simpan DRM dan update status di SIMRS', desc: 'Simpan DRM ke rak sesuai nomor RM dan update status di SIMRS menjadi "tersimpan".', emr: '' },
  //   ]
  // },
  // {
  //   id: 'DK-05', cat: 'dokumen',
  //   name: 'Penanganan Double Nomor Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Kegiatan identifikasi, penggabungan, dan penghapusan nomor rekam medis ganda pada satu pasien untuk menjamin kesinambungan informasi medis.',
  //   tujuan: 'Memastikan informasi medis pasien berkesinambungan dalam satu nomor rekam medis yang valid.',
  //   unitTerkait: ['Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Identifikasi berkas double nomor di EMR/SIMRS', desc: 'Cari dan identifikasi pasien yang memiliki lebih dari satu nomor RM di sistem EMR/SIMRS.', emr: 'Fitur deteksi duplikasi di SIMRS dapat mencari kesamaan nama, NIK, dan tanggal lahir untuk menemukan potensi double nomor.' },
  //     { title: 'Verifikasi bahwa kedua nomor milik pasien yang sama', desc: 'Bandingkan data identitas pada kedua berkas secara cermat: nama, tanggal lahir, NIK, dan data klinis untuk memastikan milik satu orang.', emr: '' },
  //     { title: 'Tentukan nomor RM yang dipertahankan', desc: 'Tentukan nomor RM yang akan digunakan untuk kunjungan selanjutnya (biasanya nomor yang lebih lama atau lebih lengkap datanya).', emr: 'Acuan penentuan nomor yang dipertahankan mengikuti kebijakan yang ditetapkan dalam modul SIMRS.' },
  //     { title: 'Gabungkan berkas fisik dan data EMR', desc: 'Satukan berkas fisik kedua nomor ke dalam satu DRM dan gabungkan data riwayat medis di EMR ke nomor yang dipertahankan.', emr: 'Fitur merge data pasien di EMR memastikan semua riwayat klinis tergabung tanpa ada yang hilang.' },
  //     { title: 'Nonaktifkan nomor RM yang dihapus di SIMRS', desc: 'Nonaktifkan nomor RM yang tidak dipakai di SIMRS dan tandai dengan catatan bahwa nomor tersebut telah digabung.', emr: 'Nomor RM yang dinonaktifkan masih dapat ditelusuri di SIMRS untuk keperluan audit.' },
  //   ]
  // },
  // {
  //   id: 'DK-06', cat: 'dokumen',
  //   name: 'Penanganan Missfile Dokumen Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Prosedur alternatif yang dilakukan jika DRM tidak ditemukan di rak penyimpanan (missfile) agar pelayanan pasien tetap dapat berjalan.',
  //   tujuan: 'Sebagai prosedur alternatif jika berkas rekam medis tidak ditemukan.',
  //   unitTerkait: ['Unit Rekam Medis', 'Unit Rawat Jalan', 'Unit Gawat Darurat', 'Unit Casemix', 'Unit Farmasi Klinis'],
  //   prosedur: [
  //     { title: 'Cek status DRM di SIMRS', desc: 'Sebelum menyatakan missfile, cek terlebih dahulu status DRM di SIMRS apakah sedang dipinjam unit lain, dalam distribusi, atau memang tidak ditemukan.', emr: 'Status real-time DRM di SIMRS dapat menghemat waktu pencarian fisik yang tidak perlu.' },
  //     { title: 'Lakukan pencarian fisik secara berulang dan sistematis', desc: 'Cari DRM di rak penyimpanan secara berulang: periksa rak sebelum/sesudah nomor yang dicari, rak tunda, dan area distribusi.', emr: '' },
  //     { title: 'Minta persetujuan dokter untuk pembaruan berkas', desc: 'Jika pencarian tidak berhasil, laporkan ke dokter dan minta persetujuan untuk pembuatan berkas pengganti sementara.', emr: '' },
  //     { title: 'Buat berkas pengganti menggunakan data EMR', desc: 'Buat berkas pengganti sementara menggunakan data historis pasien yang tersimpan di EMR.', emr: 'EMR menyimpan seluruh riwayat entri digital yang dapat digunakan sebagai sumber rekonstruksi data klinis pasien.' },
  //     { title: 'Catat insiden missfile di SIMRS', desc: 'Input laporan missfile di modul pelaporan SIMRS untuk keperluan audit dan tindak lanjut.', emr: 'Laporan missfile di SIMRS membantu manajemen memantau tren dan menemukan akar masalah filling.' },
  //   ]
  // },
  // {
  //   id: 'DK-07', cat: 'dokumen',
  //   name: 'Coding Diagnosis dan Tindakan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Pemberian kode penyakit berdasarkan diagnosis dan tindakan yang telah ditetapkan dokter menggunakan ICD-10 dan ICD-9-CM.',
  //   tujuan: 'Menyeragamkan pengelompokan penyakit dan tindakan untuk keperluan pelaporan, manajemen, dan riset.',
  //   unitTerkait: ['Unit Rawat Jalan', 'Unit Rawat Inap', 'UGD', 'Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Terima DRM dari unit terkait', desc: 'Petugas rekam medis menerima DRM yang dikembalikan dari unit rawat jalan, IGD, atau ruang rawat inap.', emr: 'DRM yang sudah dikembalikan terpantau di modul distribusi SIMRS.' },
  //     { title: 'Verifikasi jumlah dan kelengkapan berkas', desc: 'Cocokkan jumlah DRM yang diterima dengan data di SIMRS dan periksa kelengkapan setiap berkas.', emr: '' },
  //     { title: 'Input kode diagnosis dan tindakan di EMR', desc: 'Input kode ICD-10 untuk diagnosis dan ICD-9-CM untuk tindakan ke modul coding EMR berdasarkan catatan dokter dalam DRM.', emr: 'Modul coding EMR menyediakan fitur pencarian kode otomatis dan validasi untuk meminimalisir kesalahan.' },
  //     { title: 'Verifikasi dan finalisasi kode', desc: 'Verifikasi kesesuaian antara kode diagnosis utama, diagnosis sekunder, dan tindakan sebelum finalisasi.', emr: 'EMR memberi peringatan jika ditemukan inkonsistensi antara kode diagnosis dan tindakan.' },
  //     { title: 'Lakukan indeksing di EMR', desc: 'Lakukan indeksing penyakit, tindakan, dokter, dan kematian di modul indeksing EMR.', emr: 'Data indeksing EMR secara otomatis mengumpan ke laporan morbiditas dan mortalitas rumah sakit.' },
  //   ]
  // },
  // // ── ADMINISTRASI MEDIS ───────────────────────────────────────────────────
  // {
  //   id: 'AM-01', cat: 'admin',
  //   name: 'Penomoran Rekam Medis (Unit Numbering System)',
  //   unit: 'Unit Rekam Medis / Pendaftaran',
  //   pengertian: 'Sistem identifikasi pasien dengan memberikan satu nomor rekam medis unik yang digunakan seumur hidup selama berobat di RS Bhakti Husada II Purwakarta.',
  //   tujuan: 'Sebagai acuan pemberian nomor rekam medis kepada pasien baru yang berkunjung.',
  //   unitTerkait: ['Bagian Pendaftaran'],
  //   prosedur: [
  //     { title: 'Konfirmasi pasien baru di SIMRS', desc: 'Petugas pendaftaran memastikan pasien belum pernah terdaftar di SIMRS dengan mencari berdasarkan NIK atau nama dan tanggal lahir.', emr: 'Fitur pencarian duplikasi di SIMRS mencegah pemberian nomor ganda kepada pasien yang sama.' },
  //     { title: 'Generate nomor RM secara otomatis di SIMRS', desc: 'SIMRS secara otomatis menghasilkan nomor RM baru dalam urutan kronologis Unit Numbering System.', emr: 'Nomor RM digenerate otomatis — tidak perlu pencatatan manual untuk menghindari kesalahan urutan.' },
  //     { title: 'Input data identitas pasien ke EMR', desc: 'Masukkan data identitas lengkap pasien ke EMR: nama, NIK, tanggal lahir, alamat, dan kontak darurat.', emr: 'Data NIK dapat diverifikasi real-time ke Dukcapil melalui integrasi EMR.' },
  //     { title: 'Cetak KIB dari SIMRS', desc: 'Cetak Kartu Identitas Berobat (KIB) dari SIMRS dan serahkan kepada pasien.', emr: 'KIB memuat nomor RM dan QR code yang dapat dipindai di SIMRS untuk akses cepat data pasien.' },
  //   ]
  // },
  // {
  //   id: 'AM-02', cat: 'admin',
  //   name: 'Sistem Penamaan Pasien',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Tata cara penulisan nama pasien secara baku dalam dokumen rekam medis elektronik untuk membedakan satu pasien dengan pasien lainnya.',
  //   tujuan: 'Sebagai acuan standar penulisan nama pasien untuk menghindari kesalahan identifikasi.',
  //   unitTerkait: ['Petugas Pendaftaran', 'Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Input nama sesuai identitas resmi di EMR', desc: 'Nama pasien diinput di EMR sesuai nama asli pada KTP, SIM, atau paspor — tanpa singkatan atau perubahan ejaan.', emr: 'Fitur verifikasi NIK di EMR membantu memastikan kesesuaian nama dengan data kependudukan.' },
  //     { title: 'Tambahkan gelar status untuk pasien perempuan', desc: 'Perempuan sudah menikah/janda: tambahkan "Ny." di akhir nama. Belum menikah usia ≥13 tahun: tambahkan "Nn.".', emr: 'EMR memvalidasi konsistensi gelar dengan data jenis kelamin dan usia pasien.' },
  //     { title: 'Tambahkan "Tn." untuk pasien laki-laki dewasa', desc: 'Laki-laki yang sudah menikah atau berusia ≥13 tahun ditambahkan gelar "Tn." di akhir nama.', emr: '' },
  //     { title: 'Gunakan "An." untuk pasien anak', desc: 'Pasien yang belum berusia 13 tahun menggunakan gelar "An." di akhir nama, tanpa memandang jenis kelamin.', emr: '' },
  //     { title: 'Verifikasi dan simpan di EMR', desc: 'Verifikasi penulisan nama sebelum menyimpan untuk menghindari duplikasi rekam medis.', emr: 'EMR memberi peringatan jika ditemukan nama serupa dalam database untuk mencegah double registrasi.' },
  //   ]
  // },
  // {
  //   id: 'AM-03', cat: 'admin',
  //   name: 'Visum et Repertum',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Laporan tertulis yang dibuat dokter atas permintaan resmi penyidik kepolisian mengenai hasil pemeriksaan untuk kepentingan peradilan.',
  //   tujuan: 'Sebagai acuan bagi dokter dan staf dalam proses pembuatan visum et repertum.',
  //   unitTerkait: ['IGD', 'Dokter IGD', 'Unit Rekam Medis', 'Instalasi Forensik'],
  //   prosedur: [
  //     { title: 'Terima surat permintaan visum dari kepolisian', desc: 'Petugas pendaftaran menerima surat permintaan resmi Visum et Repertum dari penyidik kepolisian.', emr: '' },
  //     { title: 'Teruskan ke petugas visum rekam medis dan catat di SIMRS', desc: 'Teruskan permintaan ke petugas khusus visum di rekam medis dan catat nomor surat serta identitas penyidik di SIMRS.', emr: 'Dokumentasi digital di SIMRS memastikan jejak administrasi visum tercatat dengan baik.' },
  //     { title: 'Generate nomor registrasi visum di SIMRS', desc: 'Buat nomor registrasi visum di modul SIMRS secara otomatis untuk menghindari duplikasi.', emr: '' },
  //     { title: 'Dokter susun laporan visum di EMR', desc: 'Dokter yang berwenang memeriksa korban dan menyusun laporan Visum et Repertum pada formulir digital EMR.', emr: 'Laporan visum dapat ditandatangani secara elektronik oleh dokter di EMR dengan kekuatan hukum yang setara.' },
  //     { title: 'Finalisasi dan serahkan visum', desc: 'Visum asli diserahkan ke kepolisian, salinan diarsipkan dalam DRM dan diunggah ke modul attachment EMR.', emr: 'Update status penyelesaian visum di SIMRS setelah diserahkan kepada pihak berwajib.' },
  //   ]
  // },
  // {
  //   id: 'AM-04', cat: 'admin',
  //   name: 'Pembuatan Surat Keterangan Kematian',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Surat keterangan resmi yang diterbitkan saat pasien meninggal di rumah sakit.',
  //   tujuan: 'Sebagai acuan bagi dokter dan staf dalam penerbitan surat keterangan kematian.',
  //   unitTerkait: ['Dokter yang Merawat', 'Petugas IGD', 'Unit Kamar Jenazah', 'Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Generate nomor surat kematian di SIMRS', desc: 'Penomoran surat kematian dilakukan di Unit Rekam Medis melalui modul penomoran SIMRS secara otomatis.', emr: 'SIMRS menghasilkan nomor unik untuk menghindari duplikasi.' },
  //     { title: 'Dokter input data kematian di EMR', desc: 'Dokter yang menangani mengisi formulir surat keterangan kematian digital di EMR: identitas pasien, waktu meninggal, dan penyebab kematian.', emr: 'Formulir surat kematian digital tersedia di modul klinisi EMR dan dapat ditandatangani secara elektronik.' },
  //     { title: 'Cetak surat kematian dua rangkap', desc: 'Cetak surat kematian dalam dua rangkap: asli untuk keluarga, salinan untuk arsip dalam DRM.', emr: '' },
  //     { title: 'Dokter menandatangani surat kematian', desc: 'Dokter menandatangani surat. Surat asli hanya diberikan satu kali kepada keluarga pasien.', emr: 'Tanda tangan elektronik dokter di EMR memiliki kekuatan hukum yang setara dengan tanda tangan basah.' },
  //     { title: 'Arsipkan di DRM dan EMR', desc: 'Masukkan salinan ke DRM dan unggah arsip digital ke modul attachment EMR, lalu update status di SIMRS.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'AM-05', cat: 'admin',
  //   name: 'Pembuatan Formulir KK4',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'KK4 adalah ringkasan pelayanan dokter untuk pasien yang cedera akibat kecelakaan kerja, baik kondisi hidup maupun meninggal.',
  //   tujuan: 'Membantu permintaan perusahaan untuk klaim asuransi kecelakaan kerja.',
  //   unitTerkait: ['Petugas Unit Rekam Medis'],
  //   prosedur: [
  //     { title: 'Terima formulir KK4 dari pasien/petugas perusahaan', desc: 'Petugas rekam medis menerima formulir KK4 dari pasien atau petugas perusahaan yang mengajukan klaim.', emr: '' },
  //     { title: 'Informasikan waktu penyelesaian', desc: 'Jelaskan bahwa pengisian KK4 memerlukan waktu dan tidak dapat diselesaikan hari itu juga, kecuali pasien sedang kontrol ke dokter spesialis.', emr: '' },
  //     { title: 'Ambil data dari DRM dan EMR', desc: 'Ambil DRM pasien dan salin data yang dibutuhkan untuk KK4 dari EMR: diagnosis, tindakan, dan riwayat perawatan.', emr: 'Data medis lengkap tersedia di EMR untuk memudahkan pengisian KK4 secara akurat.' },
  //     { title: 'Dokter melengkapi dan menandatangani KK4', desc: 'Antarkan KK4 ke dokter spesialis untuk dilengkapi dan ditandatangani.', emr: 'Jika pasien sedang kontrol, KK4 dapat langsung diselesaikan saat kunjungan.' },
  //     { title: 'Serahkan KK4 dan arsipkan', desc: 'Serahkan KK4 yang sudah ditandatangani kepada pemohon dan arsipkan salinan digital di modul attachment EMR.', emr: '' },
  //   ]
  // },
  // {
  //   id: 'AM-06', cat: 'admin',
  //   name: 'Kerangka Waktu Asesmen Awal',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Standar waktu penyelesaian asesmen awal di IGD, rawat jalan, dan rawat inap yang dilakukan dokter atau perawat.',
  //   tujuan: 'Menetapkan dan memantau kepatuhan waktu penyelesaian asesmen awal untuk semua pasien.',
  //   unitTerkait: ['Instalasi Gawat Darurat', 'Instalasi Rawat Jalan', 'Instalasi Rawat Inap'],
  //   prosedur: [
  //     { title: 'IGD: asesmen awal selesai dalam 30 menit', desc: 'Asesmen awal pasien IGD harus diselesaikan dan diinput ke EMR dalam 30 menit setelah diperiksa dokter triage.', emr: 'Timer asesmen berjalan otomatis di EMR sejak pasien terdaftar. Sistem memberi peringatan mendekati batas waktu.' },
  //     { title: 'IGD ≥8 jam: lakukan asesmen awal rawat inap', desc: 'Jika pasien IGD belum dapat dipindah ke rawat inap dalam 8 jam, asesmen awal rawat inap dilakukan di IGD.', emr: 'EMR menampilkan notifikasi otomatis jika pasien IGD melewati 8 jam tanpa keputusan rawat inap.' },
  //     { title: 'Rawat jalan: asesmen selesai sebelum pasien keluar', desc: 'Asesmen awal rawat jalan harus diselesaikan dan difinalisasi di EMR sebelum pasien meninggalkan poliklinik.', emr: '' },
  //     { title: 'Rawat inap: asesmen selesai dalam 24 jam', desc: 'Asesmen awal rawat inap harus diselesaikan dan diinput ke EMR dalam 24 jam setelah pasien masuk ruang perawatan.', emr: 'EMR menampilkan notifikasi kepada DPJP dan perawat jika asesmen belum selesai mendekati batas 24 jam.' },
  //     { title: 'Monitor kepatuhan melalui dashboard SIMRS', desc: 'Kepala unit melakukan monitoring kepatuhan waktu asesmen melalui dashboard SIMRS secara berkala.', emr: 'Dashboard SIMRS menampilkan persentase kepatuhan waktu asesmen awal per unit secara real-time.' },
  //   ]
  // },
  // // ── KEAMANAN & RETENSI ───────────────────────────────────────────────────
  // {
  //   id: 'KR-01', cat: 'keamanan',
  //   name: 'Penyimpanan Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Proses penyimpanan berkas rekam medis secara tertib untuk memudahkan pencarian dan menjaga keamanan dokumen.',
  //   tujuan: 'Mewujudkan tertib administrasi dan memudahkan pencarian berkas rekam medis.',
  //   unitTerkait: ['Petugas Poliklinik Rawat Jalan'],
  //   prosedur: [
  //     { title: 'Terima DRM dari poliklinik rawat jalan', desc: 'Petugas rekam medis menerima DRM yang telah selesai digunakan dari petugas poliklinik rawat jalan.', emr: 'Konfirmasi pengembalian DRM dari poliklinik tercatat di SIMRS untuk audit trail.' },
  //     { title: 'Lakukan coding diagnosis di EMR', desc: 'Input kode diagnosis (ICD-10) dan kode tindakan (ICD-9-CM) ke modul coding EMR berdasarkan catatan dokter.', emr: 'Modul coding EMR menyediakan validasi kode untuk memastikan akurasi sebelum data tersimpan.' },
  //     { title: 'Register diagnosis di EMR', desc: 'Daftarkan kode diagnosis dan tindakan di modul indeksing EMR untuk keperluan statistik dan pelaporan.', emr: 'Data indeksing terintegrasi otomatis dengan laporan morbiditas dan mortalitas di SIMRS.' },
  //     { title: 'Simpan DRM dengan sistem Terminal Digit Filing', desc: 'Simpan DRM yang sudah diproses ke rak penyimpanan dengan sistem Terminal Digit Filing (sentralisasi) sesuai nomor RM.', emr: 'Update status penyimpanan DRM di SIMRS setelah disimpan ke rak.' },
  //   ]
  // },
  // {
  //   id: 'KR-02', cat: 'keamanan',
  //   name: 'Kerahasiaan dan Pengamanan Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Kegiatan menjaga keamanan dan kerahasiaan rekam medis sesuai kode etik kedokteran dan peraturan perundang-undangan yang berlaku.',
  //   tujuan: 'Menjaga keamanan dan kerahasiaan rekam medis dari pihak yang tidak berwenang.',
  //   unitTerkait: ['Semua Unit'],
  //   prosedur: [
  //     { title: 'Batasi akses EMR sesuai level otorisasi', desc: 'Pastikan hak akses EMR setiap pengguna sesuai dengan jabatan dan kewenangannya. Tidak ada akses lintas unit tanpa otorisasi.', emr: 'Modul manajemen hak akses di EMR membatasi data yang dapat dilihat/diedit sesuai profil pengguna.' },
  //     { title: 'Dokter bertanggung jawab atas pelepasan informasi', desc: 'Setiap pelepasan informasi diagnosis kepada pasien/keluarga menjadi tanggung jawab dokter yang merawat.', emr: 'Log akses dan pelepasan informasi di EMR tercatat otomatis beserta identitas petugas dan waktu akses.' },
  //     { title: 'Simpan DRM fisik di ruangan yang terkunci', desc: 'Ruang penyimpanan DRM hanya boleh diakses oleh petugas rekam medis yang berwenang.', emr: '' },
  //     { title: 'Catat semua peminjaman di formulir dan SIMRS', desc: 'Setiap peminjaman DRM wajib dicatat di formulir peminjaman dan diinput ke SIMRS sebagai bukti serah terima.', emr: 'Jejak peminjaman digital di SIMRS memudahkan audit dan pelacakan lokasi DRM kapan saja.' },
  //     { title: 'Laporkan pelanggaran kerahasiaan ke manajemen', desc: 'Setiap dugaan pelanggaran kerahasiaan rekam medis wajib dilaporkan segera kepada kepala unit dan manajemen.', emr: 'Insiden kerahasiaan dapat dilaporkan melalui modul pelaporan insiden di SIMRS.' },
  //   ]
  // },
  // {
  //   id: 'KR-03', cat: 'keamanan',
  //   name: 'Perlindungan DRM dari Kerusakan dan Kehilangan',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Pemeliharaan berkas rekam medis secara berkala untuk melindungi dari kerusakan fisik, kotor, dan gangguan serangga.',
  //   tujuan: 'Menjamin keamanan dokumen rekam medis dari kerusakan fisik dan kehilangan.',
  //   unitTerkait: ['Unit Rekam Medis', 'Panitia Rekam Medis'],
  //   prosedur: [
  //     { title: 'Inventarisasi berkala sesuai sistem penomoran', desc: 'Lakukan inventarisasi DRM di rak penyimpanan secara berkala dan susun kembali sesuai urutan penomoran.', emr: 'Data stok DRM di SIMRS membantu identifikasi berkas yang belum kembali ke rak penyimpanan.' },
  //     { title: 'Ganti map DRM yang rusak', desc: 'Identifikasi dan ganti map DRM yang sudah rusak, kotor, atau tidak layak pakai dengan yang baru.', emr: '' },
  //     { title: 'Buat laporan berkas yang belum kembali', desc: 'Buat laporan DRM yang belum kembali ke rak penyimpanan berdasarkan data tracer dan SIMRS.', emr: 'Modul laporan SIMRS dapat menghasilkan daftar DRM yang sedang keluar dari rak secara otomatis.' },
  //     { title: 'Lakukan pemeliharaan ruang penyimpanan', desc: 'Periksa kondisi ruang penyimpanan secara berkala: kebersihan, kelembapan, dan perlindungan dari serangga.', emr: '' },
  //     { title: 'Laporkan kondisi DRM kepada manajemen', desc: 'Buat laporan kondisi fisik DRM dan ruang penyimpanan kepada Panitia Rekam Medis secara berkala.', emr: 'Laporan kondisi DRM dapat di-input ke modul pelaporan SIMRS untuk pemantauan manajemen.' },
  //   ]
  // },
  // {
  //   id: 'KR-04', cat: 'keamanan',
  //   name: 'Retensi dan Pemusnahan Rekam Medis',
  //   unit: 'Unit Rekam Medis',
  //   pengertian: 'Proses pemusnahan DRM pasien yang tidak aktif setelah 5 tahun sejak kunjungan terakhir, sesuai peraturan yang berlaku.',
  //   tujuan: 'Sebagai acuan pemusnahan rekam medis pasien in-aktif secara tertib dan sesuai regulasi.',
  //   unitTerkait: ['Direktur RS', 'Panitia Rekam Medis', 'Bagian IT', 'Front Office/Admisi'],
  //   prosedur: [
  //     { title: 'Identifikasi DRM in-aktif di SIMRS', desc: 'Identifikasi DRM yang memenuhi syarat retensi (tidak ada kunjungan selama ≥5 tahun) berdasarkan laporan SIMRS.', emr: 'Modul retensi SIMRS secara otomatis mengelompokkan DRM berdasarkan tahun kunjungan terakhir.' },
  //     { title: 'Inventarisasi dan cetak daftar DRM yang akan dimusnahkan', desc: 'Catat nomor RM dan nama pasien yang akan dimusnahkan, input ke SIMRS, dan cetak daftar inventaris.', emr: 'SIMRS menghasilkan daftar inventaris retensi yang dapat dicetak sebagai dokumen berita acara.' },
  //     { title: 'Pisahkan resume dan laporan pembedahan', desc: 'Keluarkan resume medis dan laporan pembedahan (jika ada) dari setiap DRM sebelum dimusnahkan untuk disimpan permanen.', emr: 'Scan resume dan laporan pembedahan, unggah ke arsip permanen EMR sebelum DRM fisik dimusnahkan.' },
  //     { title: 'Buat tracer "musnah" di SIMRS', desc: 'Buat tracer digital berisi keterangan "dimusnahkan" di SIMRS untuk setiap DRM yang akan dimusnahkan.', emr: '' },
  //     { title: 'Musnahkan DRM dengan berita acara', desc: 'Lakukan pemusnahan DRM disaksikan panitia rekam medis dan buat berita acara pemusnahan yang ditandatangani Direktur.', emr: 'Nonaktifkan nomor RM yang dimusnahkan di SIMRS dan simpan berita acara digital di modul arsip EMR.' },
  //   ]
  // },
];
