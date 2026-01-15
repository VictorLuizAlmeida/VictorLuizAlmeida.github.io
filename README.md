# Portfolio Website

A simple, static portfolio website that you can easily customize and deploy for free.

## 🚀 Quick Start

1. **Edit your content** - Open `data.js` and update:
   - `profileData` - Your name, title, about, skills, contact info
   - `experienceData` - Your work experience
   - `educationData` - Your education
   - `projectsData` - Your projects with STAR model details

2. **Add your profile picture** - Place a file named `profile.jpg` in the root folder

3. **Test locally** - Just open `index.html` in your browser, or use a simple local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or Python 2
   python -m SimpleHTTPServer 8000
   
   # Then open http://localhost:8000
   ```

## 📝 How to Edit Content

### Profile Information
Edit the `profileData` object in `data.js`:
- Change name, title, location, about text
- Update LinkedIn and email links
- Add/remove skills from the array

### Experience
Edit the `experienceData` array in `data.js`. Each item has:
- `title` - Job title
- `company` - Company name
- `period` - Time period (e.g., "2019-2021")
- `description` - Job description
- `skills` - Array of skills used

### Education
Edit the `educationData` array in `data.js`. Each item has:
- `degree` - Degree name
- `institution` - School name
- `period` - Time period
- `description` - Description

### Projects
Edit the `projectsData` array in `data.js`. Each project has:
- `id` - Unique identifier (used for URLs)
- `title` - Project title
- `company` - Company name
- `keywords` - Array of technologies used
- `description` - Short description (shown on card)
- `image` - Emoji or icon (you can use emojis like "📊", "💰", etc.)
- `star` - STAR model with:
  - `situation` - The situation/context
  - `task` - Your task/responsibility
  - `action` - What you did
  - `result` - The outcome

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Easiest)
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select your main branch
5. Your site will be at: `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag and drop your project folder
4. Done! You get a clean URL like `yourname.netlify.app`

### Option 3: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up (free)
3. Import your GitHub repository or upload files
4. Deploy!

## 🎨 Customization

- **Colors**: Edit CSS variables in `styles.css` (lines 5-11)
- **Layout**: Modify the grid in `styles.css`
- **Fonts**: Change the font-family in `styles.css` (line 14)

## 📱 Features

- ✅ Clean, modern dark theme
- ✅ Responsive design (works on mobile)
- ✅ Project cards with STAR model details
- ✅ Experience timeline
- ✅ Education section
- ✅ Skills tags
- ✅ Easy to edit (just one JavaScript file)
- ✅ No build process needed
- ✅ Works offline
- ✅ Clean URLs (no hash routing)

## 💡 Tips

- Use emojis for project images (they're easy and look good)
- Keep project descriptions concise on cards (full details in STAR model)
- Update your LinkedIn and email links in `profileData.contact`
- Test locally before deploying

That's it! Just edit `data.js` and deploy. No complex setup needed! 🎉

