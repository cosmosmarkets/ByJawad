#!/usr/bin/env python3
"""Update Stitch design system with full DESIGN.md content."""

from __future__ import annotations

import json
import sys
from pathlib import Path

import urllib.request

MCP_URL = "https://stitch.googleapis.com/mcp"
PROJECT_ID = "13841983534348291374"
ASSET_ID = "0d798752ae524c658bcc9c4c86dfba67"


def load_api_key() -> str:
    mcp_path = Path.home() / ".cursor" / "mcp.json"
    return json.loads(mcp_path.read_text(encoding="utf-8"))["mcpServers"]["stitch"][
        "headers"
    ]["X-Goog-Api-Key"]


def mcp_call(tool: str, arguments: dict, api_key: str) -> dict:
    payload = {
        "jsonrpc": "2.0",
        "id": "sync-design-system",
        "method": "tools/call",
        "params": {"name": tool, "arguments": arguments},
    }
    req = urllib.request.Request(
        MCP_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "X-Goog-Api-Key": api_key,
            "Content-Type": "application/json",
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        return json.loads(resp.read().decode("utf-8"))


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    design_md = (root / "DESIGN.md").read_text(encoding="utf-8")
    api_key = load_api_key()

    arguments = {
        "name": f"assets/{ASSET_ID}",
        "projectId": PROJECT_ID,
        "designSystem": {
            "displayName": "By Jawad — Mission Control Monochrome",
            "theme": {
                "colorMode": "DARK",
                "headlineFont": "SPACE_GROTESK",
                "bodyFont": "INTER",
                "labelFont": "JETBRAINS_MONO",
                "roundness": "ROUND_EIGHT",
                "customColor": "#fafafa",
                "colorVariant": "FIDELITY",
                "overridePrimaryColor": "#fafafa",
                "overrideSecondaryColor": "#a3a3a3",
                "overrideTertiaryColor": "#737373",
                "overrideNeutralColor": "#000000",
                "designMd": design_md,
            },
        },
    }

    result = mcp_call("update_design_system", arguments, api_key)
    out_path = root / "sync_update_design_system.json"
    out_path.write_text(json.dumps(result, indent=2), encoding="utf-8")

    if result.get("result", {}).get("isError"):
        print(result["result"]["content"][0]["text"], file=sys.stderr)
        return 1

    print("Design system updated:", f"assets/{ASSET_ID}")
    verify = mcp_call(
        "list_design_systems", {"projectId": PROJECT_ID}, api_key
    )
    text = verify.get("result", {}).get("content", [{}])[0].get("text", "")
    checks = [
        ("Per-page generation briefs", "Per-page generation briefs" in text),
        ("Anti-patterns", "Anti-patterns" in text),
        ("projectId frontmatter", "13841983534348291374" in text),
    ]
    for label, ok in checks:
        print(f"  verify {label}: {'OK' if ok else 'MISSING'}")

    return 0 if all(ok for _, ok in checks) else 1


if __name__ == "__main__":
    raise SystemExit(main())
