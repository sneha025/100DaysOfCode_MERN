const getGlobal = (Google) => {
  return Promise((resolve, reject) => {
    if ((Google = "Google")) {
      resolve("we got Google");
    } else {
      reject("we got error");
    }
  });
};

const doWork = async (message) => {
  message = "Google";
  const result = await getGlobal(message);
  console.log("recived result", result);
};

