# Cypress Automation Test - PT Transportasi Jakarta (Technical Test)

Repository ini berisi proyek automation testing untuk tugas teknis PT Transportasi Jakarta menggunakan **Cypress**, **Page Object Model (POM)**, dan **Data-Driven Testing (CSV)**.

## 📌 Cakupan Test Case

1. **Web Tables (Main Test)**
   - **4.1 Positive Test:** Bulk register users menggunakan data dinamis dari file CSV (`cypress/fixtures/users.csv`).
   - **4.2 Negative Test:** Verifikasi error handling saat form di-submit dengan field Email dikosongkan.
2. **Droppable (Nilai Plus / Bonus Test)**
   - **5.1 Bonus Test:** Melakukan simulasi drag and drop elemen hingga teks berubah menjadi `Dropped!`.

---

## 🛠️ Prasyarat

Pastikan komputer kamu sudah terpasang:
- **Node.js** (v18 atau lebih baru)
- **npm** (termasuk saat install Node.js)

---

## 🚀 Cara Menginstal & Menjalankan

### 1. Clone Repository & Install Dependencies
```bash
git clone https://github.com/shafwany/test-transjakarta-cypress.git
cd tes-transjakarta-cypress
npm install
