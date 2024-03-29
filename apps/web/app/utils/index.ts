import type { Page } from '@khulnasoft/cms';

export const findPageBySlug = (slug: string, pages: Page[]) => {
    return pages?.find((page) => page.slug === slug);
};
