export default {
    name: "state",
    title: "State",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: Rule => Rule.required().warning('En tag må ha en tittle.')
      },
    ],
  };