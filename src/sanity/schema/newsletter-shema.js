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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      description: "Set status to 'ready-to-send' when the mail is ready to send.",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Ready to Send", value: "ready-to-send" },
          { title: "Sent", value: "sent" },
        ],
        layout: "radio", // makes it cleaner in Studio
      },
      initialValue: "draft",
    },
  ]
};

