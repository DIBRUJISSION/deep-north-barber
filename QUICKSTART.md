# 🚀 Quick Start Guide – Deep North Barber

## ⚡ 5-Minute Setup

### 1. Install & Run (5 min)

```bash
cd "d:\Web development\Barber"
npm install
npm run dev
```

**Then open your browser to**: `http://localhost:3000`

You'll see the full premium website running locally.

---

## 🎨 Customization (Next Steps)

### 2. Add Your Images

Replace placeholders with real images:

| Section | File | What to Add |
|---------|------|-----------|
| About (Ervin) | `src/components/About.tsx` | Founder portrait |
| Gallery | `src/components/Gallery.tsx` | 6 before/after results |
| Location | `src/components/Location.tsx` | Google Maps embed code |

**Image Format**:
- JPG/PNG, optimized for web (<200KB each)
- High-quality (2000×2000px minimum)
- Consistent style (editorial, professional)

### 3. Update Business Info

Edit these files with your specific details:

**Contact & Social**:
- `src/components/Footer.tsx` – Instagram/Facebook links
- `src/components/Location.tsx` – Map embed, address

**Services** (if you want to change):
- `src/components/Services.tsx` – Edit the `services` array

**Offers** (if you want to adjust):
- `src/components/Offers.tsx` – Update discount codes/offers

**Key Info Already Updated**:
- ✅ Business name: Deep North Barber
- ✅ Address
- ✅ Phone: 0401 404 325
- ✅ Hours (Mon–Sat)
- ✅ Services & pricing
- ✅ Booking link
- ✅ All copy

---

## 🧪 Testing (Before Deploy)

### Mobile Test
```bash
# Keep npm run dev running, then:
# 1. Find your local IP (ipconfig on Windows)
# 2. Visit http://YOUR_IP:3000 from phone
# Or use browser DevTools (F12 → toggle device toolbar)
```

### Desktop Test
- Chrome
- Firefox
- Safari
- Edge

### Link Testing
- [ ] All "Book Now" buttons link to Timely
- [ ] Phone number tel: link works
- [ ] Navigation links scroll to sections
- [ ] Footer links work

### Performance
```bash
# Build for production locally
npm run build

# List built files (should be ~1-2MB)
du -sh .next
```

---

## 🚀 Deployment (Pick One)

### Option A: Vercel (⭐ Recommended – 2 minutes)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial: Deep North Barber website"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - ✅ Done! Your site is live

3. **Add Custom Domain** (optional)
   - Vercel Dashboard → Settings → Domains
   - Add `deepnorthbarber.com`
   - Follow DNS instructions

### Option B: Netlify (2 minutes)

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub
4. Select your repo
5. Click "Deploy"
6. ✅ Done!

### Option C: Self-Hosted (See DEPLOYMENT.md)

---

## 📊 After You Go Live

### Setup Analytics
1. Google Analytics 4: [analytics.google.com](https://analytics.google.com)
2. Create property for your website
3. Add to site (or ask in next session)

### Update Google Business
1. [google.com/business](https://google.com/business)
2. Add your website URL
3. Add photos
4. Verify phone number

### Monitor Performance
- Check [pagespeed.web.dev](https://pagespeed.web.dev)
- Run Lighthouse audit monthly
- Track analytics (who's booking, where they're from)

---

## 🎯 Expected Results

Once deployed and indexed by Google (1-2 weeks):

- ✅ Show up in Google Maps for "barber Gordon"
- ✅ Rank for "barbershop North Shore"
- ✅ Get local traffic from Sydney
- ✅ Phone/booking clicks tracked
- ✅ Mobile-friendly badge

---

## 🔧 Common Customizations

### Change Hero Headline
```tsx
// File: src/components/Hero.tsx
<h1 className="...">
  Precision That Speaks
  <span className="block text-brand-bronze">Before You Do</span>
</h1>
```

### Change Colors
```js
// File: tailwind.config.js
colors: {
  brand: {
    bronze: '#b8860b',  // Change this color
    // ...
  }
}
```

### Add a New Service
```tsx
// File: src/components/Services.tsx
const services = [
  // ... existing services
  {
    name: 'Your New Service',
    duration: '20 mins',
    price: '$40',
    description: 'Description here',
  },
]
```

### Hide/Show Sections
```tsx
// File: src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Header />
      <Hero />
      {/* Comment out sections you don't want */}
      {/* <Gallery /> */}
      {/* ... */}
    </main>
  )
}
```

---

## ❓ Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### npm install fails
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Build fails locally
```bash
# Remove cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## 📚 Files to Know

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Main homepage (imports all components) |
| `src/components/Header.tsx` | Navigation |
| `src/components/Hero.tsx` | Main headline/CTA |
| `src/components/Services.tsx` | Service cards + pricing |
| `src/components/Offers.tsx` | Promotions |
| `tailwind.config.js` | Color palette & theme |
| `package.json` | Dependencies & scripts |
| `STRATEGY.md` | Brand positioning guide |
| `DEPLOYMENT.md` | Deployment options |

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## ✅ Checklist Before Launch

- [ ] All images added (Ervin photo, gallery results, etc.)
- [ ] Business info double-checked (phone, address, hours)
- [ ] All links tested (booking, navigation, external)
- [ ] Mobile tested (iPhone and Android)
- [ ] Desktop tested (Chrome, Firefox, Safari)
- [ ] Lighthouse audit run (90+ score)
- [ ] Vercel/Netlify deployment working
- [ ] Custom domain pointing to deployment
- [ ] HTTPS/SSL working (green lock)
- [ ] Google Analytics set up
- [ ] Google Business Profile updated

---

## 🎉 You're Ready!

**Timeline**:
- Setup: 5 min ✅
- Customize: 30 min
- Test: 30 min
- Deploy: 5 min
- **Total: <2 hours to live** 🚀

---

**Questions?**
- See README.md for full documentation
- See STRATEGY.md for brand/copy info
- See DEPLOYMENT.md for hosting details

**Ready? Let's go!** 🏆
