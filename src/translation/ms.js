//p2p

const messages = {
  p2p_need_username: 'Untuk menggunakan perkhidmatan P2P, pilih nama timangan. Hati-hati, anda boleh memasukkan nama timangan sekali sahaja.',
  action: {
    'publish-advert': 'Menerbitkan iklan',
    'return_to_adverts': 'Kembali kepada senarai iklan',
    'on': 'Hidup',
    'off': 'Mati',
    'add': 'tambah',
    'create': 'Cipta',
    'delete': 'Padam',
    'open': 'Buka',
    'close': 'Tutup',
    'pause': 'Jeda',
    'read': 'Baca',
    'cancel': 'Batal',
    'canceled': 'Dibatalkan',
    'search': 'Carian',
    'send': 'Hantar',
    'clear': 'Jelas',
    'back': 'Kembali',
    'save': 'Simpan',
    'take': 'Ambil',
    'like': 'Suka',
    'dislike': 'Tidak suka',
    'register-for-free': 'Daftar percuma',
    'buy': 'Beli',
    'sell': 'Jual',
    'quick-buy': 'Cepat beli',
    'quick-sell': 'Cepat jual',
    'buy-online': 'Beli dalam talian',
    'buy-offline': 'Beli luar talian',
    'sell-online': 'Jual dalam talian',
    'sell-offline': 'Jual luar talian',
    'show-more': 'Tunjuk lagi',
    'details': 'Terperinci',
    'setting': 'Tetapan',
    'my-adverts': 'Iklan saya',
    'order-active': 'Aktif pesanan',
    'order-completed': 'Pesanan selesai',
    'order-canceled': 'Pesanan dibatalkan',
    'processing': 'Pemprosesan...',
    'not-register': 'Tidak daftar ladi?',
    'password-recovery': ' Pemulihan kata laluan',
    'is-register': 'Sudah mempunyai akaun?',
    'new_wallet': 'Wallet baru',
    'add_hash': 'Tambah hash baru',
    'send_request': 'Hantar permohonan',
    'complain': 'Mengadu',
    'activate': 'Diaktifkan',
    'deactivate': 'Menyahaktifkan',
    'ask-qrcode': 'Tanya kod Qr',
    'update': 'Kemas kini',
    need_update_search: 'Perlu mengemas kini carian',
    copy: 'Salinan',
    editing: 'Menyunting',
    create_order: 'Buat pesanan',
    edit: 'Menyunting',
    return_list: 'Kembali ke senarai',
  },
  message: {
    p2p_need_username: 'Untuk menggunakan perkhidmatan P2P, pilih nama timangan. Hati-hati, anda boleh memasukkan nama timangan sekali sahaja.',
    refresh_page_and_return: 'Muat semula halaman atau kembali ke halaman utama.',
    return_to_list_wallet: 'Kembali ke senarai wallet.',
    select_location: 'Pilih lokasi',
    price_rate: 'Harga transaksi dengan nilai pasaran semasa',
    not_pair_rates: 'Kadar untuk pasangan mata wang anda tidak dijumpai',
    title_currency_buy: 'Jual mata wang %{currency}',
    title_currency_sell: 'Beli mata wang %{currency}',
    question_sell: 'Berapa banyak yang anda mahu jual?',
    question_buy: 'Berapa banyak yang anda ingin beli?',
    user_last_seen: 'Pengguna terakhir dilihat dalam talian %{time}',
    order_low_buy: 'Jumlah terkecil yang boleh anda beli untuk iklan ini %{value} %{currency}',
    order_high_buy: 'Jumlah terbesar yang boleh anda beli untuk iklan ini %{value} %{currency}',
    order_low_sell: 'Jumlah terkecil yang boleh anda jual untuk iklan ini %{value} %{currency}',
    order_high_sell: 'Jumlah terbesar yang boleh anda jual untuk iklan ini %{value} %{currency}',
    direct_exchange_rate: 'Kadar pertukaran terus',
    reverse_exchange_rate: 'Kadar pertukaran balik',
    order_confirm_warning: `Mengaktifkan penerimaan automatik pesanan, anda bersetuju bahawa permulaan pelaksanaan akan dimulakan 
oleh pelanggan dan anda akan mempunyai %{minutes} minit dari masa itu untuk menyelesaikan pesanan`,
    exchange_currency_sell: 'Mata wang yang anda mahu jual',
    'payment-currency': 'Mata wang yang anda mahu terima',
    exchange_currency_buy: 'Mata wang yang anda ingin beli',
    'payment-currency_buy': 'Mata wang yang anda ingin bertukar',
    order_confirm_text: 'Mula perjanjian untuk bertukar %{payment} untuk %{exchange}?',
    refresh_rate_order: 'Iklan telah mengemas kini kadar. Sambung?',
    show_order: 'Iklan dipaparkan',
    hide_order: 'Iklan tersembunyi',
    error_send_message: 'Ralat berlaku semasa menghantar mesej.',
    success_send_message: 'Mesej dihantar.',
    code_send_to_email: 'Kod telah dihantar kepada e-mel.',
    quest_activation_code: 'Meminta kod pengaktifan.',
    request_success_activation: 'E-mel pengaktifan telah dihantar semula ke anda'
  },
  form: {
    'all': 'Semua',
    'title': 'Tajuk',
    'description': 'Huraian',
    'sms-verified': 'SMS disahkan',
    'sms-not-required': 'SMS tidak diperlukan',
    'id-tidak-diperlukan': 'id-not-required',
    'seller': 'Penjual',
    'country': 'Negara',
    'rate': 'Kadar',
    'price': 'Harga',
    'location': 'Lokasi', 'password': 'Kata laluan',
    'optional-field': 'Bidang pilihan',
    'email': 'E-mel',
    'all-adverts': 'Semua iklan',
    'username': 'Nama pengguna',
    'currency': 'Mata wang',
    'amount': 'Jumlah',
    'limits': 'Had',
    'type': 'Jenis',
    'Amoun-min': 'Jumlah Minimum',
    'amount-min-info': 'Had transaksi minimum',
    'amount-max': 'Jumlah maksimum',
    'amount-max-info': 'Had transaksi maksimum',
    'amount-limit': 'Had jumlah',
    'payment-method': 'Kaedah pembayaran',
    'payment-system': 'Sistem pembayaran',
    'payment-rate': 'Kadar untuk satu unit mata wang pertukaran',
    'payment-currency': 'Pembayaran mata wang',
    'status': 'Status',
    'date-created': 'Tarikh dibuat',
    'date-updated': 'kemas kini',
    'select-currency': 'Pilih mata wang',
    'order-type': 'Jenis pesanan',
    'additional-info': 'Maklumat tambahan',
    'field-required': 'Bidang diperlukan',
    'select_currency': 'Pilih mata wang',
    'balance': 'Baki',
    'refill': 'deposit',
    'withdraw': 'Mengeluarkan',
    'hash': 'Hash',
    'price_per_unit': 'Harga per unit',
    'comment': 'Komen',
    'buy': 'Beli',
    'your_messag': 'Mesej anda...',
    'field_require': 'Bidang diperlukan',
    'paymentway': 'Sistem pembayaran',
    'address': 'Alamat',
    'time-expired-minutes': 'Masa tamat tempuh(Minit)',
    'select': 'Pilih',
    'numeric-code': 'Kod angka',
    'wexcode_next': 'Sila cuba lagi',
    'city': 'Bandar',
    'exchange_currency': 'Tukaran mata wang',
    'select_type_advert': 'Pilih jenis iklan',
    tfa_code: 'Kod TFA',
    platform: 'Platform',
    autoconfirmation_order: 'Autopengesahan',
    user_price: 'Harga pengguna',
    price_from_platform: 'Harga dari platform',
    profit: 'Profit',
    order: 'Pesanan',
    user_buyer: 'Pembeli',
    user_seller: 'Penjual',
    exchange_currency_sell: 'Mata wang yang anda mahu jual',
    'payment-currency_sell': 'Mata wang yang anda mahu terima',
    exchange_currency_buy: 'Mata wang yang anda ingin beli',
    'payment-currency_buy': 'Mata wang yang anda ingin tukar',
  },
};
const newError = {
  "32700": "Ralat tidak diketahui pada pelayan",
  "32701": "Ralat tidak diketahui pada pelayan",
  "32702": "Ralat tidak diketahui pada pelayan",
  "32703": "Kaedah API tidak dijumpai",
  "32704": "Sesi ini tidak sah",
  "32705": "Sesi ini tidak sah",
  "32706": "Kod TFA salah",
  "32707": "Kod TFA salah",
  "40000": "Mata wang tidak dijumpai",
  "40001": "Mata wang tidak dijumpai",
  "40002": "Jenis mata wang tidak sah",
  "41000": "Wallet belum dibuat",
  "41001": "Kupon tidak sah",
  "41002": "Kupon tidak sah",
  "41003": "Ralat semasa memasukkan kod WEX",
  "41004": "Alamat hash tidak sah",
  "41005": "Wallet tidak dijumpai",
  "41006": "Insufficient funds",
  "41007": "Kekurangan dana",
  "41008": "Insufficient funds",
  "41009": "Ralat: gagal membuat transaksi",
  "41010": "Penjual tidak dijumpai",
  "41011": "Pembeli tidak dijumpai",
  "41012": "Penjual tidak dijumpai",
  "41013": "Pembeli tidak dijumpai",
  "42000": "Sistem pembayaran tidak dijumpai",
  "43000": "Sistem pembayaran tidak dijumpai",
  "43001": "Sistem pembayaran tidak dijumpai",
 "44000": "Saya cuba tidak dijumpai",
  "44001": "Saya cuba tidak dijumpai",
  "45000": "Masa urus niaga tidak ditentukan",
  "45001": "Masa urus niaga tidak ditentukan",
  "45002": "Autobatterien tidak ditentukan",
  "45003": "Autobatterien tidak ditentukan",
  "45004": "Jenis transaksi tidak ditentukan",
  "45005": "Jenis transaksi tidak ditentukan",
  "45006": "Jumlah minima tidak betul", "45007": "Jumlah maksima tidak betul",
  "45008": "Jumlah pertukaran maksimum tidak sah",
  "45009": "Jumlah pertukaran maksimum tidak sah",
  "45010": "Lokasi tidak ditentukan",
  "45011": "Kadar tidak dinyatakan",
  "45012": "Kadar tidak dinyatakan",
  "45013": "Kadar tidak dinyatakan",
 "45014": "Kadar tidak dinyatakan",
  "45015": "Kadar platform tidak ditentukan",
  "45016": "Kadar platform tidak ditentukan",
  "45017": "Nilai kadar faedah tidak ditentukan",
  "45018": "Nilai kadar faedah tidak ditentukan",
  "45019": "Kadar tidak ditentukan",
  "45020": "Dana yang tidak mencukupi untuk membuat iklan",
  "45021": "Gagal membuat iklan",
  "45022": "Iklan tidak dijumpai",
  "45023": "Status transaksi tidak ditentukan",
  "45024": "Status transaksi tidak ditentukan",
"45025": "Gagal menukar status transaksi",
  "45026": "Iklan tidak dijumpai",
  "45027": "Ralat mengemas kini iklan",
  "46000": "Transaksi tidak dijumpai",
  "46001": "Transaksi tidak dijumpai",
  "46002": "Iklan token tidak dinyatakan",
  "46003": "Token tidak dinyatakan",
  "46004": "Amaun transaksi ini tidak ditentukan",
  "46005": "Amaun transaksi ini tidak ditentukan",
 "46006": "Gagal membuat transaksi",
  "46007": "Status urus niaga tidak boleh diubah",
  "46008": "Transaksi tidak dikemas kini",
  "46009": "Status transaksi tidak ditentukan",
  "46010": "Status transaksi tidak ditentukan",
  "47000": "Jangan tentukan jenis mesej",
  "47001": "Jangan tentukan jenis mesej",
  "47002": "Mesej kosong",
  "47003": "Mesej kosong",
  "47004": "Gagal untuk dihantar",
  "47005": "Id mesej ditentukan",
  "47006": "Gagal untuk dihantar",
  "48000": "Lokasi tidak ditentukan",
  "48001": "Lokasi tidak ditentukan",
  "49000": "Ralat ketika membuat wallet",
  "50000": "Ralat semasa menghantar",
  "50001": "Tentukan penilaian",
  "50002": "Tentukan penilaian",
  "50003": "Komen diperlukan",
  "51000": "Pengguna tidak dijumpai",
  "51001": "E-mel tidak dinyatakan",
  "51002": "E-mel format tidak sah",
  "51003": "Emel telah digunakan",
  "51004": "Nama pengguna tidak ditentukan",
  "51005": "Format Nama Pengguna tidak sah",
 "51006": "Nama pengguna sudah digunakan",
  "51007": "Kata laluan tidak ditentukan",
  "51008": "Kata laluan tidak sah",
  "51009": "Had melebihi log",
  "51010": "Gagal menukar kata laluan",
  "51011": "Ralat semasa mendaftar",
  "51012": "Kod pengaktifan tidak sah tidak dijumpai",
  "51013": "Kod pengaktifan tidak sah tidak dijumpai",
  "51014": "Gagal mengaktifkan pengguna",
  "51015": "Untuk operasi pengguna tertentu tidak tersedia.",
  "51016": "Tentukan status TFA",
  "51017": "TFA sudah diaktifkan",
  "51018": "Jenis TFA tidak ditentukan",
 "51019": "TFA jenis salah",
  "52000": "Masukkan nama API",
  "52001": "Format nama tidak sah",
  "52002": "Gagal membuat API",
  "52003": "API tidak dijumpai",
  "52004": "API tidak dijumpai",
 "52005": "Gagal mengemas kini API",
  "52006": "Kunci API tidak dijumpai",
  "52007": "Kekunci API tidak sah",
  "52008": "Gagal mengemas kini API",
  "52009": "Gagal mengemas kini API",
  "52010": "Gagal mengemas kini API",
  "52011": "Gagal mengemas kini API",
  "53000": "Ip tidak dijumpai",
  "53001": "Ip tidak dijumpai",
  "53002": "Gagal menambah IP",
  "53003": "Gagal mengeluarkan IP",
  "53004": "Ip tidak dijumpai",
  "54000": "Tidak dapat mengemas kini API",
  "54001": "Tidak dapat mengemas kini API",
  "54002": "Tidak dapat mengemas kini API",
  "51020": "Recaptcha gagal untuk mengesahkan",
  "51021": "Recaptcha gagal untuk mengesahkan",
  "51022": "Menghantar semula e-mel pengaktifan akan dibuat selepas 60 saat",
  "51015_activation_request": "Akaun anda sudah diaktifkan. <a href='/user/login'>Selamat Datang</a>" ,
  "51000_activation_request": "Mungkin anda telah salah taip atau e-mel anda tidak didaftarkan."
};
const error = {
  'error': 'Ralat',
  'order-not-found': 'Tiada pesanan dengan status sedemikian',
  '404': 'Halaman Tidak Ditemui',
  ...newError,
  error_send_code: 'Ralat berlaku, kod tidak dihantar. Cuba lagi.',
  error_check_data: 'Sila semak data yang dimasukkan',
  invalid_ip: 'Alamat ip mempunyai format tidak sah',
 advert_create: {
  '-33001': 'Jenis tidak dijumpai',
  '-33002': 'Jenis tidak sah',
  '-33003': 'Mata wang tidak dijumpai',
  '-33004': 'Mata wang tidak sah',
  '-33005': `Nilai had urus niaga minimum tidak boleh kurang daripada sifar`,
  '-33006': `Nilai had tidak boleh kurang daripada sifar`,
  '-33007': `Had transaksi minimum tidak boleh melebihi had transaksi Maksimum`,
  '-33008': `Had jumlah tidak dijumpai`,
  '-33009': `Had jumlah tidak sah`,
  '-33010': `Jumlah had nilai tidak boleh kurang daripada had transaksi Minimum`,
  '-33011': `Mata wang pembayaran tidak dijumpai`,
  '-33012': `Mata wang pembayaran tidak sah`,
  '-33013': `Bidang "Mata wang pertukaran" adalah sama "Mata wang pembayaran"`,
  '-33014': 'Kadar untuk satu mata wang pertukaran tidak dijumpai',
  '-33015': 'Kadar pertukaran unit mata wang tidak sah',
  '-33016': 'Sistem pembayaran tidak dijumpai',
  '-33017': 'Sistem pembayaran tidak wujud',
  '-33018': 'Negara tidak dijumpai',
  '-33019': 'Negara tidak wujud',
  '-33020': 'Masa tamat tempoh tidak dijumpai',
  '-33021': 'Masa tamat tempoh tidak sah',
  '-33022': 'Lokasi tidak sah',
  '-33023': 'Wallet tidak wujud',
  '-33024': 'Baki tidak dijumpai',
  '-33025': 'Terdapat ralat ketika membuat iklan',
  '-33037': 'Baki tidak dijumpai',
},
  advert_info: {
    '-33001': 'Iklan Uuid tidak dijumpai',
    '-33002': 'Iklan tidak wujud',
  },
  advert_set_status: {
    '-33001': 'Iklan Uuid tidak dijumpai',
    '-33002': 'Status iklan tidak dijumpai',
    '-33003': 'Status iklan tidak sah',
  '-33004': 'Iklan tidak wujud',
    '-33005': 'Ralat status pesanan',
  },
  order_create: {
    '-33001': 'Pesanan Uuid tidak dijumpai',
    '-33002': 'Pesanan tidak wujud',
    '-33003': 'Akses dilarang untuk pesanan ini',
    '-33004': 'Jenis tidak dijumpai',
    '-33005': 'Jenis tidak sah',
    '-33006': 'Nilai tidak dijumpai',
    '-33007': 'Nilai tidak sah',
    '-33008': 'Terdapat ralat semasa membuat acara',
  },
  event_create: {
    '-33001': 'Iklan_id tidak dijumpai',
    '-33002': 'Iklan tidak wujud',
    '-33003': 'Jumlah tidak dijumpai',
    '-33004': 'Jumlah tidak sah',
    '-33005': 'Akaun tidak wujud',
    '-33006': 'Baki tidak dijumpai',
    '-33007': 'Terdapat ralat semasa membuat pesanan',
    '-33008': 'Ralat status pesanan',
  },
  order_event_list: {
    '-33001': 'Pesanan Uuid tidak dijumpai',
    '-33002': 'Pesanan tidak wujud',
    '-33003': 'Akses dilarang untuk pesanan ini',
  },
  order_info: {
    '-33001': 'Pesanan Uuid tidak dijumpai',
    '-33002': 'Pesanan tidak wujud',
  },
  order_info_details: {
    '-33001': 'Pesanan Uuid tidak dijumpai',
    '-33002': 'Pesanan tidak wujud',
  },
  order_set_status: {
    '-33001': 'Pesanan Uuid tidak dijumpai',
    '-33002': 'Pesanan tidak wujud',
    '-33003': 'Status pesanan tidak dijumpai',
    '-33004': 'Status pesanan tidak sah',
    '-33005': 'Tetapkan status tidak dibenarkan',
  },
  place_search: {
    '-33001': 'Negara tidak dijumpai',
    '-33002': 'Negara tidak wujud',
    '-33003': 'Carian tidak dijumpai',
    '-33004': 'Kesilapan yang tidak diketahui',
  },
  user_auth_tfa_enable: {
    '-33001': 'Membolehkan tidak dijumpai',
  },
  user_login: {
    '-33001': 'E-mel tidak dijumpai',
    '-33002': 'E-mel tidak sah',
    '-33003': 'Kata laluan tidak dijumpai',
    '-33004': 'Kata laluan Param tidak sah',
    '-33005': 'E-mel atau kata laluan yang salah',
    '-33006': 'Pengguna tidak diaktifkan',
    '-33007': 'E-mel atau kata laluan yang salah',
    '-33008': 'E-mel atau kata laluan yang salah',
    '-33009': 'E-mel atau kata laluan yang salah',
    '-33010': 'Had log masuk melebihi'
  },
  advert_update: {
    '-33024': 'Ralat mengemas kini iklan',
  },
  common_error: {
    '-32000': 'Ralat pada pelayan',
    '-32007': 'Sesi tidak sah',
    '-32008': 'Sesi tidak sah',
    '-32009': 'Kod TFA tidak sah',
    '-32010': 'Alamat e-mel salah'
  },
};

const p2p = { ...messages, error };



export default {
  "form": {
    "email": "E-mel",
    "password": "Kata laluan",
    "confirm_pwd": "Sahkan kata laluan",
    "auth_code": "Kod pengesahan",
    "your_login": "Log masuk anda",
    "login": "Log masuk",
    "enter_google_2fa_code": "Masukkan kod 6 angka",
    "old_pwd": "Kata laluan lama",
    "new_pwd": "Kata laluan baharu",
    "title": "Tajuk",
    "expired_time": "Masa tamat tempoh",
    "currency": "Mata wang",
    "amount": "Jumlah",
    "select_currency": "Pilih mata wang",
    "send_to": "Hantar kepada",
    ...p2p.form,
  },
  "action": {
    "login": "Log masuk",
    "create_acc": "Buat akaun",
    "authenticate": "Pengesahan",
    "cancel": "Batal",
    "restore": "Pulihkan",
    "change": "Ubah",
    "show_qr": "Tunjuk kod QR",
    "enable": "Membolehkan",
    "save_qr": "Simpan kod QR",
    "disable": "Lumpuh",
    "create": "Buat",
    "add": "Tambah",
    "save": "Simpan",
    "copy": "Salinan",
    "send": "Hantar",
    "exchange": "Pertukaran",
    ...p2p.action,
  },
  "page": {
    "activation_acc": "Pengaktifan akaun",
    "sign_in": "Daftar masuk",
    "sign_up": "Mendaftar",
    "sign_out": "Daftar keluar",
    "create_your_acc": "Buat akaun anda",
    "forgot_pwd": "Lupa kata laluan?",
    "not_registered": "Tidak mempunyai akaun? Buatkannya.",
    "already_registered": "Sudah ada akaun? Daftar masuk",
    "success_registered": "Terima kasih kerana pendaftaran! Mesej dengan arahan untuk pengaktifan telah dihantar ke e-mel anda.",
    "success_activated_acc": "Akaun anda telah berjaya diaktifkan.",
    "error_activated_acc": "RALAT. Akaun anda belum diaktifkan.",
    "request_new_pwd": "Mohon kata laluan baharu",
    "success_recovery_mail_pwd": "Berjaya! Mesej dengan arahan pemulihan kata laluan telah dihantar ke e-mel anda.",
    "enable_2fa": "Membolehkan pengesahan dua langkah",
    "disable_2fa": "Lumpuhkan pengesahan dua langkah",
    "text_google_2fa": "Demi keselamatan akaun anda, aktifkan pengesahan dua faktor (2FA). Untuk melakukan ini, anda memerlukan kod 6 angka. Untuk mendapatkan kod ini, muat turun Google Authenticator dan imbas kod QR.",
    "text_google_2fa_disable": "Sekiranya anda mahu mematikan 2FA, masukkan kod enam angka yang disediakan oleh aplikasi Google Authenticator, kemudian klik &quot;Lumpuh&quot;.",
    "qr_code": "Kod Qr",
    "your_secret_key": "Kunci rahsia anda",
    "change_password": "Ubah kata laluan",
    "create_user_api": "Buat API pengguna",
    "title": "Tajuk",
    "date": "Tarikh",
    "status": "Status",
    "active": "Aktif",
    "deactive": "dinyahaktif",
    "have_not_api_key": "Anda tidak mempunyai kunci ini",
    "your_api_keys": "Kekunci API anda",
    "api_methods_acc": "Akaun kaedah",
    "api_convert_currency": "Kaedah-kaedah mata wang terselindung",
    "api_withdraw": "Kaedah pengeluaran",
    "actions": "Tindakan",
    "ip_address": "Alamat IP",
    "settings": "Tetapan",
    "make_deposit": "Buat deposit",
    "autoconvert_into_cnx": "Auto tukar ke CNX",
    "deposit_qr": "Deposit dengan imbasan di bawah",
    "deposit_copy": "atau deposit langsung kepada",
    "choose_withdraw_type": "Pilih jenis pengeluaran",
    "you_give": "Anda memberi",
    "you_receive": "Anda terima",
    "exchange_rate": "Kadar pertukaran",
    "fee": "Yuran",
    "pair": "Pasangan",
    "price": "Harga",
    "volume": "Isi padu",
    "charts": "Carta",
    "today": "Hari ini",
    "this_week": "Minggu ini",
    "all": "Semua",
    "this_month": "Bulan ini",
    "last_month": "Bulan lepas",
    "this_year": "Tahun ini",
    "previous": "Sebelum",
    "next": "Seterusnya",
    "deposit": "Deposit",
    "transactions": "Transaksi",
    "withdraw": "Keluarkan",
    "exchange": "Pertukaran",
    "restore": "Pulihkan",
    "balances": "Baki",
    "fiat": "Fiat"
  },
  "message": {
    p2p_shot_info: 'Untuk mengetahui cara menggunakan perkhidmatan P2P, baca panduan ringkas.',
    "success": "Berjaya",
    "status_change_autoconvert_into_cnx": "Status telah berjaya ditukar.",
    ...p2p.message,
  },
  "error": {
    "fill_all_field": "Isi semua bidang!",
    "wrong_user": "Akses ditolak: pengguna atau kata laluan yang salah",
    "not_activated_acc": "Anda telah dihantar mesej dengan pautan ke e-mel anda. Ikut pautan dari mesej untuk mengaktifkan akaun anda.",
    "invalid_auth_key": "Kod pengesahan tidak sah!",
    "invalid_format": "Format tidak sah, %{field}!",
    "unknown_error": "Ralat tidak diketahui!",
    "enter_6_dig": "Masukkan kod 6 angka",
    "register_error": "Ralat semasa mendaftar!",
    "different_pwd": "Kata laluan berbeza!",
    "fail_change_pwd": "Gagal menukar kata laluan!",
    "wrong_user_restore_pwd": "Pengguna salah!",
    "fail_activated_2fa": "Gagal mengaktifkan 2FA!",
    "is_empty": "%{field} kosong!",
    "should_num": "%{field} mestilah berangka!",
    "error_send": "Ralat hantar",
    "error": "Ralat",
    "exchange_not_balance": "Ada kemungkinan bahawa anda tidak mempunyai cukup wang untuk urus niaga dagangan dalam akaun. ",
    ...p2p.error,
  },
  "fee": {
    "cnx": "Jumlah minimum = 0.001 CNX | Tiada yuran",
    "btc": "Jumlah minimum = 0.002 BTC | Yuran = 0.001 BTC",
    "eth": "Jumlah minimum = 0.002 ETH | Yuran = 0.001 ETH"
  },
  "statusTransaction": {
    "created": "Dibuat",
    "moderated": "Disederhanakan",
    "unconfirmed": "Belum disahkan",
    "confirmed": "Disahkan",
    "admin_moderate_success": "Diluluskan oleh pentadbiran",
    "admin_moderate_cancel": "Dibatalkan oleh pentadbiran",
    "admin_moderate_wait": "Disederhanakan oleh pentadbiran",
    "moderate": "Sederhana"
  },
  validate: {
    'empty_field': 'Bidang tidak boleh kosong',
    'empty_fields': 'Semua bidang tidak boleh kosong',
    'invalid_email': 'E-mel mestilah sah',
    'invalid_username': 'Nama pengguna tidak sah',
    'invalid_repassword': 'Kata laluan tidak sama',
    'invalid_select_currency': 'Anda mesti memilih mata wang',
    'invalid_password_short': 'Kata laluan anda mestilah sekurang-kurangnya 8 aksara panjang',
  },
  order_status: {
    created_buyer: 'Menunggu pengesahan vendor',
    accepted_buyer: 'Menunggu pemindahan dana pembeli',
    paid_buyer: 'Sudah bayar',
    moderated_buyer: 'Sederhana',
    confirmed_buyer: 'Disahkan',
    completed_buyer: 'Perjanjian itu berjaya',
    timeout_confirmed_buyer: 'Masa transaksi tamat tempoh pemindahan wang dibuat',
    canceled_buyer: 'Tawaran dibatalkan oleh penjual',
    timeout_canceled_buyer: 'Waktu urus niaga telah tamat tempoh',
    created_seller: 'Menunggu pengesahan pembeli',
    accepted_seller: 'Menunggu pemindahan dana pembeli',
    paid_seller: 'Sudah bayar',
    moderated_seller: 'Sederhana',
    confirmed_seller: 'Disahkan',
    completed_seller: 'Perjanjian itu berjaya',
    timeout_complete_seller: 'Masa transaksi tamat, pemindahan wang telah dibuat',
    canceled_seller: 'Tawaran dibatalkan oleh pembeli',
    timeout_canceled_seller: 'Tempoh urus niaga tamat tempoh'
  },
  status_adverts: {
    actived: 'Aktif',
    removed: 'Dikeluarkan',
    canceled: 'Tidak aktif',
  },
  status_orders: {
    created: 'Menunggu kelulusan',
    accepted: 'Pemindahan dana belum selesai',
    paid: 'Sudah bayar',
    moderated: 'Sederhana',
    confirmed: 'Disahkan',
    completed:'Tawaran telah berjaya diselesaikan',
    timeout_confirmed: 'Masa transaksi telah tamat tempoh',
    timeout_canceled: 'Waktu urus niaga telah tamat tempoh',
    canceled: 'Tawaran telah dibatalkan'
  },
  user_status: {
    activated: 'Pengguna diaktifkan',
    blocked: 'Pengguna disekat'
  },
  menu: {
    'buy': 'Beli',
    'sell': 'Jual',
    'guide': 'Panduan',
    'support': 'Sokongan',
    'terms-of-service': 'Terma Perkhidmatan',
    'orders': 'Pesanan',
    'rates': 'Kadar'
  },
  user: {
    'user': 'Pengguna',
    'registration': 'Pendaftaran',
    'login': 'Log masuk',
    'logout': 'Log keluar',
    'account': 'Akaun',
    'profile': 'Profil',
    'username': 'Nama Pengguna',
    'password': 'Kata laluan',
    'name': 'Nama',
    'phone': 'Telefon',
    'adverts': 'Iklan',
    'wallet': 'Wallet'
  },
  "coupon": {
    "checking_coupon": "Pemeriksaan kad",
    "scanning_coupon": "Imbas kad",
    "begin_scanning_coupon": "Imbas kad",
    "not_access_camera": "Anda perlu memberi akses kepada kamera dan memuat semula halaman",
    "coupon": "Kad",
    "check": "Semak",
    "create_coupon": "Buat kod",
    "time_of_action": "Masa tindakan",
    "receiver": "Penerima",
    "select_currency": "Pilih mata wang",
    "activate_coupon": "Aktifkan kad",
    "apply_coupon": "Pengisian semula kad",
    "apply": "Buat deposit",
    "deactivate_coupon": "Nyahaktifkan kad",
    "deactivate": "Nyahaktif",
    "information": "Maklumat mengenai kad",
    "creator": "Pemilik",
    "given": "Kata laluan dilindungi",
    "not_given": "Tidak dilindungi kata laluan",
    "time_of_redeem": "Masa pengaktifan",
    "invalid_qrcode": "Kod Qr tidak sah",
    "check_coupon_fail": "Data kad tidak dijumpai",
    "field_empty": "Field \"%{field}\" perlu diisi",
    "take_currency": "Anda perlu menentukan mata wang",
    "success_create_coupon": "Kad itu telah berjaya dicipta",
    "error_length_comment": "Ulasan melebihi bilangan aksara yang dibenarkan (255)",
    "error_create_coupon": "Ralat berlaku semasa membuat kad",
    "need_password": "Anda perlu menentukan kata laluan",
    "activate_coupon_success": "Kad diaktifkan",
    "activate_coupon_error": "Ralat berlaku semasa mengaktifkan kad",
    "not_found_coupon": "Data kad tidak dijumpai",
    "coupon_was_used": "Kad telah digunakan",
    "fail_apply_coupon": "Gagal mengisi kad itu",
    "coupon_refilled": "Kad telah diisi semula",
    "your_coupon": "Kad anda",
    "optional_field": "Tidak diperlukan",
    "types": {
      "debit": "Kad",
      "empty": "Kad pakai buang",
      "joker": "Pelawak"
    },
    "status": {
      "actived": "Belum diaktifkan",
      "redeemed": "Membelanjakan",
      "created": "Menunggu pengisian semula"
    }
  }
};