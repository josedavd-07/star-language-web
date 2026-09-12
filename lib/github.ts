export const MOON_TECHNOLOGIES = "https://github.com/Moon-TechnologiesCO";
export const STAR_REPOSITORY = `${MOON_TECHNOLOGIES}/StarLang`;
export const STAR_RELEASES = `${STAR_REPOSITORY}/releases`;
export const STARPACKAGES_REPOSITORY = `${MOON_TECHNOLOGIES}/StarPackages`;
export const STARSTUDIO_REPOSITORY = `${MOON_TECHNOLOGIES}/StarStudio`;
export const STAR_MARKETPLACE = "https://marketplace.visualstudio.com/items?itemName=JoseDavidCarranzaAngarita.star-language";

export type SupportedOS = 'linux' | 'windows' | 'macos';

export const STAR_DOWNLOADS: Record<SupportedOS, { fileName: string; url: string }> = {
    linux: {
        fileName: 'star-language_1.1.0_amd64.deb',
        url: 'https://github.com/Moon-TechnologiesCO/StarLang/releases/download/v1.1.0/star-language_1.1.0_amd64.deb',
    },
    windows: {
        fileName: 'star-language-v1.1.0-win-x64.zip',
        url: 'https://github.com/Moon-TechnologiesCO/StarLang/releases/download/v1.1.0/star-language-v1.1.0-win-x64.zip',
    },
    macos: {
        fileName: 'star-language-v1.1.0-osx-arm64.zip',
        url: 'https://github.com/Moon-TechnologiesCO/StarLang/releases/download/v1.1.0/star-language-v1.1.0-osx-arm64.zip',
    },
};

export interface GitHubStats {
    stars: number;
    version: string;
}

interface RepositoryResponse {
    stargazers_count?: number;
}

interface ReleaseResponse {
    tag_name?: string;
}

export async function getStarStats(): Promise<GitHubStats> {
    try {
        const [repositoryResponse, releaseResponse] = await Promise.all([
            fetch("https://api.github.com/repos/Moon-TechnologiesCO/StarLang", { next: { revalidate: 3600 } }),
            fetch("https://api.github.com/repos/Moon-TechnologiesCO/StarLang/releases/latest", { next: { revalidate: 3600 } }),
        ]);
        const repository = repositoryResponse.ok ? (await repositoryResponse.json()) as RepositoryResponse : {};
        const release = releaseResponse.ok ? (await releaseResponse.json()) as ReleaseResponse : {};

        return { stars: repository.stargazers_count ?? 0, version: release.tag_name ?? "1.1.0" };
    } catch {
        return { stars: 0, version: "1.1.0" };
    }
}
