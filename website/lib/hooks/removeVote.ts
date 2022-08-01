import { client } from "../sanity/sanity";

const removeVote = async (id: string, index: number) => {
  client
    .patch(id)
    // Ensure that the `reviews` arrays exists before attempting to add items to it
    // Add the items after the last item in the array (append)
    .insert("replace", "votes[" + index + "]", [])
    .commit();
};

export default removeVote;

// Adds a `_key` attribute to array items, unique within the array, to
// ensure it can be addressed uniquely in a real-time collaboration context
