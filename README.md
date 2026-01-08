# Code Reviewer

An AI-powered code review application that uses Google Gemini to provide intelligent code reviews and suggestions.

## Features

- 🤖 AI-powered code reviews using Google Gemini
- 💻 Syntax-highlighted code editor
- 📝 Markdown-formatted review output
- 🎨 Modern, clean UI
- ⚡ Fast and responsive

## Tech Stack

### Frontend
- React 19
- Vite
- Prism.js for syntax highlighting
- React Markdown for review display
- Axios for API calls

### Backend
- Node.js
- Express.js
- Google Gemini AI API
- CORS enabled

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key ([Get it here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd Code-Reviewer
   ```

2. **Setup Backend**:
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   GOOGLE_GEMINI_KEY=your_api_key_here
   PORT=3000
   ```
   
   Start the server:
   ```bash
   npm start
   ```

3. **Setup Frontend**:
   ```bash
   cd frontend
   npm install
   ```
   
   Create a `.env` file:
   ```env
   VITE_API_URL=http://localhost:3000
   ```
   
   Start the development server:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   - Frontend: `http://localhost:5173` (or the port shown in terminal)
   - Backend: `http://localhost:3000`

## Usage

1. Enter or paste your code in the editor
2. Click the "Review" button
3. View the AI-generated code review in the right panel
4. The review includes:
   - Issues found
   - Recommended fixes
   - Code improvements
   - Best practices suggestions

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

### Quick Deployment Summary

- **Backend**: Deploy to [Render](https://render.com) or [Railway](https://railway.app)
- **Frontend**: Deploy to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)

## Project Structure

```
Code-Reviewer/
├── backend/
│   ├── src/
│   │   ├── app.js              # Express app setup
│   │   ├── controllers/        # Request handlers
│   │   ├── routes/             # API routes
│   │   └── services/           # Business logic (AI service)
│   ├── server.js               # Server entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main React component
│   │   ├── App.css             # Styles
│   │   └── main.jsx            # React entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── vercel.json                 # Vercel deployment config
├── render.yaml                 # Render deployment config
└── README.md
```

## API Endpoints

### POST `/ai/get-review`

Review code using AI.

**Request Body**:
```json
{
  "code": "function example() { return 1 + 1; }"
}
```

**Response**:
```
Markdown-formatted code review
```

## Environment Variables

### Backend
- `GOOGLE_GEMINI_KEY` (required): Your Google Gemini API key
- `PORT` (optional): Server port, defaults to 3000

### Frontend
- `VITE_API_URL` (required): Backend API URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

ISC

## Acknowledgments

- Google Gemini AI for code review capabilities
- React and Vite communities
- All open-source contributors

