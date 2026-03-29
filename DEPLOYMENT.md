# Deployment Guide: Deep North Barber

## 🚀 Quick Start Deployment Options

---

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- Built by the creators of Next.js
- Automatic deployments from Git
- Free tier includes excellent performance
- One-click rollbacks
- Automatic HTTPS
- Environment variables management
- Analytics included

### Steps:

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Deep North Barber website"
   git remote add origin https://github.com/yourusername/deep-north-barber.git
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select your GitHub repo
   - Leave settings as default (Next.js is auto-detected)
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., deepnorthbarber.com.au)
   - Update DNS records (Vercel provides instructions)

4. **Environment Variables** (if needed later)
   - Settings → Environment Variables
   - Add as needed (currently none required)

**Cost**: Free tier covers production use easily

---

## Option 2: Netlify

### Why Netlify?
- Simple Git-based deployment
- Free tier very generous
- Good performance
- Easy form handling (if needed later)

### Steps:

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add New Site" → "Import an existing project"
   - Select GitHub and authorize
   - Choose your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next` (or `out` if static)
   - Leave other settings default

3. **Deploy**
   - Click "Deploy Site"
   - Netlify automatically builds and deploys

4. **Custom Domain**
   - Domain settings → Add domain
   - Point DNS records to Netlify

**Cost**: Free tier sufficient

---

## Option 3: Self-Hosted (VPS/Server)

### Why Self-Host?
- Full control
- Can add custom backend later
- Independent from platform changes

### Requirements:
- Ubuntu 20.04+ server
- Node.js 18+
- PM2 or similar process manager
- Nginx (reverse proxy)
- Certbot (SSL certificates)

### Steps:

1. **SSH into server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone repository**
   ```bash
   cd /var/www
   git clone https://github.com/yourusername/deep-north-barber.git
   cd deep-north-barber
   ```

4. **Install dependencies**
   ```bash
   npm install
   npm run build
   ```

5. **Install PM2 (process manager)**
   ```bash
   sudo npm install -g pm2
   ```

6. **Start application**
   ```bash
   pm2 start npm --name "deep-north-barber" -- start
   pm2 startup
   pm2 save
   ```

7. **Setup Nginx**
   ```nginx
   server {
       listen 80;
       server_name deepnorthbarber.com.au www.deepnorthbarber.com.au;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable HTTPS (Certbot)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d deepnorthbarber.com.au -d www.deepnorthbarber.com.au
   ```

9. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

**Cost**: $5-20/month depending on VPS provider

---

## Option 4: Docker + Heroku (Legacy)

### Note: Heroku discontinued free tier. Not recommended unless you already use Heroku.

---

## Post-Deployment Checklist

### Essential
- [ ] SSL certificate (HTTPS) installed and working
- [ ] Custom domain pointing to deployment
- [ ] All external links tested
- [ ] Phone tel: links working on mobile
- [ ] Booking link (to Timely) working
- [ ] Mobile responsive test (iPhone, Android)
- [ ] Desktop test (Chrome, Firefox, Safari)

### Performance
- [ ] Lighthouse audit 90+
- [ ] Google PageSpeed 85+
- [ ] Images optimized
- [ ] No 404 errors
- [ ] Fast first contentful paint (<2.5s)

### SEO
- [ ] Google Search Console connected
- [ ] Sitemap.xml exists
- [ ] Meta tags present
- [ ] Schema markup correct
- [ ] Mobile Friendly test passed

### Monitoring
- [ ] Analytics set up (Google Analytics 4)
- [ ] Error logging enabled
- [ ] Uptime monitoring configured
- [ ] Backup plan in place

---

## Environment Setup

Create `.env.local` if needed (currently empty):

```bash
# .env.local
# Add API keys, secrets here
# Never commit this file (in .gitignore)

# Example (not currently needed):
# NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

---

## Continuous Deployment (CD)

### If using Vercel/Netlify
- Any push to `main` branch auto-deploys
- Preview deployments on PRs
- Automatic rollbacks available

### If self-hosted with GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Install and Build
        run: |
          npm install
          npm run build

      - name: Deploy to Server
        env:
          SSH_KEY: ${{ secrets.SSH_KEY }}
          HOST: ${{ secrets.HOST }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H $HOST >> ~/.ssh/known_hosts
          scp -r .next user@$HOST:/var/www/deep-north-barber/
          ssh user@$HOST "cd /var/www/deep-north-barber && pm2 restart deep-north-barber"
```

Then add secrets in GitHub repo settings.

---

## SSL Certificate Management

### Vercel/Netlify
- Automatic, no action needed
- Renews automatically

### Self-Hosted with Certbot
```bash
# Renew SSL (runs automatically with systemd timer)
sudo certbot renew --quiet

# Manual renewal if needed
sudo certbot renew --force-renewal
```

---

## Performance Optimization (After Deploy)

1. **Enable Caching**
   - Vercel: Automatic
   - Netlify: Set cache headers in `netlify.toml`
   - Self-hosted: Configure in Nginx

2. **Enable Compression**
   - Vercel/Netlify: Automatic
   - Self-hosted: Add to Nginx

3. **Monitor Core Web Vitals**
   - Use [PageSpeed Insights](https://pagespeed.web.dev)
   - Use [WebVitals.dev](https://webvitals.dev)
   - Set up real user monitoring (RUM)

---

## Backup & Disaster Recovery

### Code
- GitHub repo is your backup
- No database to back up (static site)
- Enable branch protection (`main`)

### Domain & DNS
- Keep registrar credentials secure
- Document DNS records
- Test DNS failover plan

### Monitoring
- Set up uptime alerts
- Get notified if site goes down
- Test recovery process monthly

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Timeout
- Check build time locally with `npm run build`
- Ensure all dependencies in `package.json`
- Check for large image files

### 502 Bad Gateway
- Restart application process
- Check server resources (CPU, memory)
- Review error logs

### High Memory Usage
- Restart Node process
- Limit concurrent connections
- Profile with `node --prof`

---

## Domain Registration & DNS

### Recommended Registrars
- Namecheap
- GoDaddy
- Google Domains

### DNS Setup (example with Vercel)
After adding domain to Vercel, update at registrar:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A (for root)
Name: @
Value: 76.76.19.20
```

(Exact values provided by your hosting platform)

---

## Monitoring & Analytics

### Google Analytics 4
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Add measurement ID to `next.config.js` or use `gtag.js`
3. Track: views, sessions, booking clicks, phone clicks

### Uptime Monitoring
- Uptime Robot (free tier)
- Better Uptime
- Pingdom

### Error Tracking (Optional)
- Sentry.io
- Rollbar

---

## Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment/static-exports)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Nginx Reverse Proxy](https://nginx.org/en/docs/http/ngx_http_proxy_module.html)

---

**Ready to go live? Pick Vercel, set and forget. ✅**
