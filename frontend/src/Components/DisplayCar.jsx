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

  let page = 1;

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (page) => {
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?page=${page}&limit=2`,
      {
        method: "GET",

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

  function prev() {
    if (page == 1) {
      return;
    }
    page--;
    fetchData(page);
  }

  function next() {
    if (page == 5) {
      return;
    }
    page++;
    fetchData(page);
  }

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

  const filterPrice = async () => {
    let query = document.getElementById("prifil").value;
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

  const filterColor = async () => {
    let query = document.getElementById("colfil").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?color=${query}`,
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

  const filterMileage = async () => {
    let query = document.getElementById("milfil").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?mileage=${query}`,
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

  const lowtohigh= async () => {
    let query = "asc"
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?sort=price&sortBy=${query}`,
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

  const hightolow= async () => {
    let query = "desc"
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?sort=price&sortBy=${query}`,
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

  

  const searchCar = async () => {
    let query = document.getElementById("search").value;
    await fetch(
      `https://impossible-moth-loincloth.cyclic.app/cars?title=${query}`,
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
    <>
      <div>
        <Input
          w={"30%"}
          mt={8}
          errorBorderColor="teal"
          border="2px solid teal"
          placeholder="search car by model"
          id="search"
          onInput={(e) => searchCar(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "25px" }}>
        <div
          style={{
            border: "1px solid black",
            width: "15%",
            padding: "15px",
            height: "600px",
          }}
        >
          <div style={{ marginTop: "40px", fontSize: "22px" }}>
            <p>Filter by price</p>

            <select
              style={{
                border: "1px solid black",
                fontSize: "20px",
                padding: "5px",
              }}
              name="pricefilter"
              id="prifil"
              onChange={(e) => filterPrice(e.target.value)}
            >
              <option value="#">choose price</option>
              <option value="500000">₹ 500000</option>
              <option value="600000">₹ 600000</option>
              <option value="700000">₹ 700000</option>
              <option value="800000">₹ 800000</option>
              <option value="900000">₹ 900000</option>
              <option value="1000000">₹ 1000000</option>
              <option value="1100000">₹ 1100000</option>
              <option value="1200000">₹ 1200000</option>
            </select>
          </div>

          <div style={{ marginTop: "40px", fontSize: "22px" }}>
            <p>Filter by mileage</p>

            <select
              style={{
                border: "1px solid black",
                fontSize: "20px",
                padding: "5px",
              }}
              name="pricemileage"
              id="milfil"
              onChange={(e) => filterMileage(e.target.value)}
            >
              <option value="#">choose price</option>
              <option value="20">20 kmph</option>
              <option value="21">21 kmph</option>
              <option value="22">22 kmph</option>
              <option value="23">23 kmph</option>
              <option value="24">24 kmph</option>
              <option value="25">25 kmph</option>
              <option value="26">26 kmph</option>
              <option value="27">27 kmph</option>
            </select>
          </div>

          <div style={{ marginTop: "40px", fontSize: "22px" }}>
            <p>Filter by color</p>

            <select
              name="colorfilter"
              id="colfil"
              style={{
                border: "1px solid black",
                fontSize: "20px",
                padding: "5px",
              }}
              onChange={(e) => filterColor(e.target.value)}
            >
              <option value="#">choose color</option>
              <option value="red">red</option>
              <option value="black">black</option>
              <option value="teal">teal</option>
              <option value="blue">blue</option>
              <option value="white">white</option>
              <option value="gray">gray</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
            </select>
          </div>

          <div style={{ marginTop: "40px", fontSize: "20px" }}>
            <p>Sort by Price</p>

            <div  style={{ display:"flex",gap:"20px",border:"0px solid red",width:"85%"}}onClick={(e)=>lowtohigh(e.target.value)}>
              <Checkbox  isInvalid   id="lowtohigh"  value={"asc"} ></Checkbox>
              <input placeholder="Low to High" style={{width:"110px",color:"black"}}/>
            </div>

            <div  style={{ display:"flex",gap:"20px",border:"0px solid red",width:"85%"}} onClick={(e)=>hightolow(e.target.value)}>
              <Checkbox isInvalid value={"desc"} id="hightolow" ></Checkbox>
              <input  placeholder="High to Low" style={{width:"110px",color:"black"}}/>
            </div>
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
          {data?.map((ele) => {
            // console.log("ele",ele)
            return (
              <div key={ele._id} style={{ border: "1px solid black" }}>
                <Image
                  style={{ width: "100%", height: "250px" }}
                  src={ele.image}
                  alt="abc"
                />
                <h2 style={{ fontSize: "21px" }}>title: {ele.title}</h2>
                <div style={{width:"50%",margin:"auto" ,display:"flex",gap:"30px" ,marginLeft:"210px"}}>
                  <div style={{border:"1px solid navy",backgroundColor:"black", borderRadius:"50%",height:"30px",width:"30px"}}></div>
                  <div style={{border:"1px solid darkgoldenrod",backgroundColor:"darkgoldenrod", borderRadius:"50%",height:"30px",width:"30px"}}></div>
                  <div style={{border:"1px solid red",backgroundColor:"red", borderRadius:"50%",height:"30px",width:"30px"}}></div>
                  <div style={{border:"1px solid gray",backgroundColor:"gray", borderRadius:"50%",height:"30px",width:"30px"}}></div>


                </div>
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
                      title: "car Data Deleted",
                      position: "bottom",
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
                      Toast({
                        title: "car data edited",
                        position: "bottom",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                      });
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

      <button
        style={{
          backgroundColor: "teal",
          color: "white",
          width: "100px",
          height: "40px",
          border: "1px solid black",
          borderRadius: "10px",
          marginTop: "20px",
          marginLeft: "100px",
        }}
        onClick={prev}
      >
        previous
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
        onClick={next}
      >
        next
      </button>
    </>
  );
};

export default DisplayCar;
