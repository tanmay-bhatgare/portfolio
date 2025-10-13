import base64
import json
import os
from pathlib import Path
from typing import Any
from dotenv import load_dotenv
import requests

load_dotenv()


PAT_TOKEN = os.getenv("GH_PAT")
if not PAT_TOKEN:
    raise SystemExit("set GH_PAT env first")

HEADERS = {
    "Authorization": f"token {PAT_TOKEN}",
    "Accept": "application/vnd.github.v3+json",
}
# current dir is automation/, so ..
OUTPUT_DIR = Path(__file__).parent.parent / "public"


def ensure_file(path: Path) -> Path:
    """Ensure the file and its parent directories exist."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.touch(exist_ok=True)
    return path


def list_repos(username: str | None = None):
    """a simple function to fetch and list all public repos.

    Args:
        username (str | None, optional): a github username to check his/her repos. Defaults to None.
    """

    if username:
        url = f"https://api.github.com/users/{username}/repos"
    else:
        url = "https://api.github.com/user/repos"
    repos = []
    params = {"per_page": 100, "page": 1}
    while True:
        resp = requests.get(url, headers=HEADERS, params=params, timeout=15)
        resp.raise_for_status()

        page = resp.json()
        if not page:
            break

        repos.extend(page)
        params["page"] += 1
        return repos


def get_file_content(owner: str, repo: str, path: str = ".portfolio", ref="main"):
    """
    uses the GH Contents API which returns base64 content when file exists.
    """
    url = f"https://api.github.com/repos/{owner}/{repo}/contents/{path}"
    params = {"ref": ref}

    resp = requests.get(url, headers=HEADERS, params=params, timeout=15)
    if resp.status_code == 404:
        return None

    resp.raise_for_status()
    data: dict[Any, Any] = resp.json()

    if data.get("encoding") == "base64":
        content = base64.b64decode(data["content"]).decode("utf-8")
        return content

    return data.get("content")


if __name__ == "__main__":
    repos = list_repos()
    print(f"Found {len(repos)} repos (sample):", [r["full_name"] for r in repos[:10]])

    combined_json = []
    for repo in repos:
        owner, repo_name = repo["owner"]["login"], repo["name"]
        content = get_file_content(owner, repo_name)

        if content:
            print(f"Found .portfolio in {repo['full_name']}")
            # Attempt to parse as JSON
            try:
                parsed = json.loads(content)
                print("Parsed JSON:", parsed)
                combined_json.append(parsed)
            except Exception:
                print("Raw content (not JSON):\n", content[:400])
        else:
            print(f".portfolio not found in {repo['full_name']}")

    output_file = OUTPUT_DIR / "portfolio.json"
    ensure_file(output_file)

    with output_file.open("w", encoding="utf-8") as f:
        json.dump(combined_json, f, indent=2)
    print(f"Saved JSON to {output_file}")
