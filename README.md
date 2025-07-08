# Market Sitesi - E-ticaret Web Uygulaması

Modern ve kullanıcı dostu bir e-ticaret web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern UI/UX**: Tailwind CSS ile güzel ve responsive tasarım
- **Ürün Katalogu**: Kategoriler halinde düzenlenmiş ürünler
- **Arama Fonksiyonu**: Ürün adı ve açıklamasına göre arama
- **Kategori Filtreleme**: Kategorilere göre ürün filtreleme
- **Alışveriş Sepeti**: Ürün ekleme, çıkarma ve miktar güncelleme
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **TypeScript**: Tip güvenliği için TypeScript kullanımı
- **Modern İkonlar**: Lucide React ile güzel ikonlar

## 🛠️ Teknolojiler

- **React 18** - Modern kullanıcı arayüzü framework'ü
- **TypeScript** - Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS** - Utility-first CSS framework'ü
- **Vite** - Hızlı geliştirme ve build aracı
- **Lucide React** - Modern ikon kütüphanesi

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 🏗️ Build

Üretim için build almak için:

```bash
npm run build
```

Build edilen dosyalar `dist` klasöründe oluşacaktır.

## 📱 Kullanım

- **Ürün Arama**: Üst kısımdaki arama çubuğunu kullanarak ürün arayabilirsiniz
- **Kategori Filtreleme**: Kategori butonlarına tıklayarak ürünleri filtreleyebilirsiniz
- **Sepete Ekleme**: Ürün kartlarındaki "Sepete Ekle" butonunu kullanın
- **Sepet Yönetimi**: Sağ üstteki sepet butonuna tıklayarak sepeti görüntüleyin
- **Miktar Güncelleme**: Sepet içinde + ve - butonları ile miktarları güncelleyin

## 🎨 Tasarım

- **Renk Paleti**: Mavi tonlarda profesyonel tema
- **Tipografi**: Inter font ailesi
- **Responsive**: Mobile-first yaklaşım
- **Animasyonlar**: Smooth geçişler ve hover efektleri

## 📂 Proje Yapısı

```
src/
├── components/          # React bileşenleri
│   ├── Header.tsx      # Üst menü ve arama
│   ├── ProductGrid.tsx # Ürün listesi
│   ├── ProductCard.tsx # Tekil ürün kartı
│   └── Cart.tsx        # Alışveriş sepeti
├── context/            # React context'leri
│   └── CartContext.tsx # Sepet state yönetimi
├── data/               # Veri dosyaları
│   └── products.ts     # Ürün verileri
├── types/              # TypeScript tipleri
│   └── index.ts        # Tip tanımları
├── App.tsx             # Ana uygulama bileşeni
├── main.tsx            # Giriş noktası
└── index.css           # CSS stilleri
```

## 🔧 Konfigürasyon

- **Vite**: `vite.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`

## 📈 Geliştirme

Bu proje modern web geliştirme standartlarını takip eder:

- Component-based mimarisi
- TypeScript ile tip güvenliği
- Responsive design prensiplerine uygunluk
- Modern CSS (Tailwind) kullanımı
- Context API ile state yönetimi

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 