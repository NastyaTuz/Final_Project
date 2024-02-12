import { ROOT_URL } from "..";

export function fetchPostOrder(order) {
  fetch(ROOT_URL + "/order/send" ,{
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(order)
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export function fetchPostSale(sale) {
    fetch(ROOT_URL + "/sale/send" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(sale)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }