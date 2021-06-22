import axios from "axios";

export async function getPresencas(setData) {
  try {
    const res = await axios.get("/attendance/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getServicos(setData) {
  try {
    const res = await axios.get("/service/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getMateriais(setData) {
  try {
    const res = await axios.get("/material/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getEquipamentos(setData) {
  try {
    const res = await axios.get("/equipment/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getConsumiveis(setData) {
  try {
    const res = await axios.get("/consumable/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getClientes(setData) {
  try {
    const res = await axios.get("/customer/all");
    if (res.status === 200) setData(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function getFornecedores(setData) {
  try {
    const res = await axios.get("/provider/all");
    if (res.status === 200) setData(res.data);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
