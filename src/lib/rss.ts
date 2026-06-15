import Parser from "rss-parser";

const parser = new Parser();

export interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    rawDate: string;
    categories?: string[];
    publication: string;
}

function formatDate(raw: string): string {
    return new Date(raw).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

function getPublication(link: string): string {
    try {
        const url = new URL(link);
        const host = url.hostname;
        if (host.includes("towardsai.net")) return "Towards AI";
        if (host.includes("datadriveninvestor")) return "DataDriveninvestor";
        if (host === "python.plainenglish.io") return "Python in Plain English";
        if (host === "ai.plainenglish.io") return "AI in Plain English";
        const segment = url.pathname.split("/").find(p => p && !p.startsWith("@")) ?? "";
        const known: Record<string, string> = {
            nextgenllm: "NextGenAI",
            "towards-data-science": "Towards Data Science",
        };
        return known[segment] ?? "Medium";
    } catch {
        return "Medium";
    }
}

async function fetchFeed(url: string): Promise<BlogPost[]> {
    const feed = await parser.parseURL(url);
    return feed.items.map(item => ({
        title: item.title || "Untitled",
        link: item.link || "",
        rawDate: item.pubDate || "",
        pubDate: item.pubDate ? formatDate(item.pubDate) : "",
        categories: (item.categories as string[]) || [],
        publication: getPublication(item.link || ""),
    }));
}

export async function getMediumPosts(_username: string): Promise<BlogPost[]> {
    const mediumUrl = `https://medium.com/feed/@${_username}`;
    const towardsAiUrl = `https://pub.towardsai.net/feed/@${_username}`;

    try {
        const [mediumResult, taiResult] = await Promise.allSettled([
            fetchFeed(mediumUrl),
            fetchFeed(towardsAiUrl),
        ]);

        const medium = mediumResult.status === "fulfilled" ? mediumResult.value : [];
        const tai = taiResult.status === "fulfilled" ? taiResult.value : [];

        const seen = new Set<string>();
        const merged: BlogPost[] = [];
        for (const post of [...medium, ...tai]) {
            if (!seen.has(post.title)) {
                seen.add(post.title);
                merged.push(post);
            }
        }
        merged.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());
        return merged.slice(0, 6);
    } catch (error) {
        console.error("Error fetching RSS feeds:", error);
        return [];
    }
}
