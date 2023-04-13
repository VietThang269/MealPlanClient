import React, { useEffect, useState } from "react";
import "./ListOrder.css";
import { apiGet } from "../../utils/https/request";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    minWidth: 400,
    border: "none",
    maxHeight: 550,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const ListOrder = () => {
  const [data, setData] = useState([]);
  const { id } = JSON.parse(localStorage.getItem("id"));
  const [opened, setOpened] = useState(false);
  const [item, setItem] = useState(null);

  function calcTotal(data) {
    if (data) {
      const listTotal = data.list?.map((item, _) => item.price * item.quanity);
      const total = listTotal.reduce((a, b) => a + b);

      return total;
    }
    return 0;
  }

  function hanldeOpenModal(id) {
    const response = data.find((item, index) => item._id === id);
    setOpened(true);
    setItem(response);
  }

  useEffect(() => {
    if (id) {
      const fetchingData = async () => {
        try {
          const response = await apiGet(`order/user/${id}`, {});

          if (response.error === 0) {
            setData(response.data);
          }
        } catch (error) {}
      };

      fetchingData();
    }
  }, [id]);

  function renderColor(status) {
    switch (status) {
      case "pending":
        return "#fa7100";
      case "delivering":
        return "#228BE6";
      case "delivered":
        return "green";
      case "cancel":
        return "red";
      default:
        return "#fa7100";
    }
  }

  return (
    <section class="pricing-tables text-center">
      <div class="container">
        <h2 class="section__title">Order List</h2>
        <div class="plans grid-wrapper text-center">
          {data?.map((item, index) => (
            <div key={index} class="plan plan--starter flex-wrapper">
              <div
                class="plan__head"
                style={{
                  backgroundColor: `${renderColor(item?.status)}`,
                }}
              >
                <h3 class="plan__title caps lspg2">
                  Status:{" "}
                  <span
                    style={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                    }}
                  >
                    {item?.status}
                  </span>
                </h3>
                <h3 class="plan__title caps lspg2">Order {index + 1}</h3>
                <div class="plan__price">
                  <p class="price price--monthly">${calcTotal(item)}</p>
                </div>
              </div>
              <div class="plan__features">
                <p>
                  {item?.list.map((item, index) => (
                    <span key={index}>{item?.quanity} sản phẩm</span>
                  ))}
                </p>
              </div>
              <button
                class="plan__btn--start btn-primary outline p-2"
                onClick={() => hanldeOpenModal(item._id)}
              >
                <span>Check</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <ModalDetailOrder opened={opened} setOpened={setOpened} item={item} />
    </section>
  );
};

const ModalDetailOrder = ({ opened, setOpened, item }) => {
  function calcTotal(data) {
    if (data) {
      const listTotal = data.list?.map((item, _) => item.price * item.quanity);
      const total = listTotal.reduce((a, b) => a + b);

      return total;
    }
    return 0;
  }

  return (
    <Modal
      isOpen={opened}
      onRequestClose={() => setOpened(false)}
      style={customStyles}
    >
      <div className="modal_product">
        <div style={{ width: "100%" }}>
          <p
            style={{
              fontWeight: "bold",
              color: "var(--primary1)",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Order
          </p>
          {item?.list.map((item, index) => (
            <ItemOrder key={index} data={item} />
          ))}
          <p className="mt-4">
            Total:{" "}
            <span style={{ fontWeight: "bold" }}>${calcTotal(item)}</span>{" "}
          </p>
        </div>
      </div>
    </Modal>
  );
};

const ItemOrder = ({ data }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getDataProduct = async () => {
      const response = await apiGet(`product/${data?.id}`, {});
      setProduct(response.data);
    };

    getDataProduct();
  }, [data]);
  return (
    <div
      className="mt-3"
      style={{
        borderBottom: "1px solid #ccc",
      }}
    >
      <div className="d-flex" style={{ gap: 20 }}>
        <img src={product?.image} alt="" style={{ width: 100 }} />
        <div>
          <p>{product?.name}</p>
          <p>Quanity: {data?.quanity}</p>
        </div>
      </div>
      <p
        style={{
          textAlign: "end",
        }}
      >
        ${" "}
        <span style={{ fontWeight: "bold" }}>
          {data?.quanity * data?.price}
        </span>
      </p>
    </div>
  );
};

export default ListOrder;
