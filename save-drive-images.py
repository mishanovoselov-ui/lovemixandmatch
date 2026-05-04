#!/usr/bin/env python3
"""
Decode Google Drive images downloaded by Claude and save them to the site.
Run once from Terminal:  python3 save-drive-images.py
"""
import json, base64, os

ROOT = os.path.dirname(os.path.abspath(__file__))

TOOL_RESULTS = (
    "/var/folders/7_/rb3rpf0j2yqg73q03kxc9str0000gq/T/claude-hostloop-plugins"
    "/fb9757f64453857f/projects"
    "/-Users-michael-Library-Application-Support-Claude-local-agent-mode-sessions"
    "-6132f591-2271-4fd1-a08b-0277820a5c44-f5983cf3-e45f-434f-8b30-b927ad774e8a"
    "-local-5e32ead8-25e4-46d7-b307-cc781469f23d-outputs"
    "/1076ad3f-146b-4428-89ba-93b9f5ebe1a0/tool-results"
)

FILES = [
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898427017.txt",
     "public/images/love-logo.png"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898431969.txt",
     "public/images/promo/book-01.jpg"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898437534.txt",
     "public/images/promo/book-02.jpg"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898442336.txt",
     "public/images/promo/book-03.jpg"),
]

for src_name, dest_rel in FILES:
    src = os.path.join(TOOL_RESULTS, src_name)
    dest = os.path.join(ROOT, dest_rel)
    if not os.path.exists(src):
        print(f"⚠️  Not found (may have expired): {src_name}")
        continue
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(src) as f:
        data = json.load(f)
    decoded = base64.b64decode(data["content"])
    with open(dest, "wb") as f:
        f.write(decoded)
    print(f"✅  {dest_rel}  ({len(decoded):,} bytes)")

print("\nDone. Now run:  git add -A && git commit -m 'add logo + promo photos' && git push")
