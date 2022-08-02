import { type } from "os";
import { client } from "../sanity/sanity";

const toggleVote = (id) =>
  fetch(`/api/toggleVote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });

export default toggleVote;

// Adds a `_key` attribute to array items, unique within the array, to
// ensure it can be addressed uniquely in a real-time collaboration context
