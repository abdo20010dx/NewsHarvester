import { ApiProperty } from '@nestjs/swagger';

export class SocialSharesDto {
    @ApiProperty({
        description: 'Number of Facebook shares',
        example: 150,
        required: false
    })
    facebook?: number;

    @ApiProperty({
        description: 'Number of Twitter shares',
        example: 89,
        required: false
    })
    twitter?: number;

    @ApiProperty({
        description: 'Number of LinkedIn shares',
        example: 45,
        required: false
    })
    linkedin?: number;
}

export class ArticleMetadataDto {
    @ApiProperty({
        description: 'Open Graph title',
        example: 'Latest Technology News and Trends',
        required: false
    })
    ogTitle?: string;

    @ApiProperty({
        description: 'Open Graph description',
        example: 'Discover the latest developments in technology and innovation',
        required: false
    })
    ogDescription?: string;

    @ApiProperty({
        description: 'Open Graph image URL',
        example: 'https://example.com/og-tech-image.jpg',
        required: false
    })
    ogImage?: string;

    @ApiProperty({
        description: 'Open Graph type',
        example: 'article',
        required: false
    })
    ogType?: string;

    @ApiProperty({
        description: 'Twitter card type',
        example: 'summary_large_image',
        required: false
    })
    twitterCard?: string;

    @ApiProperty({
        description: 'Twitter title',
        example: 'Latest Technology News and Trends',
        required: false
    })
    twitterTitle?: string;

    @ApiProperty({
        description: 'Twitter description',
        example: 'Discover the latest developments in technology and innovation',
        required: false
    })
    twitterDescription?: string;

    @ApiProperty({
        description: 'Twitter image URL',
        example: 'https://example.com/twitter-tech-image.jpg',
        required: false
    })
    twitterImage?: string;
}

export class ArticleDto {
    @ApiProperty({
        description: 'Article title',
        example: 'Latest Technology News from TechCrunch'
    })
    title: string;

    @ApiProperty({
        description: 'Article image URL',
        example: 'https://example.com/tech-image.jpg',
        required: false
    })
    image?: string;

    @ApiProperty({
        description: 'Article description',
        example: 'This is a sample article about the latest developments in technology and innovation.'
    })
    description: string;

    @ApiProperty({
        description: 'Publication date',
        example: '2024-08-08T01:15:00.000Z'
    })
    pubDate: string;

    @ApiProperty({
        description: 'Full article content',
        example: 'This is the full content of the article. It contains detailed information about the latest technology trends...'
    })
    content: string;

    @ApiProperty({
        description: 'Original article URL',
        example: 'https://techcrunch.com/article/latest-tech-news'
    })
    url: string;

    @ApiProperty({
        description: 'Video URL if available',
        example: 'https://www.youtube.com/embed/sample-video',
        required: false
    })
    videoUrl?: string;

    @ApiProperty({
        description: 'Article author',
        example: 'Tech Reporter',
        required: false
    })
    author?: string;

    @ApiProperty({
        description: 'Article category',
        example: 'technology',
        required: false
    })
    category?: string;

    @ApiProperty({
        description: 'Article tags',
        example: ['technology', 'AI', 'innovation', 'tech news', 'digital transformation'],
        type: [String],
        required: false
    })
    tags?: string[];

    @ApiProperty({
        description: 'Estimated read time',
        example: '5 min read',
        required: false
    })
    readTime?: string;

    @ApiProperty({
        description: 'Word count',
        example: 250,
        required: false
    })
    wordCount?: number;

    @ApiProperty({
        description: 'Article language',
        example: 'en',
        required: false
    })
    language?: string;

    @ApiProperty({
        description: 'Canonical URL',
        example: 'https://techcrunch.com/article/latest-tech-news',
        required: false
    })
    canonicalUrl?: string;

    @ApiProperty({
        description: 'Social media share counts',
        type: SocialSharesDto,
        required: false
    })
    socialShares?: SocialSharesDto;

    @ApiProperty({
        description: 'Article metadata',
        type: ArticleMetadataDto,
        required: false
    })
    metadata?: ArticleMetadataDto;
}

export class FeedArticlesDto {
    @ApiProperty({
        description: 'Number of articles in this feed',
        example: 10
    })
    articleCount: number;

    @ApiProperty({
        description: 'Array of articles for this feed',
        type: [ArticleDto]
    })
    articles: ArticleDto[];
}

export class AggregatedNewsResponseDto {
    @ApiProperty({
        description: 'Total number of articles across all feeds',
        example: 25
    })
    totalArticles: number;

    @ApiProperty({
        description: 'Object containing feeds with their articles',
        example: {
            'techcrunch': {
                articleCount: 10,
                articles: [
                    {
                        title: 'Latest Technology News from TechCrunch',
                        image: 'https://example.com/tech-image.jpg',
                        description: 'This is a sample article about the latest developments in technology and innovation.',
                        pubDate: '2024-08-08T01:15:00.000Z',
                        content: 'This is the full content of the article...',
                        url: 'https://techcrunch.com/article/latest-tech-news',
                        videoUrl: 'https://www.youtube.com/embed/sample-video',
                        author: 'Tech Reporter',
                        category: 'technology',
                        tags: ['technology', 'AI', 'innovation'],
                        readTime: '5 min read',
                        wordCount: 250,
                        language: 'en',
                        canonicalUrl: 'https://techcrunch.com/article/latest-tech-news',
                        socialShares: {
                            facebook: 150,
                            twitter: 89,
                            linkedin: 45
                        },
                        metadata: {
                            ogTitle: 'Latest Technology News and Trends',
                            ogDescription: 'Discover the latest developments in technology and innovation',
                            ogImage: 'https://example.com/og-tech-image.jpg',
                            ogType: 'article',
                            twitterCard: 'summary_large_image',
                            twitterTitle: 'Latest Technology News and Trends',
                            twitterDescription: 'Discover the latest developments in technology and innovation',
                            twitterImage: 'https://example.com/twitter-tech-image.jpg'
                        }
                    }
                ]
            }
        }
    })
    feeds: { [feedName: string]: FeedArticlesDto };
}
