export interface BlogpostSingleProps {
    content: {
        pageSettings: {
            title: string,
            description: string,
            keywords: string,
        },
        articleImageUrl: string,
        categoryName: string,
        title: string,
        authorName: string,
        authorRole: string,
        authorImageUrl: string,
        postedOn: string,
        readingTime: string,
        articleIntro: string,
        postContent: string,
    };
}

export interface CallToActionProps {}
