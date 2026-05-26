#!/usr/bin/env python3
"""Upload all reference assets to Stitch and record screen IDs."""

from __future__ import annotations

import json
import subprocess
import sys
from pathlib import Path

PROJECT_ID = "13841983534348291374"
STITCH_DIR = Path(__file__).resolve().parents[1]
REPO = STITCH_DIR.parent

UPLOADS = [
    ("brand_assets/hero/spaceman-grab-poster.webp", "Ref — Hero Composition Desktop"),
    ("brand_assets/hero/spaceman-grab-mobile.webp", "Ref — Hero Composition Mobile"),
    ("docs/design-token-showcase.html", "Ref — Token Showcase"),
    ("docs/homepage-wireframe-spec.html", "Ref — Wireframe Homepage"),
    ("docs/hero-prototype.html", "Ref — Hero Layer Stack"),
    ("docs/wireframes-v1/contact-wireframe-v1.html", "Ref — Wireframe Contact"),
    ("docs/wireframes-v1/work-wireframe-v1.html", "Ref — Wireframe Work"),
    ("docs/wireframes-v1/services-wireframe-v1.html", "Ref — Wireframe Services"),
    ("docs/wireframes-v1/case-study-wireframe-v1.html", "Ref — Wireframe Case Study"),
    ("docs/wireframes-v1/404-wireframe-v1.html", "Ref — Wireframe 404"),
]


def main() -> int:
    script = STITCH_DIR / "scripts" / "upload_to_stitch.py"
    results: list[dict] = []

    for rel_path, title in UPLOADS:
        file_path = REPO / rel_path
        if not file_path.exists():
            print(f"SKIP missing: {rel_path}", file=sys.stderr)
            continue
        print(f"Uploading: {title}")
        proc = subprocess.run(
            [
                sys.executable,
                str(script),
                "--project-id",
                PROJECT_ID,
                "--file-path",
                str(file_path),
                "--title",
                title,
            ],
            capture_output=True,
            text=True,
            check=False,
        )
        if proc.returncode != 0:
            print(proc.stderr, file=sys.stderr)
            results.append({"title": title, "path": rel_path, "error": proc.stderr})
            continue
        data = json.loads(proc.stdout)
        screen = data.get("screens", [{}])[0]
        instance = data.get("screenInstances", [{}])[0]
        results.append(
            {
                "title": title,
                "path": rel_path,
                "screenId": screen.get("id") or instance.get("sourceScreen", "").split("/")[-1],
                "screenName": screen.get("name"),
                "instanceId": instance.get("id"),
                "sourceScreen": instance.get("sourceScreen"),
            }
        )

    out = STITCH_DIR / "upload_references_results.json"
    out.write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(f"\nWrote {out} ({len(results)} entries)")
    return 0 if all("error" not in r for r in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
