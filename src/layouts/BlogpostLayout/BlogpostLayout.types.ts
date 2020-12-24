/* eslint-disable camelcase */
// TODO: change message variables to be camelCase
export interface BlogpostSingleProps {
    content: {
        pageSettings: {
            title: string;
            description: string;
            keywords: string;
        };
        id: number;
        title: string;
        posted_on: number;
        article_image_url: string;
        author_name: string;
        author_role: string;
        author_image_url: string;
        category_name: string;
        category_slug: string;
        reading_time: string;
        article_intro: string;
        post_content: string;
    };
}

export interface CallToActionProps {}
