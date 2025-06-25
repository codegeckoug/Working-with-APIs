/**
Challenge:

1. Google for "how to use fetch with json"
2. Should find a top result from MDN
3. MANUALLY copy over the fetch, but using the URL below 👇
    https://dog.ceo/api/breeds/image/random
*/

fetch(" https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Challenge 2:
/**
Challenge:

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/

fetch(" https://apis.scrimba.com/bored/api/activity")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("text").innerHTML = `${data.activity}`;
  });
/**
 * Challenge:
 *
 * Check this website for how to change the Content-Type header
 * to indicate that there's JSON in the request body.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
 *
 * Apply that header to our fetch request, send it, and check what comes back.
 */

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "Buy Milk",
    completed: false,
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
