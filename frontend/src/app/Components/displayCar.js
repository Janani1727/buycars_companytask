import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";

// import { AiFillEdit } from "react-icons/ai";

const DisplayCar = () => {
  const [update, setUpdate] = useState("");
  const [data, setData] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState("");
  const [price, setPrice] = useState("");

  const Toast = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://impossible-moth-loincloth.cyclic.app/cars", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const payload = {
    image,
    title,
    description,
    price,
    mileage,
    color,
  };
  console.log(payload);
  async function UpdateData(id) {
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars/update/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  }

  const Delete = async (id) => {
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const filteredData = async () => {
    let query = document.getElementById("five").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?price=${query}`,
      {
        method: "GET",
        // mode:"no-cors",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const eightfilteredData = async () => {
    let query = document.getElementById("eight").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?price=${query}`,
      {
        method: "GET",
        // mode:"no-cors",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const ninefilteredData = async () => {
    let query = document.getElementById("nine").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?price=${query}`,
      {
        method: "GET",
        // mode:"no-cors",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const tenfilteredData = async () => {
    let query = document.getElementById("ten").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?price=${query}`,
      {
        method: "GET",
        // mode:"no-cors",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div
        style={{
          border: "1px solid black",
          width: "20%",
          padding: "15px",
          height: "600px",
        }}
      >
        <h3>filters</h3>

        <div style={{ marginTop: "40px" }}>
          <p>filter by price</p>
          <Checkbox
            name={500000}
            value={500000}
            id="five"
            onChange={(e) => filteredData(e.target.value)}
            style={{ border: "1px solid" }}
          ></Checkbox>{" "}
          <input placeholder="500000" />
          <br />
          <Checkbox
            name={800000}
            value={800000}
            id="eight"
            onChange={(e) => eightfilteredData(e.target.value)}
            style={{ border: "1px solid" }}
          ></Checkbox>{" "}
          <input placeholder=" 800000 " />
          <br />
          <Checkbox
            name={900000}
            value={900000}
            id="nine"
            onChange={(e) => ninefilteredData(e.target.value)}
            style={{ border: "1px solid" }}
          ></Checkbox>{" "}
          <input placeholder=" 900000 " />
          <br />
          <Checkbox
            name={1000000}
            value={1000000}
            id="ten"
            onChange={(e) => tenfilteredData(e.target.value)}
            style={{ border: "1px solid" }}
          ></Checkbox>{" "}
          <input placeholder=" 1000000 " />
        </div>

        <div style={{ marginTop: "40px" }}>
          <p>filter by mileage</p>
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="below 15kmph" />
          <br />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="16 kmph - 25kmph" />
          <br />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="above 26kmph " />
        </div>

        <div style={{ marginTop: "40px" }}>
          <p>filter by color</p>
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="black " />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="white" />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="teal " />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="red" />
          <Checkbox style={{ border: "1px solid" }}></Checkbox>{" "}
          <input placeholder="yellow " />
        </div>
      </div>
      <div
        style={{
          width: "90%",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "30px",
        }}
      >
        {data.map((ele) => {
          // console.log("ele",ele)
          return (
            <div key={ele._id} style={{ border: "1px solid black" }}>
              <Image
                style={{ width: "100%", height: "250px" }}
                src={ele.image}
                alt="abc"
              />
              <h2 style={{ fontSize: "21px" }}>title: {ele.title}</h2>
              <h2 style={{ fontSize: "21px" }}>color: {ele.color}</h2>
              <h2 style={{ fontSize: "21px" }}> price: {ele.price}</h2>
              <h2 style={{ fontSize: "21px" }}>mileage: {ele.mileage}</h2>
              <h2 style={{ fontSize: "21px" }}>
                description: {ele.description}
              </h2>
              <button
                style={{
                  backgroundColor: "teal",
                  color: "white",
                  width: "100px",
                  height: "40px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  marginTop: "20px",
                }}
                onClick={() => setUpdate(ele._id)}
              >
                <p onClick={onOpen} fontSize={"30px"}>
                  Edit
                </p>
              </button>

              <button
                style={{
                  backgroundColor: "teal",
                  color: "white",
                  width: "100px",
                  height: "40px",
                  border: "1px solid black",
                  borderRadius: "10px",
                  marginTop: "20px",
                  marginLeft: "40px",
                }}
                onClick={() => {
                  Delete(ele._id);
                  Toast({
                    title: " Product Deleted",
                    position: "top",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Car Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl mt={4}>
                <Input
                  ref={initialRef}
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  ref={initialRef}
                  placeholder=" Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  ref={initialRef}
                  placeholder="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  ref={initialRef}
                  placeholder="Mileage"
                  onChange={(e) => setMileage(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                // onClick={() => UpdateData(update)}
                onClick={() => {
                  UpdateData(update);
                  //   Toast({
                  //     title: " Product Edited",
                  //     position: "top",
                  //     status: "success",
                  //     duration: 4000,
                  //     isClosable: true,
                  //   });
                }}
              >
                update
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default DisplayCar;
