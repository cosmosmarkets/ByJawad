#!/usr/bin/env python3
"""Upload an image, HTML, or markdown file to a Stitch project."""

from __future__ import annotations

import argparse
import base64
import json
import pathlib
import sys
import urllib.error
import urllib.request
from typing import Any

_MIME_TYPES = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".html": "text/html",
    ".htm": "text/html",
    ".md": "text/markdown",
}


def load_api_key() -> str:
    mcp_path = pathlib.Path.home() / ".cursor" / "mcp.json"
    return json.loads(mcp_path.read_text(encoding="utf-8"))["mcpServers"]["stitch"][
        "headers"
    ]["X-Goog-Api-Key"]


def call_batch_create_screens(
    api_url: str,
    api_key: str,
    project_id: str,
    requests: list[dict[str, Any]],
) -> dict[str, Any]:
    url = f"{api_url.rstrip('/')}/v1/projects/{project_id}/screens:batchCreate"
    payload = {
        "parent": f"projects/{project_id}",
        "requests": requests,
        "createScreenInstances": True,
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            "Content-Type": "application/json",
            "X-Goog-Api-Key": api_key,
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body) if body else {}
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}", file=sys.stderr)
        print(e.read().decode("utf-8"), file=sys.stderr)
        raise


def build_screen_request(
    mime_type: str, b64_data: str, title: str | None = None
) -> dict[str, Any]:
    file_obj = {"fileContentBase64": b64_data, "mimeType": mime_type}
    if mime_type in ("text/html", "text/markdown"):
        screen: dict[str, Any] = {
            "htmlCode": file_obj,
            "screenType": "DOCUMENT",
            "isCreatedByClient": True,
        }
    else:
        screen = {
            "screenshot": file_obj,
            "screenType": "IMAGE",
            "isCreatedByClient": True,
        }
    if title:
        screen["title"] = title
    return {"screen": screen}


def main() -> int:
    parser = argparse.ArgumentParser(description="Upload a file to Stitch")
    parser.add_argument("--project-id", required=True)
    parser.add_argument("--file-path", required=True, type=pathlib.Path)
    parser.add_argument("--title", default=None)
    parser.add_argument(
        "--api-url", default="https://stitch.googleapis.com", help="Stitch API base URL"
    )
    args = parser.parse_args()

    suffix = args.file_path.suffix.lower()
    mime_type = _MIME_TYPES.get(suffix)
    if not mime_type:
        print(f"Unsupported type: {suffix}", file=sys.stderr)
        return 1
    if not args.file_path.exists():
        print(f"File not found: {args.file_path}", file=sys.stderr)
        return 1

    api_key = load_api_key()
    b64_data = base64.b64encode(args.file_path.read_bytes()).decode("utf-8")
    screen_request = build_screen_request(mime_type, b64_data, title=args.title)
    result = call_batch_create_screens(
        args.api_url, api_key, args.project_id, [screen_request]
    )
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
