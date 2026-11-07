import { NextResponse } from "next/server";
import { MAIN_REPOSITORY } from "@/data/resources";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = `https://api.github.com/repos/${MAIN_REPOSITORY.owner}/${MAIN_REPOSITORY.repo}`;
    const res = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "EveryThingForClaudeCode-Library",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          stars: 2,
          forks: 0,
          openIssues: 0,
          error: false,
          fallback: true,
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      stars: typeof data.stargazers_count === "number" ? data.stargazers_count : 2,
      forks: typeof data.forks_count === "number" ? data.forks_count : 0,
      openIssues: typeof data.open_issues_count === "number" ? data.open_issues_count : 0,
      error: false,
    });
  } catch {
    return NextResponse.json(
      {
        stars: 2,
        forks: 0,
        openIssues: 0,
        error: false,
        fallback: true,
      },
      { status: 200 }
    );
  }
}
