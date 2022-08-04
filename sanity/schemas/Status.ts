export default {
    name: "status",
    title: "Status",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: Rule => Rule.required().warning('En status må ha en tittel.')
      },
    ],
  };