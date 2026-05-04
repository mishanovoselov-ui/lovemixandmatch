#!/usr/bin/env python3
"""
Decode Google Drive images downloaded by Claude and save them to the site.
Run once from Terminal:  python3 save-drive-images.py

After running, preview images appear in public/images/preview/
Tell Claude which ones to use where, then it will update content.ts.
"""
import json, base64, os, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))

TOOL_RESULTS = (
    "/var/folders/7_/rb3rpf0j2yqg73q03kxc9str0000gq/T/claude-hostloop-plugins"
    "/5308c793596b0394/projects"
    "/-Users-michael-Library-Application-Support-Claude-local-agent-mode-sessions"
    "-6132f591-2271-4fd1-a08b-0277820a5c44-f5983cf3-e45f-434f-8b30-b927ad774e8a"
    "-local-e8897dee-69d7-4929-a7ed-33c43ff25ce5-outputs"
    "/2c2075ec-221b-40e6-877b-68dd2b9a31ab/tool-results"
)

# ── Previously saved ──────────────────────────────────────────────────────
PREV_TOOL_RESULTS = (
    "/var/folders/7_/rb3rpf0j2yqg73q03kxc9str0000gq/T/claude-hostloop-plugins"
    "/fb9757f64453857f/projects"
    "/-Users-michael-Library-Application-Support-Claude-local-agent-mode-sessions"
    "-6132f591-2271-4fd1-a08b-0277820a5c44-f5983cf3-e45f-434f-8b30-b927ad774e8a"
    "-local-5e32ead8-25e4-46d7-b307-cc781469f23d-outputs"
    "/1076ad3f-146b-4428-89ba-93b9f5ebe1a0/tool-results"
)

PREV_FILES = [
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898427017.txt",
     "public/images/love-logo.png"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898431969.txt",
     "public/images/promo/book-01.jpg"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898437534.txt",
     "public/images/promo/book-02.jpg"),
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777898442336.txt",
     "public/images/promo/book-03.jpg"),
]

# ── New book photos (batch 2026-05-04) ────────────────────────────────────
# All from Promo materials/photo/ in Drive project folder
NEW_FILES = [
    # filename in tool-results → preview filename → original Drive name
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777904739126.txt",
     "public/images/preview/DSCF0832-02-04-22.jpg"),   # 669KB
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777904743824.txt",
     "public/images/preview/DSCF0844-02-04-22.jpg"),   # 502KB
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777904749731.txt",
     "public/images/preview/DSCF0843-02-04-22.jpg"),   # 573KB
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777904754367.txt",
     "public/images/preview/DSCF0806-02-04-22.jpg"),   # 363KB
    ("mcp-e7a1c90c-e61c-4144-a1f1-6e8edce309a1-download_file_content-1777904759103.txt",
     "public/images/preview/DSCF0848-02-04-22.jpg"),   # 556KB
]


def decode(tool_dir, src_name, dest_rel):
    src = os.path.join(tool_dir, src_name)
    if not os.path.exists(src):
        print(f"  ⚠️  expired/not found: {src_name}")
        return False
    dest = os.path.join(ROOT, dest_rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(src) as f:
        data = json.load(f)
    decoded = base64.b64decode(data["content"])
    with open(dest, "wb") as f:
        f.write(decoded)
    print(f"  ✅ {dest_rel}  ({len(decoded):,} bytes)")
    return True


print("\n── Previously saved assets ──────────────────────────")
for src, dest in PREV_FILES:
    decode(PREV_TOOL_RESULTS, src, dest)

print("\n── New book photos → preview folder ─────────────────")
for src, dest in NEW_FILES:
    decode(TOOL_RESULTS, src, dest)

print("""
Done!

Preview photos saved to public/images/preview/
Open that folder in Finder and tell Claude:
  • Which 3 photos to use for promo (about section)
  • Which photos to use for the mitate gallery grid

Then Claude will update content.ts and copy files to the right paths.
""")
