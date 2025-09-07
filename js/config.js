const CONFIG = {
nama: "Toso Store", // Nama Store
profil: "https://files.catbox.moe/aix84a.jpg", // Url Profil
banner: "https://files.catbox.moe/2m29d4.jpg", // Url Banner 
tentang: "Toso market adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2023. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jawa barat, Indonesia",
sosial_media: {
  email: "tosomodzx@gmail.com", // Email
  youtube: "Ga punya yutube", // YouTube Username 
  tiktok: "tosoaja_", // Tiktok Username 
  whatsapp: "6283845989155", // WhatsApp Number 
  telegram: "tosoajaa" // Telegram Username
},
payment: {
  dana: "083845989155", // Payment Dana
  gopay: "083845989155", // Payment Gopay 
  ovo: "Ga punya ovo", // Payment Ovo 
  qris: "Di wa aja" // Url Qris
},
telegram_api: {
  bot: "7209014980:AAF_rnKCzGVaoA9bCbKs06gw49j6NuSrghk", // Token bot father
  chatid: "7572969716" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 500 },
                  { "name": "2GB RAM", "price": 1000 },
                  { "name": "3GB RAM", "price": 2000 },
                  { "name": "4GB RAM", "price": 3000 },
                  { "name": "5GB RAM", "price": 4000 },
                  { "name": "6GB RAM", "price": 5000 },
                  { "name": "7GB RAM", "price": 6000 },
                  { "name": "8GB RAM", "price": 7000 },
                  { "name": "9GB RAM", "price": 8000 },
                  { "name": "10GB RAM", "price": 9000 },
                  { "name": "Unlimited RAM", "price": 10000 }
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "BELUM TERSEDIA ", "price": 0 }
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "BELUM TERSEDIA ", "price": 0 }
                ]
              },
              {
                "id": 4,
                "name": "Dedicated Server",
                "icon": "fas fa-database",
                "description": "Server dedicated dengan performa tinggi, cocok untuk skala besar.",
                "variants": [
                  { "name": "BELUM TERSEDIA ", "price": 0 }
                ]
              },
              {
                "id": 5,
                "name": "Web Hosting",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "BELUM TERSEDIA ", "price": 0 }
                ]
              }
            ],
            "Produk lainnya": [
                {
                    id: 6,
                    name: "Nokos wa (nomor kosong) ",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Nokos indo", price: 6000 },
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 15000 },
                        { name: "Banner Event", price: 25000 },
                        { name: "Banner Promosi", price: 30000 }
                    ]
                },
                {
                    id: 8,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 9,
                    name: "UI/UX Design",
                    icon: "fas fa-laptop-code",
                    description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
                    variants: [
                        { name: "Landing Page", price: 75000 },
                        { name: "Full Website", price: 250000 },
                        { name: "Mobile App UI", price: 300000 }
                    ]
                },
                {
                    id: 10,
                    name: "Desain Kartu Nama",
                    icon: "fas fa-id-card",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 10000 },
                        { name: "Premium", price: 20000 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 11,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 15000 },
                        { name: "E-Book Programming", price: 20000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                },
                {
                    id: 12,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 30000 },
                        { name: "Software Utility", price: 25000 },
                        { name: "Tools Random Pack", price: 20000 }
                    ]
                },
                {
                    id: 13,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { "name": "BELUM TERSEDIA ", "price": 0 }
                    ]
                },
                {
                    id: 14,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 10000 },
                        { name: "Template Website", price: 30000 },
                        { name: "Template Sosmed", price: 30000 }
                    ]
                },
                {
                    id: 15,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Alight motion premium (1 tahun)", price: 6000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 },
                        { "name": "Capcut Premium (1 bulan)", "price": 15000 },
                        { "name": "YouTube premium (1 bulan)", "price": 5000 },
                        { "name": "Movie box premium(1 tahun)", "price": 15000 },
                        
                    ]
                }
            ]
        };
