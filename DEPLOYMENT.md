# Deployment Guide for Code Reviewer

This guide will help you deploy both the frontend and backend of the Code Reviewer application.

## Prerequisites

- GitHub account
- Google Gemini API key ([Get it here](https://makersuite.google.com/app/apikey))
- Vercel account (for frontend) - [Sign up](https://vercel.com)
- Render account (for backend) - [Sign up](https://render.com)

## Project Structure

```
Code-Reviewer/
├── frontend/          # React + Vite frontend
├── backend/           # Express.js backend
├── vercel.json        # Vercel deployment config
└── render.yaml        # Render deployment config
```

## Step 1: Deploy Backend to Render

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Go to Render Dashboard**:
   - Visit [render.com](https://render.com) and sign in
   - Click "New +" → "Web Service"

3. **Connect GitHub Repository**:
   - Select your Code-Reviewer repository
   - Render will auto-detect the `render.yaml` file

4. **Configure Environment Variables**:
   - In the Render dashboard, go to your service → Environment
   - Add the following environment variable:
     - `GOOGLE_GEMINI_KEY`: Your Google Gemini API key
     - `NODE_ENV`: `production`

5. **Deploy Settings**:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free (or choose a paid plan)

6. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://code-reviewer-backend.onrender.com`)

## Step 2: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New..." → "Project"

2. **Import GitHub Repository**:
   - Select your Code-Reviewer repository
   - Vercel will auto-detect the `vercel.json` file

3. **Configure Environment Variables**:
   - In project settings → Environment Variables
   - Add:
     - `VITE_API_URL`: Your Render backend URL (e.g., `https://code-reviewer-backend.onrender.com`)

4. **Build Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at `https://your-project.vercel.app`

## Alternative: Manual Deployment

### Backend (Render Alternative - Railway)

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Add environment variable: `GOOGLE_GEMINI_KEY`
4. Set start command: `cd backend && npm start`

### Frontend (Vercel Alternative - Netlify)

1. Go to [netlify.com](https://netlify.com)
2. Create new site from GitHub
3. Build settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
4. Add environment variable: `VITE_API_URL`

## Local Development Setup

### Backend

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   GOOGLE_GEMINI_KEY=your_api_key_here
   PORT=3000
   ```

4. Start server:
   ```bash
   npm start
   ```

### Frontend

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Environment Variables Summary

### Backend (.env)
- `GOOGLE_GEMINI_KEY`: Your Google Gemini API key (required)
- `PORT`: Server port (optional, defaults to 3000)

### Frontend (.env)
- `VITE_API_URL`: Backend API URL (required for production)

## Troubleshooting

### Backend Issues

- **Port already in use**: Change `PORT` in `.env` or kill the process using port 3000
- **API key not working**: Verify your Google Gemini API key is correct and has proper permissions
- **CORS errors**: Backend already has CORS enabled, but ensure frontend URL is correct

### Frontend Issues

- **Cannot connect to backend**: Check `VITE_API_URL` is set correctly
- **Build fails**: Ensure all dependencies are installed with `npm install`
- **API calls fail**: Verify backend is deployed and accessible

## Post-Deployment Checklist

- [ ] Backend is deployed and accessible
- [ ] Frontend environment variable `VITE_API_URL` points to deployed backend
- [ ] Frontend is deployed and accessible
- [ ] Test code review functionality end-to-end
- [ ] Verify API key is set in production environment
- [ ] Check CORS settings if needed

## Support

If you encounter any issues:
1. Check Render/Vercel deployment logs
2. Verify environment variables are set correctly
3. Ensure all dependencies are in `package.json`
4. Check that ports and URLs are configured correctly

