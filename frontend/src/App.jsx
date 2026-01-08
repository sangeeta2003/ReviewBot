import './App.css'
import { useState, useEffect } from 'react'

import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'

import "prismjs/themes/prism-tomorrow.css"
import "prismjs/components/prism-javascript"
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  async function reviewCode() {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const response = await axios.post(
      `${apiUrl}/ai/get-review`,
      { code }
    );
    setReview(response.data);
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code =>
              Prism.highlight(code, Prism.languages.javascript, 'javascript')
            }
            padding={16}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 15,
              backgroundColor: "#121212",
              color: "#fff",
              minHeight: "100%",
            }}
          />
        </div>

        <button className="review" onClick={reviewCode}>
          Review
        </button>
      </div>

      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review || "Your code review will appear here..."}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
