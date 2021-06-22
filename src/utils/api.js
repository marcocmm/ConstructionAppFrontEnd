import axios from "axios";

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
