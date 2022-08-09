export default {
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => [
        Rule.required().error("Det må settes en tittel."),
        Rule.max(30).warning("Hold tittelen kort og konsis."),
      ],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) =>
        Rule.required().error(
          "Det må settes en slug. Du kan bruke Generate knappen."
        ),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "shortdescription",
      type: "string",
      title: "Kort beskrivelse",
      validation: (Rule) => [
        Rule.required().error("Det må settes en kort beskrivelse."),
        Rule.max(200).warning(
          "Prøv å hold beskrivelsen kort, men gi nok informasjon til at brukerne fortstår hva kortet omhandler."
        ),
      ],
    },
    {
      name: "description",
      type: "array",
      title: "Beskrivelse",
      of: [{ type: "block" }],
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .warning("Her bør det gis en utdypende beskrivelse."),
    },
    {
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        {
          name: "image",
          type: "image",
          title: "Bilde",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternativ tekst",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "figma",
      type: "string",
      title: "Embedded Figma link",
      validation: (Rule) => Rule.required().warning("Her er det viktig å BARE ha med embed-linken, ikke hele embed-koden."),
    },
    {
      name: "date",
      type: "datetime",
      title: "Dato",
      options: {
        dateFormat: "DD-MM-YYYY",
      },
    },
    {
      name: "status",
      type: "reference",
      title: "Status",
      to: [{ type: "status" }],
      validation: (Rule) => Rule.required().error("Det må settes en status."),
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "reference", to: { type: "tag" } }],
      validation: (Rule) =>
        Rule.required().warning("Det bør velges minst en tag."),
    },
    {
      name: "votes",
      type: "array",
      title: "Stemmer",
      of: [{ type: "string" }],
    },
  ],
  initialValue: {
    date: new Date().toISOString(),
  },
  preview: {
    select: {
      title: "title",
      subtitle: "name",
    },
  },
};
