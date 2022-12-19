// Типы одного Post
export interface IPost {
    id: number,
    image?: string,
    title?: string,
    date?: string,
    author?: number,
    text?: string,
}

// Типы postsReducer
export interface IPostsStore {
    posts: IPost[],
    favorites: number[],
    countTotal: number,
    searchValue: string,
    loading: boolean,
    likePosts: number[],
    dislikePosts: number[],
    activePost: number,
}

// Типы settingsReducer
export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
}

// Типы userReducer
export interface IUser {
    username?: string,
    email: string,
    password: string,
    id?: number,
    user?: any,
}
// Тип всего Store (state)
export interface IStore {
    posts: IPostsStore,
    settings: ISettingsStore,
    user: IUser,
}

export interface JWTResponce {
    access: string,
    refresh: string,
}