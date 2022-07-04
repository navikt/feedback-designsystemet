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
  ],
};
