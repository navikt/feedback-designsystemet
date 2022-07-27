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
      validation: Rule => [
        Rule.required().error("Det må settes en tittel."),
        Rule.max(30).warning("Hold tittelen kort og konsis."),
      ]
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: Rule => Rule.required().error("Det må settes en slug. Du kan bruke Generate knappen."),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "shortdescription",
      type: "string",
      title: "Short description",
      validation: Rule => [
        Rule.required().error('Det må settes en kort beskrivelse.'),
        Rule.min(50).warning("Prøv å hold beskrivelsen kort, men gi nok informasjon til at brukerne fortstår hva kortet omhandler.")
      ]
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      of: [{type: "block"}],
      validation: Rule => Rule.required().min(50).warning('Her bør det gis en utdypende beskrivelse.')
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alternative text",
          },
        ],
      },
      ],
      options: {
        layout: "grid",
      }
      
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
      name: "state",
      type: "reference",
      title: "State",
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
