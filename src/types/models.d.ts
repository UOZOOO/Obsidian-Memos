declare namespace Model {
  interface BaseModel {
    id: string;
    createdAt: string;
    updatedAt: string;
  }

  interface User extends BaseModel {
    username: string;
    githubName: string;
  }

  interface Memo extends BaseModel {
    content: string;
    deletedAt: string;
    memoType?: string;
  }

  interface Query extends BaseModel {
    title: string;
    querystring: string;
    pinnedAt: string;
  }

  interface Resource {
    id: string;
    filename: string;
    type: string;
    size: string;
    createdAt: string;
  }
}
