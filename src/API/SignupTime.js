export const getSignupTime = async () => {
  try {
    let requestURL = "http://worldtimeapi.org/api/timezone/Asia/Taipei";
    const res = await fetch(requestURL);
    const dateTime = await res.json();

    return dateTime.datetime;
  } catch (e) {
    alert("GET Error!!" + e);
    return e;
  }
};
