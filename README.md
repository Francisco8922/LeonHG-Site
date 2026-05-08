# Leon Hospitality — Site Deployment Guide

Built and ready to go live. This guide walks you from zip file to leonhg.com being live in about 30 to 45 minutes.

---

## What's in This Folder

```
leon-site/
├── index.html           Home page
├── what-we-do.html      Services / model explanation
├── faqs.html            9 FAQs with accordion
├── about.html           Founder story + mission
├── portfolio.html       Properties showcase
├── contact.html         Form (FormSubmit) + contact info
├── styles.css           Custom styles
└── script.js            Mobile nav, FAQ accordion, form logic
```

That's it. No build step. No dependencies to install. Just static files that work in any browser.

---

## Deployment: 5 Steps to Live

### Step 1: Create a GitHub Account (skip if you have one)

1. Go to **github.com**
2. Sign up (free). Use any email, doesn't have to be Francisco@leonhg.com.
3. Verify your email.

That's all. You're now a "developer" on paper.

### Step 2: Create a New Repository

1. Logged into GitHub, click the **"+"** icon (top right) → **"New repository"**
2. Repository name: `leon-site`
3. Set to **Public** (Vercel free tier requires public repos for some features; private also works on Vercel)
4. Check **"Add a README file"**
5. Click **"Create repository"**

You now have an empty repo at `github.com/YOUR-USERNAME/leon-site`.

### Step 3: Upload the Site Files

1. On your new repo page, click **"Add file"** → **"Upload files"**
2. **Open the zip file** I gave you on your computer and **drag every file inside it** (not the folder, the files themselves) onto the GitHub upload page:
   - `index.html`
   - `what-we-do.html`
   - `faqs.html`
   - `about.html`
   - `portfolio.html`
   - `contact.html`
   - `styles.css`
   - `script.js`
3. Scroll down. In **"Commit changes"**: leave the message as-is, click **"Commit changes"** button.
4. Wait 5 seconds. Files now live on GitHub.

### Step 4: Deploy to Vercel

1. Go to **vercel.com**
2. Click **"Sign Up"** → **"Continue with GitHub"** (this links the two accounts).
3. Authorize Vercel to access your GitHub.
4. Once in Vercel: click **"Add New..."** → **"Project"**.
5. You'll see your `leon-site` repo. Click **"Import"** next to it.
6. On the configure screen, **don't change anything**. Just click **"Deploy"**.
7. Wait 30 to 60 seconds. You'll see fireworks. The site is live at a URL like `leon-site-abc123.vercel.app`.
8. Click **"Visit"** to confirm.

You now have a live website. The next step makes it live at leonhg.com.

### Step 5: Connect leonhg.com

This is the part where Vercel and Squarespace talk to each other.

**In Vercel:**
1. From your project dashboard, click **"Settings"** → **"Domains"**.
2. Type `leonhg.com` and click **"Add"**.
3. Vercel will show you DNS records you need to set. **Keep this tab open** — you'll copy from it.

You'll see something like this from Vercel:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**In Squarespace:**
1. Open Squarespace in another tab.
2. Settings → **Domains** → click on `leonhg.com`.
3. Find **"DNS Settings"** or **"Advanced Settings"** (sometimes called **"Use a third-party DNS provider"**).
4. **Remove existing A records and CNAMEs** that point to Squarespace's servers.
5. **Add the records** Vercel gave you:
   - A record: Host = `@`, Value = `76.76.21.21`
   - CNAME: Host = `www`, Value = `cname.vercel-dns.com`
6. Save.

**Wait 5 to 30 minutes** for DNS to propagate. Then:
- Visit `https://leonhg.com` → should load your site.
- Visit `https://www.leonhg.com` → should also load.

If it doesn't load after 30 minutes, refresh Vercel's domain page. It will tell you what's misconfigured.

---

## Step 6: Activate the Contact Form

The form on contact.html uses **FormSubmit** — a free service that emails form submissions to you, no signup required. But it needs one verification step.

1. Once your site is live, go to `https://leonhg.com/contact.html`
2. Fill out the form with your own info as a test
3. Hit submit
4. **Check Francisco@leonhg.com inbox** (and spam folder) for an email from FormSubmit
5. Click the **"Activate"** link inside that email
6. Done. All future form submissions land in your inbox.

You only do this once. Verification is per email address.

---

## Editing the Site Later

Anything you want to change, you have two options.

**Option A: Ping me.** I edit, send you an updated file, you replace it on GitHub via the web UI (Add file → Upload files → overwrite). Vercel auto-redeploys in 30 seconds.

**Option B: Edit yourself.** Each HTML file is plain text. Open in any text editor (TextEdit on Mac works). Find the text you want to change, replace it, save. Upload to GitHub. Vercel redeploys.

Common edits you might want:
- **Phone number:** Search for `(917) 684-0026` and replace.
- **Email:** Search for `Francisco@leonhg.com` and replace.
- **Headlines and copy:** Just find and replace text directly.
- **Add a property to portfolio:** Duplicate one of the existing card blocks in `portfolio.html`.

---

## Logo Swap (When You're Ready)

Right now, the site uses a clean code-drawn skyline mark as the logo. When you have your final logo as a proper file, here's how to swap it in:

1. Save your logo as `logo.svg` (or `logo.png` if it's not vector).
2. Upload it to your GitHub repo (Add file → Upload files).
3. In **every HTML file**, find this block (appears twice per file: nav and footer):
   ```html
   <svg viewBox="0 0 40 40" class="w-full h-full" fill="currentColor">
     <rect x="4" y="22" width="4" height="16"/>
     <rect x="10" y="16" width="5" height="22"/>
     <rect x="17" y="9" width="4" height="29"/>
     <rect x="23" y="16" width="5" height="22"/>
     <rect x="30" y="22" width="4" height="16"/>
   </svg>
   ```
4. Replace it with:
   ```html
   <img src="/logo.svg" alt="Leon Hospitality" class="w-full h-full">
   ```
5. Commit. Vercel redeploys. New logo appears.

If you want me to do this swap, send me the final logo file when ready and I'll send back the updated HTML.

---

## Adding Real Photos

Right now, the site shows navy-gradient photo placeholders with labels like "Modern apartment building exterior." Replace them as you collect real photos:

1. Upload your photo (e.g., `apt-01.jpg`) to GitHub.
2. Find the photo placeholder block in the relevant HTML file:
   ```html
   <div class="photo-placeholder relative overflow-hidden aspect-[4/3]">
     <div class="absolute inset-0 flex items-center justify-center">
       ...
     </div>
   </div>
   ```
3. Replace it with:
   ```html
   <div class="relative overflow-hidden aspect-[4/3]">
     <img src="/apt-01.jpg" alt="Description" class="w-full h-full object-cover">
   </div>
   ```

If photo work is overwhelming, just send me the photos and tell me which page they go on. I'll send back updated files.

---

## What to Do This Week

Now that you know the deploy path, here's the operator order of operations to be live by Monday:

**Tonight or tomorrow morning (45 min):**
- [ ] GitHub account created
- [ ] `leon-site` repo created
- [ ] All 8 files uploaded
- [ ] Vercel account created
- [ ] Site deployed and live at `leon-site.vercel.app`

**Day 2 (15 min):**
- [ ] DNS records updated in Squarespace
- [ ] Wait for propagation
- [ ] leonhg.com loads your site

**Day 3 (5 min):**
- [ ] Submit test form
- [ ] Activate FormSubmit
- [ ] Test from your phone

**Before outreach starts (15 min):**
- [ ] Update LinkedIn headline: "Founder, Leon Hospitality Group | GM, Luxury Residential Operations"
- [ ] Add leonhg.com to LinkedIn featured section
- [ ] Update email signature with leonhg.com
- [ ] Send the URL to 3 trusted people for a quick gut check

---

## Troubleshooting

**Site won't load at leonhg.com after 30+ min**
- Check Vercel → Settings → Domains. It will show "Misconfigured" and tell you exactly what's wrong.
- 95% of the time it's a DNS record typo in Squarespace.

**Form doesn't email me**
- You probably skipped FormSubmit activation. Submit the form once, watch your inbox (and spam) for the activation email.

**Mobile menu doesn't open on my phone**
- Hard refresh the page. Browsers cache aggressively.

**Pages look unstyled (no design, just text)**
- Tailwind CDN isn't loading. Check your internet connection. The site uses `cdn.tailwindcss.com` which is occasionally slow to first-load on a new device.

**I broke something while editing**
- GitHub keeps full history. Repo → Commits → click any prior commit → "Revert" or just re-upload the original file.

---

## What I Need From You Going Forward

To keep momentum, three things would be helpful next:

1. **Once it's live**, send me the URL so I can do my own QA pass.
2. **As you collect photos**, drop them in a folder and ping me. I'll integrate them.
3. **As outreach starts**, share what's working and what isn't. The site copy can adapt based on what landlords actually push back on.

You've got this. The infrastructure is the easy part. The hard part is sending message #47 to the landlord who's going to say yes. Get the site live this weekend, then point everything at outreach.

— Built for Cisco, Leon Hospitality Group LLC
