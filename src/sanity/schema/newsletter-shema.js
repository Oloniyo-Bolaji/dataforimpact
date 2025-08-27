export default {
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    {
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      description:
        "Set status to 'ready-to-send' then Publish, email automatically gets sent to the subscribers",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Ready to Send", value: "ready-to-send" },
          { title: "Sent", value: "sent" },
        ],
        layout: "radio", 
      },
      initialValue: "draft",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
