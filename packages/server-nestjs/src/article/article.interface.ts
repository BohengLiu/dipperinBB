import { UserData } from '../user/user.interface';
import { ArticleEntity } from './article.entity';
interface Comment {
  body: string;
}

export interface ArticleData {
  id: number
  slug: string;
  title: string;
  description: string;
  content?: string;
  tagList?: string[];
  createdAt?: Date
  updatedAt?: Date
  favorited?: boolean;
  favoritesCount?: number;
  author?: UserData;
}

export interface CommentsRO {
  comments: Comment[];
}

export interface ArticleRO {
  article: ArticleEntity;
}

export interface ArticlesRO {
  articles: ArticleEntity[];
  articlesCount: number;
}

