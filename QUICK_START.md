# Quick Start Deployment Guide

## 🚀 Fast Deployment (5 minutes)

### Step 1: Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `code-reviewer-backend`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free
5. Add Environment Variable:
   - Key: `GOOGLE_GEMINI_KEY`
   - Value: Your Google Gemini API key
6. Click **"Create Web Service"**
7. Wait for deployment (~2-3 minutes)
8. **Copy your backend URL** (e.g., `https://code-reviewer-backend.onrender.com`)

### Step 2: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend` (click "Edit" and set it)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
5. Add Environment Variable:
   - Key: `VITE_API_URL`
   - Value: Your Render backend URL from Step 1
6. Click **"Deploy"**
7. Wait for deployment (~1-2 minutes)
8. **Your app is live!** 🎉

### Step 3: Test Your Deployment

1. Open your Vercel frontend URL
2. Enter some code in the editor
3. Click "Review"
4. Verify the review appears

## 📝 Environment Variables Reference

### Backend (Render)
```
GOOGLE_GEMINI_KEY=your_api_key_here
NODE_ENV=production
```

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend.onrender.com
```

## 🔧 Troubleshooting

**Backend not responding?**
- Check Render logs: Service → Logs
- Verify `GOOGLE_GEMINI_KEY` is set correctly
- Test backend URL: `curl https://your-backend.onrender.com`

**Frontend can't connect to backend?**
- Verify `VITE_API_URL` in Vercel environment variables
- Check browser console for errors
- Ensure backend URL doesn't have trailing slash

**Build fails?**
- Check deployment logs
- Verify all dependencies are in `package.json`
- Ensure Node.js version is compatible

## 📚 Need More Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

