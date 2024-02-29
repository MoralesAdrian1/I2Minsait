import axios from "axios";
export const getAllDatosPRequest = async () => axios.get("/datosP");

export const createDatosPRequest = async (datosP) => axios.post("/datosP", datosP);

export const updateDatosPRequest = async (datosP) =>
  axios.put(`/datosP/${datosP._id}`, datosP);

export const deleteDatosPRequest = async (id) => axios.delete(`/datosP/${id}`);

export const getDatosPRequest = async (id) => axios.get(`/datosP/${id}`);
