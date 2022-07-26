import State from "./State";

export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: Rule => Rule.required().error("Det må settes en tittel.")
    },{
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{type: "block"}],
      validation: Rule => Rule.required().min(50).warning('Prøv å beskriv innholdet på kortet grunndigere.')
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
      options: {
        dateFormat: 'DD-MM-YYYY',
      }
    },
    {
      title: "State",
      name: "state",
      type: "reference",
      to: [{ type: "state" }],
      validation: Rule => Rule.required().error("Det må settes en State.")
     },
      {
        title: "Tags",
        name: "tags",
        type: "array",
        of: [{ type: "reference", to: { type: "tag" } }],
        validation: Rule => Rule.required().warning("Det bør velges minst en tag.")
      },
    

  ],
  initialValue: {
    date: (new Date()).toISOString()
  },
  preview: {
    select: {
      title: "title",
      subtitle: "name",
    },
  },
};
