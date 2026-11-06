import { NextResponse } from "next/server";
import { MAIN_REPOSITORY } from "@/data/resources";

export async function GET() {
  try {
    const url = `https://api.github.com/repos/${MAIN_REPOSITORY.owner}/${MAIN_REPOSITORY.repo}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "EveryThingForClaudeCode-Library",
      },
      next: { revalidate: 3600 }, // 1 soatlik server-side caching
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          stars: null,
          forks: null,
          openIssues: null,
          error: true,
          status: res.status,
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      stars: typeof data.stargazers_count === "number" ? data.stargazers_count : null,
      forks: typeof data.forks_count === "number" ? data.forks_count : null,
      openIssues: typeof data.open_issues_count === "number" ? data.open_issues_count : null,
      error: false,
    });
  } catch {
    return NextResponse.json(
      {
        stars: null,
        forks: null,
        openIssues: null,
        error: true,
      },
      { status: 200 }
    );
  }
}
