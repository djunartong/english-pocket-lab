# English Pocket Lab — Landing Page

A single-page React landing site for **English Pocket Lab**, an English tuition centre based in Indonesia offering Kids English, TOEFL, IELTS, and ESP (English for Specific Purposes) programs.

🔗 Instagram: [@englishpocketlab](https://instagram.com/englishpocketlab)

---

## ✨ Features

- Responsive single-page layout (mobile → desktop)
- Hamburger dropdown navigation for mobile
- Sections: Hero, Programs, Why Choose Us (with Past Classes grid), Student Achievements, Instagram Feed, Contact CTA
- Scroll-reveal animations via `IntersectionObserver`
- Click-to-chat WhatsApp integration with pre-filled message
- Instagram post popup modal on image click
- Elfsight Instagram feed widget
- Brand palette and copy tailored to an Indonesian audience (bilingual EN/ID)

---

## 🛠 Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- Plain CSS (no framework) — variables defined in `src/index.css`
- [react-icons](https://react-icons.github.io/react-icons/) — WhatsApp icon
- [Elfsight](https://elfsight.com/) — Instagram feed widget
- Google Fonts: Playfair Display, Lato, Dancing Script

---

## 📁 Project Structure

```
english-pocket-lab/
├── public/
│   ├── english-pocket-lab.jpg    # Logo
│   ├── classes/                  # Past class images (class-1.jpg … class-10.jpg)
│   └── achievements/             # Achievement images (achievement-1.jpg … achievement-3.jpg)
├── src/
│   ├── App.jsx                   # Root component — assembles all sections
│   ├── main.jsx                  # Vite entry point
│   ├── index.css                 # Global styles, fonts, CSS variables
│   ├── constants/
│   │   ├── colors.js             # Brand color palette (source of truth)
│   │   └── data.js               # Programs, achievements, past classes, WA config
│   ├── hooks/
│   │   └── useInView.js          # Scroll-reveal IntersectionObserver hook
│   └── components/
│       ├── FadeIn.jsx
│       ├── Mascot.jsx
│       ├── Modal.jsx             # Instagram post popup
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── TaglineStrip.jsx
│       ├── Programs.jsx
│       ├── WhyEPL.jsx            # Includes past classes image grid
│       ├── Achievement.jsx
│       ├── InstagramFeed.jsx     # Elfsight widget + follow CTA
│       └── Footer.jsx
├── .env                          # Local env vars (gitignored)
├── .env.example                  # Env var template (committed)
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## 🎨 Brand Palette

| Color        | Hex       | Role                  |
| ------------ | --------- | --------------------- |
| Pink         | `#E4206A` | Primary accent, CTAs  |
| Navy Blue    | `#18315D` | Primary text, headers |
| Orange       | `#F8A32B` | Highlights, badges    |
| Light Orange | `#FCF1E5` | Background            |

Defined as both JS constants (`src/constants/colors.js`) and CSS variables (`src/index.css`) — update both together if the palette changes.

---

## ✏️ Editing Content

Most copy and data lives in **`src/constants/data.js`**:

| Export         | Description                                         |
| -------------- | --------------------------------------------------- |
| `programs`     | Program cards (Kids English, TOEFL/IELTS/ESP)       |
| `whyItems`     | "Why Choose Us" reason cards                        |
| `pastClasses`  | Past class images grid (src, alt, instagramUrl)     |
| `achievements` | Student achievement images (src, alt, instagramUrl) |
| `WA_NUMBER`    | WhatsApp number in international format (no `+`)    |
| `WA_MESSAGE`   | Pre-filled WhatsApp message                         |

No need to touch component files for routine content updates.

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable                  | Description                            |
| ------------------------- | -------------------------------------- |
| `VITE_ELFSIGHT_WIDGET_ID` | Widget ID from your Elfsight dashboard |

---

## 🖼 Adding Images

Place images in the `public/` folder:

- **Past class banners:** `public/classes/class-1.jpg` … `class-10.jpg`
- **Achievement photos:** `public/achievements/achievement-1.jpg` … `achievement-3.jpg`
- **Logo:** `public/english-pocket-lab.jpg`

All images are square (1:1 aspect ratio) to match the Instagram post format.

---

## 📦 Deployment

This project deploys cleanly to [Vercel](https://vercel.com) or [Netlify](https://netlify.com):

- **Build command:** `npm run build`
- **Output directory:** `dist`

Set `VITE_ELFSIGHT_WIDGET_ID` in the platform's environment variable dashboard before deploying.

Connect the GitHub repo for automatic deploys on every push to `main`.

---

## 📄 License

Private project — all rights reserved by English Pocket Lab.
