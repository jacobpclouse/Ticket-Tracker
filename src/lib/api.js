const FIREBASE_DOMAIN =
  "https://ticket-tracker-by-paradus-hex-default-rtdb.asia-southeast1.firebasedatabase.app";

export async function getAllTickets() {
  const response = await fetch(`${FIREBASE_DOMAIN}/tickets.json`);
  const data = await response.json();
  console.log(response, "here");
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch tickets.");
  }

  const transformedTickets = [];

  for (const key in data) {
    const ticketObj = {
      id: key,
      ...data[key],
    };

    transformedTickets.push(ticketObj);
  }

  return transformedTickets;
}

export async function getSingleTicket(ticketID) {
  const response = await fetch(`${FIREBASE_DOMAIN}/tickets/${ticketID}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch ticket.");
  }

  const loadedTicket = {
    id: ticketID,
    ...data,
  };

  return loadedTicket;
}

export async function addTicket(ticketData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/tickets.json`, {
    method: "POST",
    body: JSON.stringify(ticketData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create ticket.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.ticketID}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(ticketID) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${ticketID}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
