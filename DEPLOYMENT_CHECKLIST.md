# Deployment Checklist

Use this checklist to ensure a smooth deployment process.

## Pre-Deployment

- [ ] Code is pushed to GitHub
- [ ] All environment variables are documented
- [ ] `.env` files are in `.gitignore` (should not be committed)
- [ ] Dependencies are up to date
- [ ] Application works locally

## Backend Deployment (Render)

- [ ] Created Render account
- [ ] Connected GitHub repository to Render
- [ ] Created new Web Service
- [ ] Set build command: `cd backend && npm install`
- [ ] Set start command: `cd backend && npm start`
- [ ] Added environment variable: `GOOGLE_GEMINI_KEY`
- [ ] Added environment variable: `NODE_ENV=production`
- [ ] Service is deployed and running
- [ ] Backend URL is accessible (test with: `curl https://your-backend.onrender.com`)
- [ ] Copied backend URL for frontend configuration

## Frontend Deployment (Vercel)

- [ ] Created Vercel account
- [ ] Connected GitHub repository to Vercel
- [ ] Imported project
- [ ] Set root directory to `frontend` (if needed)
- [ ] Added environment variable: `VITE_API_URL` (with your backend URL)
- [ ] Build completed successfully
- [ ] Frontend is deployed and accessible
- [ ] Tested code review functionality

## Post-Deployment Testing

- [ ] Frontend loads correctly
- [ ] Can enter code in editor
- [ ] Review button works
- [ ] API call reaches backend
- [ ] Code review is generated and displayed
- [ ] No console errors
- [ ] No CORS errors
- [ ] Mobile responsiveness (if applicable)

## Troubleshooting

If something doesn't work:

1. **Check deployment logs**:
   - Render: Service → Logs
   - Vercel: Project → Deployments → View Function Logs

2. **Verify environment variables**:
   - Render: Service → Environment
   - Vercel: Project → Settings → Environment Variables

3. **Test backend directly**:
   ```bash
   curl -X POST https://your-backend.onrender.com/ai/get-review \
     -H "Content-Type: application/json" \
     -d '{"code":"function test(){return 1;}"}'
   ```

4. **Check browser console** for frontend errors

5. **Verify API URL** in frontend environment variables matches backend URL

## Quick Commands

### Test Backend Locally
```bash
cd backend
npm install
# Create .env file with GOOGLE_GEMINI_KEY
npm start
```

### Test Frontend Locally
```bash
cd frontend
npm install
# Create .env file with VITE_API_URL=http://localhost:3000
npm run dev
```

### Build Frontend for Production
```bash
cd frontend
npm run build
# Output will be in frontend/dist/
```

