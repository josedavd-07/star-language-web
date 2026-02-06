export interface GitHubStats {
    stars: number;
    version: string;
}

export async function getStarStats(): Promise<GitHubStats> {
    const repo = "josedavd-07/Star";

    try {
        // Fetch repo data for stars
        const repoRes = await fetch(`https://api.github.com/repos/${repo}`, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        const repoData = await repoRes.json();

        // Fetch latest release for version
        const releaseRes = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
            next: { revalidate: 3600 }
        });
        const releaseData = await releaseRes.json();

        return {
            stars: repoData.stargazers_count || 0,
            version: releaseData.tag_name || "v1.0.0"
        };
    } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        return {
            stars: 0,
            version: "v1.0.0"
        };
    }
}
export interface Release {
    tag_name: string;
    name: string;
    published_at: string;
    body: string;
    assets: {
        name: string;
        browser_download_url: string;
        size: number;
    }[];
}

export async function getReleaseHistory(): Promise<Release[]> {
    const repo = "josedavd-07/Star";
    try {
        const res = await fetch(`https://api.github.com/repos/${repo}/releases`, {
            next: { revalidate: 3600 }
        });
        const data = await res.json();
        return data as Release[];
    } catch (error) {
        console.error("Error fetching release history:", error);
        return [];
    }
}
