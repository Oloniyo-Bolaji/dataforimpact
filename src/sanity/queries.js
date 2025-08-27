export const getArticles = `*[_type == "articles"] | order(_createdAt desc){
  _id,
  title,
  "slug": slug.current,
  coverImage,
  content,
  mentor->{
    name,
    profilePicture
  },
  _createdAt,
  _updatedAt
}`;

export const getArticle = `*[_type == "articles" && slug.current == $slug][0]{
_id,
  title,
  "slug": slug.current,
  coverImage,
  content,
  mentor->{
    name,
    profilePicture
  },
  _createdAt,
  _updatedAt
}`;

export const getGraduates = `*[_type == "graduates"]{
  _id,
  name,
  slug,
  picture,
  location,
}`;
export const getMentors = `*[_type == "mentor"] | order(order asc) {
  _id,
  name,
  slug,
  position,
  profilePicture,
  linkedIn
}`;

export const getLatestReadyNewsletter = `*[_type == "newsletter" && status == "ready-to-send"] | order(_createdAt desc)[0]{
    subject, 
    content
  }`;
