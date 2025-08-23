export const getArticles = `*[_type == "articles"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  coverImage,
  content,
  author->{
    name,
    profilePicture
  }
}`;

export const getArticle = `*[_type == "articles" && slug.current == $slug][0]{
_id,
  title,
  "slug": slug.current,
  publishedAt,
  coverImage,
  content,
  author->{
    name,
    profilePicture
  }
}`;

export const getGraduates = `*[_type == "graduates"]{
  _id,
  name,
  slug,
  picture,
}`;
