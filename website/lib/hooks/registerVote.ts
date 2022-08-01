import { client } from "../sanity/sanity";

const registerVote = async (id: string, ident: string) => {
  client
    .patch(id)
    // Ensure that the `reviews` arrays exists before attempting to add items to it
    .setIfMissing({ votes: [] })
    // Add the items after the last item in the array (append)
    .insert("after", "votes[-1]", [ident])
    .commit();
};

export default registerVote;

// Adds a `_key` attribute to array items, unique within the array, to
// ensure it can be addressed uniquely in a real-time collaboration context
