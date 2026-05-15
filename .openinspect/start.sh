#!/bin/bash
HOST=0.0.0.0 PORT=3000 nohup npm run dev > /tmp/dev-server.log 2>&1 &
DEV_PID=$!
for i in $(seq 1 30); do
  if curl -sf http://localhost:3000/ >/dev/null 2>&1; then
    echo "dev server ready on port 3000 (pid=$DEV_PID)"
    exit 0
  fi
  sleep 1
done
echo "dev server did not respond within 30s — see /tmp/dev-server.log"
exit 0
