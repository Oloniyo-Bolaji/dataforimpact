export const getArticles = `*[_type == "articles"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  coverImage,
  content,
  author->{
    name,
    profilePicture
  }
}`;
