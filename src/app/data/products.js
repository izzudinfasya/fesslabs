const products = [
    {
        id: 1,
        name: "Press Play Atlas",
        review: {
            ID: "Di harga IDR 200-300 ribu mouse ini worth it untuk dibeli karena dari segi sensor, shape, menurutku ini nyaman banget dipake buat gaming ataupun kegiatan harian. Bahkan udah ada charging docknya juga jadi makin enak kalo mau ngecas, tapi nambah puluhan ribu yaa haha.",
            EN: "At a price of IDR 200-300 thousand, this mouse is worth buying because, in terms of sensor and shape, I find it very comfortable for gaming or daily activities. It even comes with a charging dock, making it even more convenient for charging, though it adds a few tens of thousands to the price, haha.",
        },
        rating: "5",
        category: "Mouse",
        shape: "Ergonomic",
        sensor: "PAW 3311 up to 12.000 DPI",
        pollingRate: "Up to 1.000hz",
        size: "123 x 66 x 43mm",
        fit: "Medium - Large Hand",
        weight: "58g",
        connection: "Wireless 2.4GHz / Wired / Bluetooth",
        battery: "500mAh",
        brand: "Press Play",
        minPrice: 280000,
        maxPrice: 310000,
        images: [
            "/atlas-1.webp",
            "/atlas-2.webp",
            "/atlas-3.webp",
            "/atlas-4.webp",
            "/atlas-5.webp",
        ],
        video: "",
        software: "https://drive.google.com/drive/u/2/folders/1ZpTeuUIPQDNLx1v9iR96Vd-PKttRytJ5",
        link: "",
        checkoutLink: " https://vt.tokopedia.com/t/ZSHtK8YwCLm3V-5buQI/",
    },
    {
        id: 2,
        name: "Gamen Titan V",
        review: {
            ID: "Keyboard compact yang cocok banget buat main game, di harga 200 ribuan ini bisa jadi opsi kalian yang baru awal beli mechanical keyboard. Pecinta RGB wajib punya ini sih hahaha.",
            EN: "A compact keyboard that’s perfect for gaming. Priced around 200k IDR, it’s a great option for those just starting with mechanical keyboards. RGB lovers definitely need to have this one hahaha.",
        },
        rating: "4",
        category: "Keyboard",
        type: "Mechanical",
        brand: "Gamen",
        pollingRate: "",
        layout: "65%",
        material: "",
        connection: "Wired",
        keycaps: "Dual-Color PBT",
        switch: "Outemu Red, Blue",
        hotswap: "3 Pin",
        backlight: "Rainbow",
        structure: "",
        battery: "",
        features: [
            {
                ID: "Tahan hingga 50 juta kali tekan",
                EN: "Durable for up to 50 million keystrokes"
            },
            {
                ID: "Anti-ghosting untuk semua tombol",
                EN: "Anti-ghosting across all keys"
            },
            {
                ID: "Keycaps kuat, tahan korosi, halus, dan tidak mudah memudar",
                EN: "Strong, corrosion-resistant keycaps that stay smooth and vibrant"
            },
            {
                ID: "Dilengkapi 2 kaki anti-slip untuk stabilitas",
                EN: "Equipped with 2 anti-slip feet for stability"
            },
            {
                ID: "Mendukung N-Key Rollover",
                EN: "Supports N-Key Rollover"
            }
        ],
        minPrice: 180000,
        maxPrice: 220000,
        images: [
            "/titan-v-1.webp",
            "/titan-v-2.webp",
            "/titan-v-3.webp",
            "/titan-v-4.webp",
            "/titan-v-5.webp",
        ],
        video: "/titan-v.mp4",
        link: "https://vt.tiktok.com/ZSD1y7DKb/",
        software: "https://drive.google.com/file/d/140EPIpHXdaGfW4P4j_WTWK7dqGi91S9w/view?usp=sharing",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKRrVtAQLL-7c688/",
    },
    {
        id: 3,
        rating: "5",
        name: "Ajazz GP100",
        review: {
            ID: "Salah satu gamepad yang wajib kalian cobain, soalnya di harga 300-400 ribuan kalian bisa dapetin fitur bejibun, feel waktu megangnya tuh nyaman banget, dan cocok dipake buat main game apa aja + dimana aja. Nambah dikit udah dapet sepaket sama charging docknya biar makin mantep.",
            EN: "One gamepad you definitely have to try! Priced around 300–400k IDR, it comes packed with tons of features. It feels really comfortable to hold and is perfect for gaming anywhere, anytime. Plus, for a little extra, you can get it as a set with the charging dock for an even better experience.",
        },
        category: "Gamepad",
        brand: "Ajazz",
        pollingRate: "1.000hz (Wired & Dongle)",
        circularityError: "1–1.3%",
        buttons: "Mechanical",
        grip: "Textured",
        antiDrifting: "✔",
        triggerLock: "✔",
        hallEffect: "✔",
        motionSensor: "✔",
        material: "",
        compatible: "iOS, Android, PC, Steamdeck & Nintendo Switch",
        connection: "Wireless 2.4GHz / Wired / Bluetooth",
        battery: "",
        features: [
            {
                ID: "D-Pad bulat untuk kenyamanan arah",
                EN: "Rounded D-Pad for comfortable directional control"
            },
            {
                ID: "Desain grip bertekstur di depan, belakang, dan trigger",
                EN: "Textured grip on front, back, and triggers"
            },
            {
                ID: "Tombol mekanis responsif dengan presisi tinggi (Hall Effect)",
                EN: "Responsive mechanical buttons with high-precision Hall Effect"
            },
            {
                ID: "Anti drifting untuk kontrol lebih stabil",
                EN: "Anti-drifting for more stable control"
            },
            {
                ID: "Fungsi Trigger Lock untuk aksi cepat",
                EN: "Trigger Lock function for faster action"
            },
            {
                ID: "LED RGB untuk tampilan keren",
                EN: "RGB LED for cool visual effects"
            },
            {
                ID: "Tingkat circularity error rendah: hanya 1–1.3%",
                EN: "Low circularity error: only 1–1.3%"
            },
            {
                ID: "Mendukung X-Input, D-Input, dan mode NS",
                EN: "Supports X-Input, D-Input, and NS mode"
            },
            {
                ID: "Termasuk pouch bag praktis untuk penyimpanan",
                EN: "Includes a handy pouch bag for storage"
            }
        ],
        minPrice: 380000,
        maxPrice: 450000,
        images: [
            "/gp100-1.webp",
            "/gp100-2.webp",
            "/gp100-3.webp",
            "/gp100-4.webp",
            "/gp100-5.webp",
        ],
        video: "",
        link: "",
        software: "",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKR83UwsV4-qz7kY/",
    },
    {
        id: 4,
        name: "Aula SC580",
        review: {
            ID: "Mouse ini compact di tanganku (agak kecil) tapi masih enak dipake, sayangnya di harga 200 ribuan sensornya masih PAW 3325 tapi waktu dipake main game sih masih aman gaada delay kok dan DPI nya udah 10.000 jadi udah cocok juga buat main game kompe.",
            EN: "This mouse feels compact in my hand (a bit small) but is still comfortable to use. Although it uses a PAW3325 sensor at this 200k IDR price, it performs well in gaming with no noticeable delay. With a DPI of 10.000, it’s already suitable for competitive gaming.",
        },
        rating: "4",
        category: "Mouse",
        shape: "Ambidextrous",
        sensor: "PAW 3325 up to 10.000 DPI",
        pollingRate: "Up to 1.000hz",
        size: "119 x 62 x 38±0.2mm",
        fit: "Medium Hand",
        weight: "81.9g",
        connection: "Wireless 2.4GHz / Wired / Bluetooth",
        battery: "500mAh",
        brand: "Aula",
        minPrice: 250000,
        maxPrice: 270000,
        images: [
            "/sc580-1.webp",
            "/sc580-2.webp",
            "/sc580-3.webp",
            "/sc580-4.webp",
            "/sc580-5.webp",
        ],
        video: "/sc580.mp4",
        software: "https://aulagear.com/blogs/software/aula-sc580-driver",
        link: "https://vt.tiktok.com/ZSD1fmWHH/",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtK8fCjqkwo-OqWvu/",
    },
    {
        id: 5,
        name: "Vortex Mono Series",
        review: {
            ID: "Keyboard andalanku di harga 200-300 ribuan ya inii. Fiturnya banyak, desainnya minimalis, layout lengkap, feel ngetiknya enak parah, pokoknya mantep banget dah buat gaming atau kerja harian juga masih oke. Tapi sayangnya masih wired sih, tapi di harga segitu yaa masih oke lah yaa.",
            EN: "My go-to keyboard in the 200–300k IDR range. Packed with features, minimalist design, full layout, and an amazingly smooth typing feel—perfect for gaming or daily work. It’s still wired, but at this price, it’s totally fine.",
        },
        rating: "5",
        category: "Keyboard",
        type: "Mechanical",
        layout: ["65%", "75%", "87% (TKL)", "100% (Full-size)"],
        material: "Plastic",
        connection: "Wired",
        keycaps: ["Dual-Tone ABS Doubleshot", "OEM Profile"],
        switch: "JX Jade White",
        hotswap: "5 Pin",
        backlight: "South Facing - White",
        structure: "Gasket Mount",
        features: [
            {
                ID: "Plat PC dengan Flex Cut untuk fleksibilitas optimal",
                EN: "Flex Cut PC Plate for optimal flexibility"
            },
            {
                ID: "Full Keys Anti-Ghosting (NKRO) untuk semua tombol",
                EN: "Full Keys Anti-Ghosting (NKRO) for every key"
            },
            {
                ID: "Dukungan software Music Rhythm untuk pengalaman bermain lebih hidup",
                EN: "Music Rhythm software support for a more immersive experience"
            },
            {
                ID: "Dilengkapi Double Adjustment pada kaki keyboard untuk ketinggian optimal",
                EN: "Includes Double Adjustment on keyboard feet for optimal height"
            }
        ],
        brand: "Vortex Series",
        minPrice: 270000,
        maxPrice: 330000,
        images: [
            "/mono-1.webp",
            "/mono-2.webp",
            "/mono-3.webp",
            "/mono-4.webp",
            "/mono-5.webp",
        ],
        video: "/mono.mp4",
        link: "https://vt.tiktok.com/ZSD1yktNC/",
        software: "https://vortexseries.net/keyboard/",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKdsTDxAYN-PiO0U/"
    },
    {
        id: 6,
        name: "IPI Float 88",
        review: {
            ID: "Ini mouse desainnya beda dari yang lain, keliatan mewah, elegan, premium gitu soalnya bahannya dari Carbon Fiber Composite. Dipake buat gaming udah enak banget karena sensornya udah PAW 3395 (DPI up to 26.000) dengan polling rate yang bisa sampe 8k gokiill, ukurannya di tanganku juga bisa dibilang pas, yang paling gokil beratnya cuma 42g gilee enteng kali jadi ga gampang capek kalo dipake lama. Softwarenya web based jadi gaperlu instal2 aplikasi di laptop/PC lagi.",
            EN: "This mouse has a design that stands out from the rest—it looks luxurious, elegant, and premium since it’s made from Carbon Fiber Composite. It’s already excellent for gaming because it uses the **PAW 3395 sensor** (DPI up to 26,000) with a polling rate of up to 8k—crazy! The size also fits my hand just right, and the most impressive part is that it only weighs **42g**, super lightweight so it doesn’t cause fatigue even with long use. The software is web-based too, so there’s no need to install any apps on your laptop/PC.",
        },
        rating: "5",
        category: "Mouse",
        shape: "Ambidextrous",
        sensor: "PAW 3395/3950 up to 26.000 DPI",
        pollingRate: "Up to 8.000hz",
        size: "119 x 61 x 37 mm",
        fit: "Medium Hand",
        weight: "42g",
        connection: "Wireless 2.4GHz / Wired / Bluetooth",
        battery: "230mAh / 500mAh",
        brand: "IPI",
        minPrice: 670000,
        maxPrice: 900000,
        images: [
            "/ipi-1.webp",
            "/ipi-2.webp",
            "/ipi-3.webp",
            "/ipi-4.webp",
            "/ipi-5.webp",
        ],
        video: "",
        link: "",
        software: "https://shan.ipigame.cn/devices",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKNvYNVomq-MS3bb/",
    },
    {
        id: 7,
        name: "Zifriend G87",
        review: {
            ID: "Keyboard ini cocok buat kamu yang suka estetik minimalis dan ga mentingin switch sih, karena desainnya cakep parah, udah pake gasket mount, backlight putih south facing, dan keycapsnya side printing. Sayangnya yang ku pake ini masih pake outemu red switch aja sih, selain itu udah mantep.",
            EN: "This keyboard is great for those who love a minimalist aesthetic and don’t really care too much about the switches, because the design looks stunning. It already comes with a **gasket mount**, **south-facing white backlight**, and **side-printed keycaps**. The one I’m using still only has Outemu Red switches, but aside from that, it’s really solid.",
        },
        rating: "5",
        category: "Keyboard",
        type: "Mechanical",
        layout: "87% (TKL)",
        material: "Plastic",
        connection: "Wired",
        keycaps: ["PBT Double Shot, Side Print, Spherical Profile"],
        switch: "Noah Silver, Outemu Red, Brown, Mute",
        hotswap: "5 Pin",
        backlight: "South Facing - White / RGB",
        structure: "Gasket Mount",
        features: [
            {
                ID: "Mendukung N-Key Rollover untuk setiap tombol",
                EN: "Supports N-Key Rollover for every key"
            },
            {
                ID: "Kompatibel dengan Mac, Windows (Vista/7/8/10/11), dan Android",
                EN: "Compatible with Mac, Windows (Vista/7/8/10/11), and Android"
            },
            {
                ID: "Dilengkapi Double Adjustment pada kaki keyboard untuk ketinggian optimal",
                EN: "Features Double Adjustment on keyboard feet for optimal height"
            }
        ],
        brand: "Zifriend",
        minPrice: 280000,
        maxPrice: 450000,
        images: [
            "/g87-1.webp",
            "/g87-2.webp",
            "/g87-3.webp",
            "/g87-4.webp",
            "/g87-5.webp",
        ],
        video: "/g87.mp4",
        link: "https://vt.tiktok.com/ZSD1fP93V/",
        software: "",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKRoEFeVMk-dgykd/"
    },
    {
        id: 8,
        name: "Fantech WGP13S Shooter II",
        review: {
            ID: "Gamepad di range harga 200-300 ribuan ini udah worth it banget buat kalian pake, karena udah wireless 2 koneksi (dongle dan wired), fiturnya juga banyak bet, dan desainnya simple. Menariknya lagi donglenya ini bisa dipake di HP karena udah type C, jadi aman banget kalo mau dipake di HP/Tabalet (asal gamenya support gamepad).",
            EN: "This gamepad in the 200–300k IDR price range is already really worth it for you to use, because it’s wireless with 2 connection types (dongle and wired), has lots of features, and a simple design. What’s even cooler is that the dongle can be used on a phone since it’s Type-C, so it’s super safe to use on your phone or tablet (as long as the game supports gamepads).",
        },
        rating: "5",
        category: "Gamepad",
        pollingRate: "1.000hz (Wired & Dongle)",
        circularityError: "0.1%",
        buttons: "Membrane",
        grip: "Textured",
        antiDrifting: "✔",
        triggerLock: "✖",
        hallEffect: "✔",
        motionSensor: "✔",
        compatible: "PS3, Android, PC, Laptop & Nintendo Switch",
        material: "Plastic",
        connection: "Wireless 2.4GHz / Wired",
        features: [
            {
                ID: "Genggaman nyaman dengan baterai bawaan",
                EN: "Comfortable grip with built-in battery"
            },
            {
                ID: "Bentuk dan berat ergonomis, favorit para atlet esports",
                EN: "Ergonomic shape and weight, loved by esports athletes"
            },
            {
                ID: "Main nyaman berjam-jam tanpa lelah",
                EN: "Play comfortably for hours without strain"
            },
            {
                ID: "Getaran realistis untuk pengalaman bermain lebih hidup",
                EN: "Realistic vibration feedback for more immersive play"
            },
            {
                ID: "Joystick Hall Effect presisi tinggi",
                EN: "High-precision Hall Effect joysticks"
            },
            {
                ID: "Macro dengan timer untuk aksi cepat",
                EN: "Timed macro function for quick actions"
            },
            {
                ID: "Tingkat circularity error rendah: hanya 0.1%",
                EN: "Low circularity error: only 0.1%"
            },
        ],
        brand: "Fantech",
        minPrice: 250000,
        maxPrice: 280000,
        images: [
            "/wgp13s-1.webp",
            "/wgp13s-2.webp",
            "/wgp13s-3.webp",
            "/wgp13s-4.webp",
            "/wgp13s-5.webp",
        ],
        video: "/wgp13s.mp4",
        link: "https://vt.tiktok.com/ZSD1ymPqr/",
        software: "https://www.mediafire.com/file/3eqcm907x0q2208/Shooter_III_WGP13S_Software_V0.0.9_24112800.zip/file",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKdy8xfu4t-sApw4/"
    },
    {
        id: 9,
        name: "Ajazz AJ139 V2 MC",
        review: {
            ID: "Mouse ini recommend banget buat gaming di harga under 300 ribu, karena sensornya PAW 3311 tapi DPI nya bisa up to 24.000 + udah dapet charging docknya, gokiil broo. Ku pake nyaman juga karena tipe mouse yang fit to large hand (palm grip) dengan berat mouse di 66g",
            EN: "This mouse is highly recommended for gaming under 300k IDR because it uses the PAW 3311 sensor and its DPI can go up to 24,000. Plus, it comes with a charging dock—so insane, bro! I also find it comfortable since it’s a **large hand (palm grip)** type mouse, weighing 66g.",
        },
        rating: "5",
        category: "Mouse",
        shape: "Ambidextrous",
        sensor: "PAW 3311 up to 24.000 DPI",
        pollingRate: "Up to 1.000hz",
        size: "125 x 63 x 38 mm",
        fit: "Large Hand",
        weight: "66g",
        connection: "Wired / Wireless 2.4GHz / Bluetooth",
        battery: "500mAh",
        brand: "Ajazz",
        minPrice: 270000,
        maxPrice: 280000,
        images: [
            "/aj139-1.webp",
            "/aj139-2.webp",
            "/aj139-3.webp",
            "/aj139-4.webp",
            "/aj139-5.webp",
        ],
        video: "",
        link: "",
        software: "https://ajazz.com/software",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtK89S9736S-HEE1Q/"
    },
    {
        id: 10,
        name: "Stand Laptop Aluminium",
        review: {
            ID: "Stand laptop ini worth it banget kalo kalian cuma ada 50.000 tapi butuh stand laptop, bahannya dari aluminium yang pasti kokoh banget buat laptop kalian, ada 6 level ketinggian yang bisa kalian atur juga, dan ini bisa dilipat jadi enak kalo mau dibawa kemana-mana.",
            EN: "This laptop stand is really worth it if you’re looking to save money but still need a stand. It’s made from aluminum, which makes it super sturdy for your laptop. It also has **6 adjustable height levels**, and it’s foldable, so it’s convenient to carry around anywhere.",
        },
        rating: "5",
        category: "Accessories",
        color: "Silver, Black",
        material: "Aluminium Alloy",
        weight: "260g",
        loadCapacity: "35 lbs",
        compatibility: "All laptops and tablets from 10 to 15.6 inch",
        features: [
            {
                ID: "Ringan, portable, dan dapat dilipat",
                EN: "Lightweight, portable, and foldable"
            },
            {
                ID: "6 tingkat penyesuaian tinggi untuk kenyamanan maksimal",
                EN: "6 height adjustments for maximum comfort"
            },
            {
                ID: "Desain ergonomis yang mendukung postur tubuh",
                EN: "Ergonomic design that supports good posture"
            },
            {
                ID: "Sistem disipasi panas untuk penggunaan lebih nyaman",
                EN: "Heat dissipation system for more comfortable use"
            },
            {
                ID: "Stabil dan kokoh saat digunakan",
                EN: "Stable and sturdy during use"
            }
        ],
        brand: "No Brand",
        minPrice: 40000,
        maxPrice: 50000,
        images: [
            "/stand-1.webp",
            "/stand-2.webp",
            "/stand-3.webp",
            "/stand-4.webp",
            "/stand-5.webp",
        ],
        video: "/stand-deskshelf.mp4",
        software: "",
        link: "https://vt.tiktok.com/ZSD1ynFeU/",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKR9pM6P9H-pDYlb/"
    },
    {
        id: 11,
        name: "Aula F75 PRO",
        review: {
            ID: "Keyboard favoritku sekarang yaa Aula F75 Pro, karena desainnya cakep, udah wireless 3 koneksi, layoutnya 75% with knob, udah gasket mount jadi enak kalo dipake ngetik, backlight RGB south facing yang bisa diatur warnanya di software, build qualitynya solid, switchnya juga creamy abiss. Menurutku ini di harga 700 ribuan worth it parah buat kalian cobain sihh.",
            EN: "My current favorite keyboard is definitely the Aula F75 Pro, because the design is gorgeous, it already supports **triple-mode wireless connectivity**, has a **75% layout with a knob**, and uses a **gasket mount** that makes typing feel great. It also comes with **south-facing RGB backlight** customizable through software, solid build quality, and super creamy switches. In my opinion, at around **700k IDR**, this one is absolutely worth trying out.",
        },
        rating: "5",
        category: "Keyboard",
        type: "Mechanical",
        layout: "75% with Knob",
        material: "Premium ABS",
        connection: "Wireless 2.4GHz / Wired / Bluetooth",
        keycaps: ["PBT Double Shot, Side Print, Cherry Profile"],
        switch: "Reaper, Star Vector",
        hotswap: "5 Pin",
        backlight: "South Facing - RGB (Available Single Color Mode)",
        structure: "Gasket Mount",
        battery: "4000mAh",
        features: [
            {
                ID: "Struktur Gasket Mount yang stabil dan responsif",
                EN: "Stable and responsive Gasket Mount structure"
            },
            {
                ID: "Plat PC dengan Flex Cut untuk fleksibilitas optimal",
                EN: "Flex Cut PC Plate for optimal flexibility"
            },
            {
                ID: "Dukungan software Music Rhythm untuk pengalaman bermain lebih hidup",
                EN: "Music Rhythm software support for a more immersive experience"
            },
            {
                ID: "Kompatibel dengan Windows, Mac, iOS, dan Android",
                EN: "Compatible with Windows, Mac, iOS, and Android"
            },
            {
                ID: "Dilengkapi Double Adjustment pada kaki keyboard untuk ketinggian optimal",
                EN: "Includes Double Adjustment on keyboard feet for optimal height"
            }
        ],
        brand: "Aula",
        model: "F75 PRO",
        minPrice: 670000,
        maxPrice: 720000,
        images: [
            "/f75pro-1.webp",
            "/f75pro-2.webp",
            "/f75pro-3.webp",
            "/f75pro-4.webp",
            "/f75pro-5.webp",
        ],
        video: "",
        link: "",
        software: "https://aulagear.com/blogs/software/aula-f75-driver-windows-only",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKdEQjW2tA-0wy1r/"
    },
    {
        id: 12,
        name: "Desk Shelf",
        review: {
            ID: "Kalau setup kalian pengen rapi, kalian bisa pake desk shelf ini biar kabel-kabel kalian ketutupan dan keliatan clean, bahannya pake kayu yang grade A dengan kaki-kaki besi. Ada berbagai macam ukuran dan warna, harganya juga mulai dari 30 ribuan aja",
            EN: "If you want a tidy setup, you can use this desk shelf to hide your cables and make everything look clean. It’s made from grade A wood with sturdy metal legs. Available in various sizes and colors, and the price starts at just around IDR 30k.",
        },
        rating: "5",
        category: "Accessories",
        material: "Blockboard Grade A (18mm) + Steel Legs",
        finishing: "Tacho sheet / Furniture Sticker with elegant colors & patterns",
        brand: "No Brand",
        minPrice: 30000,
        maxPrice: 120000,
        images: [
            "/desk-shelf-1.webp",
            "/desk-shelf-2.webp",
        ],
        video: "/stand-deskshelf.mp4",
        software: "",
        link: " https://vt.tiktok.com/ZSD1yGCKB/",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKRyRmnssB-QzEnP/"
    },
    {
        id: 13,
        name: "Lightbar Laptop / Monitor",
        review: {
            ID: "Kalo meja kalian gelap coba pake lightbar ini aja, ukurannya 33cm jadi bisa dipake buat Laptop ataupun Monitor. Harganya masih terjangkau jadi cocok buat kalian jadiin penerangan di meja setup. Biar mata kalian ga capek ngeliat layar di ruangan yang gelap dan peripheral di meja kalian juga terlihat dengan jelas.",
            EN: "If your desk is dark, try using this lightbar. It’s 33cm in size, so you can use it for both laptops and monitors. The price is still affordable, making it a great option for lighting up your setup. It helps reduce eye strain when looking at the screen in a dark room and also makes your desk peripherals clearly visible.",
        },
        rating: "5",
        category: "Lighting",
        color: "Black",
        material: "ABS",
        size: "33cm",
        loadCapacity: "",
        compatibility: "Laptop / monitor",
        features: [
            {
                ID: "Pencahayaan merata dan seimbang",
                EN: "Even and balanced lighting"
            },
            {
                ID: "Tidak memantulkan cahaya di layar",
                EN: "No glare on screen"
            },
            {
                ID: "Kecerahan bisa diatur secara manual",
                EN: "Brightness is manually adjustable"
            },
            {
                ID: "Kontrol melalui layar sentuh",
                EN: "Touchscreen control"
            },
            {
                ID: "Tiga mode warna: Cool, Warm, dan Bright",
                EN: "Three color modes: Cool, Warm, and Bright"
            },
            {
                ID: "Temperatur warna dapat disesuaikan: 3000K - 4000K - 6000K",
                EN: "Adjustable color temperature: 3000K - 4000K - 6000K"
            }
        ],
        brand: "No Brand",
        minPrice: 120000,
        maxPrice: 150000,
        images: [
            "/lightbar-1.webp",
            "/lightbar-2.webp",
            "/lightbar-3.webp",
            "/lightbar-4.webp",
            "/lightbar-5.webp"
        ],
        video: "/lightbar.mp4",
        software: "",
        link: "https://vt.tiktok.com/ZSD1fuQXf/",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKRwjK6mud-peIsK/"
    },
    {
        id: 14,
        name: "SCREENBAR V2 Lamp Hanging Light by Press Play",
        review: {
            ID: "Kalo butuh lightbar buat monitor ntah itu monitor yang flat/curved kalian bisa pake lightbar dari press play ini. Udah dilengkapi dengan puck controller jadi gaperlu repot-repot pencet manual, penggunaannya juga gampang tinggal plug n play aja langsung bisa dipake deh.",
            EN: "If you need a lightbar for your monitor, whether it’s flat or curved, you can use this one from Press Play. It already comes with a puck controller, so you don’t have to bother pressing it manually. Super easy to use — just plug and play and you’re good to go.",
        },
        rating: "5",
        category: "Lighting",
        color: "Black",
        material: "ABS",
        size: "42cm",
        loadCapacity: "",
        compatibility: "Curveds and flat monitors",
        features: [
            {
                ID: "3 suhu cahaya: Putih (6400K), Natural (4200K), Hangat (3100K)",
                EN: "3 light temperatures: White (6400K), Natural (4200K), Warm (3100K)"
            },
            {
                ID: "Kecerahan bisa disesuaikan sesuai kebutuhan",
                EN: "Brightness is adjustable to your preference"
            },
            {
                ID: "Tombol daya & pengaturan kecerahan/temperatur langsung di lampu",
                EN: "Power and brightness/temperature buttons on the lamp body"
            },
            {
                ID: "Remote controller baru (baterai CR2450 termasuk dan sudah terpasang)",
                EN: "New remote controller puck (CR2450 battery included and pre-paired)"
            },
            {
                ID: "Kabel Type A ke Type C sudah termasuk",
                EN: "Type A-to-Type C cable included"
            },
            {
                ID: "Tidak memantulkan cahaya pada layar monitor",
                EN: "No glare on the monitor"
            },
            {
                ID: "Mengurangi ketegangan mata saat digunakan lama",
                EN: "Reduces eye strain during prolonged use"
            }
        ],
        brand: "Press Play",
        minPrice: 350000,
        maxPrice: 400000,
        images: [
            "/screenbar-1.webp",
            "/screenbar-2.webp",
            "/screenbar-3.webp",
            "/screenbar-4.webp",
            "/screenbar-5.webp"
        ],
        video: "",
        software: "",
        link: "",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtK8r8Pu38S-0psF8/"
    },
    {
        id: 15,
        name: "MOFii P6 V2",
        review: {
            ID: "Mouse under 100 ribuan yang worth it buat kalian beli karena mouse ini udah wireless 2 koneksi (dongle dan bluetooth), desainnya ergonomis dan ada thumb rest di bagian jempol, cocok banget kalo mau dipake kerja karena udah silent click juga, kalo batrenya habis tinggal cas aja pake kabel type C. Sayangnya untuk gaming ini kurang recommended karena sensornya masih kurang yaa.",
            EN: "A mouse under 100k that’s totally worth buying — it already comes with dual wireless connectivity (dongle and Bluetooth), an ergonomic design with a thumb rest, and it’s perfect for work since it features silent clicks. When the battery runs out, just recharge it with a Type-C cable. Unfortunately, it’s not really recommended for gaming since the sensor isn’t that great.",
        },
        rating: "5",
        category: "Mouse",
        shape: "Ergonomic",
        sensor: "KA8 up to 4.000 DPI",
        pollingRate: "125Hz",
        size: "114 x 72 x 40 mm",
        fit: "Medium-Large Hand",
        weight: "90g",
        connection: "Wireless 2.4GHz / Bluetooth",
        battery: "400mAh",
        brand: "MOFii",
        minPrice: 80000,
        maxPrice: 100000,
        images: [
            "/mofii-1.webp",
            "/mofii-2.webp",
            "/mofii-3.webp",
            "/mofii-4.webp",
            "/mofii-5.webp",
        ],
        video: "/mofii.mp4",
        link: "https://vt.tiktok.com/ZSD1yGCBD/",
        software: "",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtKRNcpV2UL-TPjvJ/"
    },
    {
        id: 16,
        name: "Gamen Titan Elite",
        review: {
            ID: "Keyboard ini cocok buat gaming dan kerja karena layoutnya compact dan ada numpad. Backlightnya rainbow dengan 17 mode, harganya di 200 ribuan jadi masih terjangkau.",
            EN: "This keyboard is great for both gaming and work since it has a compact layout with a numpad. It features rainbow backlighting with 17 modes, and at around 200k, it’s still very affordable.",
        },
        rating: "4",
        category: "Keyboard",
        type: "Mechanical",
        brand: "Gamen",
        pollingRate: "",
        layout: "78 Keys",
        connection: "Wired",
        keycaps: "Dual-Color PBT",
        switch: "Outemu Blue, Red",
        hotswap: "3 Pin",
        backlight: "Rainbow",
        structure: "",
        battery: "",
        features: [
            {
                ID: "Tahan hingga 50 juta kali tekan",
                EN: "Durable for up to 50 million keystrokes"
            },
            {
                ID: "Anti-ghosting untuk 78 tombol secara bersamaan",
                EN: "78-key simultaneous anti-ghosting"
            },
            {
                ID: "Keycaps kuat, tahan korosi, halus, dan tidak mudah memudar",
                EN: "Strong, corrosion-resistant keycaps that stay smooth and vibrant"
            },
            {
                ID: "Dilengkapi 2 kaki anti-slip untuk stabilitas maksimal",
                EN: "Equipped with 2 anti-slip feet for maximum stability"
            },
            {
                ID: "Mendukung N-Key Rollover",
                EN: "Supports N-Key Rollover"
            }
        ],
        minPrice: 200000,
        maxPrice: 230000,
        images: [
            "/titan-elite-1.webp",
            "/titan-elite-2.webp",
            "/titan-elite-3.webp",
            "/titan-elite-4.webp",
            "/titan-elite-5.webp",
        ],
        video: "/titan-elite.mp4",
        link: "https://vt.tiktok.com/ZSD1fab1t/",
        software: "https://drive.google.com/file/d/1XuYcY4tiI2uCI9rAdn-tCFmBaNiKvtrH/view",
        checkoutLink: "https://vt.tokopedia.com/t/ZSHtK8dD8rVtk-WLKPw/",
    }
];

export function slugify(name) {
    return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

export default products;
