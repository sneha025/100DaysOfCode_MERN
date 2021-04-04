const getGlobal = (Google) => {
  return Promise((resolve, reject) => {
    if (Google) {
      resolve("we got Google");
    } else {
      reject("we got error");
    }
  });
};

const doWork = async () => {
  const result = await getGlobal(Google);
  console.log("recived result", result);
};
