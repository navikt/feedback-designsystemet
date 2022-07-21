export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "textfield",
      type: "string",
      title: "Textfield",
    },
    {
      name: "attachments",
      type: "file",
      title: "Attachments",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date",
    },
    {
      title: "State",
      name: "state",
      type: "reference",
      to: [{ type: "category" }],
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "name",
    },
  },
};
