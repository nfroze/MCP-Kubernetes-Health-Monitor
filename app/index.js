const express = require('express');
const app = express(); // nosemgrep
const PORT = process.env.PORT || 3000;

const POD_NAME = process.env.HOSTNAME || 'local-dev';

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Project 12: MCP Meets K8s</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0f172a;
          color: #e2e8f0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          background: #1e293b;
          border: 1px solid #334155;
          border-radius: 16px;
          padding: 96px 128px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
          text-align: center;
        }
        .status-indicator {
          display: inline-block;
          width: 16px;
          height: 16px;
          background: #22c55e;
          border-radius: 50%;
          margin-right: 10px;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        h1 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: #f8fafc;
        }
        .info {
          color: #94a3b8;
          font-size: 1.25rem;
        }
        .pod {
          font-family: monospace;
          background: #0f172a;
          padding: 12px 24px;
          border-radius: 8px;
          display: inline-block;
          margin-top: 24px;
          font-size: 1.1rem;
          color: #38bdf8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1><span class="status-indicator"></span>Project 12: MCP Meets K8s</h1>
        <p class="info">Running on EKS</p>
        <div class="pod">${POD_NAME}</div>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    pod: POD_NAME
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});