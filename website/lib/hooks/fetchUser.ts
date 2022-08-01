const fetchUser = () => {
  const user = fetch(`/api/auth`).then(async (res) => {
    const json = await res.json();
    if (json?.status === 200) {
      return json;
    } else {
      return {
        status: 200,
        name: "Lokalesen, Lokal",
        mail: "lokal@nav.no",
        ident: "H12456",
      };
    }
  });
  return user;
};

export default fetchUser;
