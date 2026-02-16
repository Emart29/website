import Parser from "rss-parser";

const parser = new Parser();

export interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    categories?: string[];
}

export async function getMediumPosts(username: string): Promise<BlogPost[]> {
    try {
        const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
        return feed.items.map(item => ({
            title: item.title || "Untitled",
            link: item.link || "",
            pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
            }) : "",
            categories: item.categories as string[] || []
        })).slice(0, 5);
    } catch (error) {
        console.error("Error fetching Medium RSS:", error);
        return [];
    }
}
