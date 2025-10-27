# 🚀 Dashboard CRM & Product Catalog

A modern, full-stack dashboard built with **Next.js**, **Tailwind CSS**, and **shadcn/ui** — designed for speed, elegance, and productivity.  
Easily manage **leads (mini CRM)** and **products (catalog)** with a beautiful UI, smooth animations, and blazing-fast data fetching.

---

## ✨ Features

### 🧭 Dashboard Layout
- Built with **Next.js (App Router, TypeScript)** and **Tailwind CSS**.
- Clean, minimal, and **responsive layout** with tab navigation between **Leads** and **Products**.
- **Dark/Light mode** with a professional palette.
- Smooth animations and micro-interactions for a polished experience.

---

### 👥 Leads Section
- Fetches data from [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users).
- Displays **Name**, **Email**, **Company**, and **City**.
- Add new leads with a local form.
- **Search / Filter** leads by name or company.
- **Bonus:** Edit and delete leads seamlessly.

---

### 🛍️ Products Section
- Fetches products from [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products).
- Displays **Image**, **Title**, **Price**, and **Category** in elegant cards.
- **Filter by category** for better navigation.
- Detailed **product modal** for more information.
- **Bonus:** Responsive grid layout and skeleton loaders for smooth UX.

---

## 🧩 Key Technologies

| Technology | Purpose |
|-------------|----------|
| **Next.js 16** | Routing, API routes, server-side rendering |
| **Tailwind CSS 4** | Utility-first styling, responsive design |
| **shadcn/ui** | Accessible, composable UI components |
| **SWR** | Fast, reliable data fetching (stale-while-revalidate) |
| **Lucide React** | Modern, lightweight icons |
| **next-themes** | Theme toggling (light/dark mode) |
| **tw-animate-css** | Elegant transitions and animations |

---

## 🗂️ Project Structure

```
📦 dashboard-crm/
├── app/
│   ├── leads/          # Leads page and logic
│   ├── products/       # Products page and logic
│   ├── layout.tsx      # Main dashboard layout
│   └── page.tsx        # Entry point (Tabs Navigation)
├── components/ui/       # Custom shadcn/ui components
├── types/               # Shared TypeScript interfaces
├── lib/                 # SWR fetchers, utils
├── public/              # Static assets
├── styles/              # Tailwind and theme customization
└── ...
```

---

## ⚙️ Customization

- **Theme:** Edit `globals.css` to update color palette or dark mode behavior.  
- **UI Components:** Extend or replace components in `components/ui/`.  
- **Data Fetching:** Use SWR hooks for caching and revalidation.  
- **Lead–Product Linking (Optional):** Use `types/leadProductLink.ts` for relationship features.  

---

## 🧠 Best Practices Followed

✅ Component-based architecture  
✅ Clean and readable code with Tailwind utilities  
✅ Async/await for all async operations  
✅ Proper loading and error states  
✅ Modern UI/UX principles with smooth animations  

---

## 🧪 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

---

## 🚀 Deployment

Easily deploy on **Vercel** or any platform supporting Next.js.

---

## 🤝 Contributing

1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use and modify it for your own projects.

---

## 🙌 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [SWR](https://swr.vercel.app/)
- [Lucide Icons](https://lucide.dev/)

---

> 💡 *Built for modern teams to manage leads and products with speed, style, and simplicity.*
