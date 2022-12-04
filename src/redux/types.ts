// Типы одного Post
export interface IPost {
    id: number,
    image?: string,
    title?: string,
    date?: string,
    author?: number,
    text?: string,
    likes?: boolean,
    dislikes?: boolean,
}

// Типы postsReducer
export interface IPostsStore {
    posts: IPost[],
    favorites: number[],
}

// Типы settingsReducer
export interface ISettingsStore {
    activeTab: string,
}

// Тип всего Store (state)
export interface IStore {
    posts: IPostsStore,
    settings: ISettingsStore,
}