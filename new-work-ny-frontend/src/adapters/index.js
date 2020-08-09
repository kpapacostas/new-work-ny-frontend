const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

//USERS############################################################################

export const fetchNewUser = async (data) => {
  console.log("in fetch new user", data);
  const resp = await fetch(
    "https://new-work-ny-backend.herokuapp.com/registrations",
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ data }),
    }
  );
  const json = await resp.json();
  return json;
};

export const fetchLogIn = async (data) => {
  const resp = await fetch(
    "https://new-work-ny-backend.herokuapp.com/sessions",
    {
      headers: headers,
      method: "POST",
      body: JSON.stringify({ data }),
    }
  );
  const json = await resp.json();
  return json;
};

//POSTS############################################################################

export const fetchNewPost = async (data) => {
  const resp = await fetch("https://new-work-ny-backend.herokuapp.com/posts", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({ data }),
  });
  const json = await resp.json();
  return json;
};

export const fetchPosts = async () => {
  const resp = await fetch("https://new-work-ny-backend.herokuapp.com/posts", {
    headers: headers,
    method: "GET",
  });
  const json = await resp.json();
  return json;
};
