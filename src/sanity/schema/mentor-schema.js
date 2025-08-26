export default {
  name: "mentor",
  title: "Mentor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Set a number to control project display order (lower = higher priority)",
    },
    {
      name: "profilePicture",
      title: "Profile Picture",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "url",
    },
  ],
};
