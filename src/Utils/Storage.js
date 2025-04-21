export const getAppoinment = () => {
  const favourites = localStorage.getItem("appoinments");
  if (favourites) return JSON.parse(favourites);
  return [];
};

export const addAppoinment = (doctor) => {
  const appoinments = getAppoinment();
  const isExist = appoinments.find((p) => p.id === doctor.id);
  if (isExist) {
    return console.log("already added");
  }
  appoinments.push(doctor);
  console.log(doctor);
  localStorage.setItem("appoinments", JSON.stringify(appoinments));
};

export const removeAppoinment = (id) => {
  const appoinments = getAppoinment();
  const remainingAppoinments = appoinments.filter((appoinment) => appoinment.id !== id);
  localStorage.setItem("appoinments", JSON.stringify(remainingAppoinments));
};
