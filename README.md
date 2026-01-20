# ORBIT-AI
Here is a well-structured **README.md** file for your project **ORBIT - AI** (a simple local AI chat backend using Ollama + Express).

You can copy-paste this content into a file named `README.md` in the root of your `orbitbakend` folder.

```markdown
# ORBIT - AI

A lightweight, local AI chat backend powered by **Ollama** + **Express.js**.  
Send messages to a Gemma 2B model (or any Ollama model you prefer) through a simple web API.

**Current status**: Basic working prototype with a single `/chat` endpoint.

## Features

- Simple REST API endpoint: `POST /chat`
- Streams responses from local Ollama instance
- Serves static files from `/public` folder (for frontend)
- Minimal dependencies
- Runs completely offline (after model download)

## Folder Structure

```
orbitbakend/
├── public/                 # ← put your frontend files here (index.html, css, js...)
│   ├── index.html
│   ├── style.css
│   └── script.js
├── node_modules/           # (auto-generated)
├── .env                    # (optional) can store PORT, OLLAMA_URL, etc.
├── package.json
├── package-lock.json
├── server.js               # ← main Express server file
└── README.md               # ← this file
```

## Prerequisites

- **Windows / macOS / Linux**
- **Node.js** ≥ 18
- **Ollama** installed and running (https://ollama.com)

## Installation Steps

1. **Install Ollama** (if not already done)

   - Download & install from → https://ollama.com/download
   - Open terminal / command prompt and pull the model:

     ```bash
     ollama pull gemma:2b
     ```

     (You can later use other models like `llama3.1:8b`, `mistral`, `phi3`, etc.)

2. **Start Ollama server**

   Keep this running in a separate terminal:

   ```bash
   ollama serve
   ```

   (default address = http://localhost:11434)

3. **Clone / open the project folder**

   ```bash
   # If you haven't already
   cd path/to/orbitbakend
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

   Required packages (should already be in package.json):

   - express
   - node-fetch

5. **(Optional) Create .env file**

   ```env
   PORT=3000
   OLLAMA_URL=http://localhost:11434
   ```

   (Currently hardcoded in server.js — you can improve this later)

6. **Run the server**

   ```bash
   node server.js
   ```

   You should see:

   ```
   🚀 Orbit running at http://localhost:3000
   ```

7. **Test it**

   - Open browser → http://localhost:3000 (if you have index.html in /public)
   - Or test API directly (Postman / curl):

     ```bash
     curl -X POST http://localhost:3000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "What is 2 + 2?"}'
     ```

## Troubleshooting

| Problem | Possible Cause | Solution |
|-------|------------------|----------|
| `Cannot find module 'express'` | Dependencies not installed | Run `npm install` again |
| `fetch failed` / `ECONNREFUSED` | Ollama not running | Run `ollama serve` in another terminal |
| `model 'gemma:2b' not found` | Model not downloaded | Run `ollama pull gemma:2b` |
| Red X on folders in File Explorer | OneDrive sync conflict / permission issue | Pause OneDrive sync → or move project outside OneDrive folder (recommended) |
| `server.js` shows red X | File corruption / bad save | Re-save the file or restore from backup |
| `node server.js` does nothing / crashes | Syntax error in server.js | Check terminal error message → most common: missing comma / wrong quote |
| API returns `"Sorry, I couldn’t respond right now."` | Ollama responded with error | Check Ollama terminal for errors (out of memory, model corrupted, etc.) |
| Very slow response | Gemma 2B on CPU / low RAM | Use smaller model or add more RAM / use GPU version of Ollama |

## Recommended Next Steps

- Add proper error handling & status codes
- Support streaming responses (Server-Sent Events)
- Add model selection via query param or body
- Create nice frontend in `/public`
- Add input validation & rate limiting
- Docker support (optional)

---

**Enjoy building with ORBIT!**  
Questions → just ask the AI 😉

Last updated: January 2026
```

Feel free to change the tone, add badges, license info, screenshots, or anything else you'd like.

Good luck with your **ORBIT - AI** project! 🚀
