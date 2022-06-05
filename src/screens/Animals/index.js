import React, { useEffect, useState } from "react";
import api from "../../api/animals.js";
import { Table, Button, Space, Modal } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
const Animals = () => {
  const [animals, setAnimals] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [id, setId] = useState();
  const [action, setAction] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [animal, setAnimal] = useState({});
  let createdAt = new Date();
  createdAt = moment(createdAt).format("DD/MM/YYYY");

  const getAnimals = async () => {
    const { data } = await api.get("/animals");
    return data;
  };

  const deleteAnimal = async (id) => {
    await api.delete(`/animals/${id}`);
  };

  const getAnimal = async (id) => {
    const { data } = await api.get(`/animals/${id}`);
    setAnimal(data);
  };

  const createAnimal = async (animal) => {
    const newAnimal = { ...animal };
    await api.post("/animals/", newAnimal);
    setAnimals([...animals, newAnimal]);
  };

  const updateAnimal = async (animal) => {
    const newAnimal = {
      createdAt,
      name: name ? name : animal.name,
      age: age ? age : animal.age,
      type: type ? type : animal.type,
    };
    await api.put(`/animals/${animal.id}`, newAnimal);
    setAnimals(
      animals.map((item) => {
        return item.id === animal.id ? { ...newAnimal } : item;
      })
    );
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    deleteAnimal(id);
    const result = animals.filter((animal) => animal.id !== id);
    setAnimals(result);
  };
  const handleOkView = () => {
    setIsModalVisible(false);
  };

  const handleOkeCreate = () => {
    createAnimal({
      name: name,
      type: type,
      age: age,
      createdAt: moment(createdAt).format("DD-MM-YYYY"),
    });
    setIsModalVisible(false);
  };
  const handleOkUpdate = () => {
    setIsModalVisible(false);
    updateAnimal(animal);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "id",
    },
    {
      title: "CreateAt",
      dataIndex: "createdAt",
      key: "id",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "id",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Space size="large">
          <Button
            onClick={() => {
              showModal();
              setId(id);
              setAction("delete");
            }}
            danger
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              showModal();
              setId(id);
              setAction("update");
              getAnimal(id);
            }}
            type="primary"
            ghost
          >
            Update
          </Button>
          <Button
            onClick={() => {
              showModal();
              setId(id);
              setAction("view");
              getAnimal(id);
            }}
            type="primary"
            ghost
          >
            View
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const getAllAnimals = async () => {
      const data = await getAnimals();
      const result = data.map((item) => {
        return {
          age: item.age,
          createdAt: moment(item.createdAt).format("DD-MM-YYYY"),
          type: item.type,
          name: item.name,
          id: item.id,
        };
      });
      if (data) setAnimals(result);
    };
    getAllAnimals();
  }, []);

  return (
    <>
      <Link to="/dashboard">
        <h1
          style={{
            textAlign: "center",
            letterSpacing: "3px",
            color: "white",
            textShadow: "5px 5px 15px lightcoral, 5px 5px 15px lightblue",
          }}
        >
          Back to dashboard
        </h1>
      </Link>
      <Button
        onClick={() => {
          setIsModalVisible(true);
          setAction("create");
        }}
        style={{
          margin: "2rem 5rem",
          border: "1px solid lightgreen",
          color: "lightgreen",
        }}
        size="large"
        type="ghost"
      >
        Create
      </Button>
      <Table
        style={{ margin: "2rem 5rem" }}
        columns={columns}
        dataSource={animals}
      ></Table>
      {action === "delete" && (
        <Modal
          title="Delete"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <h1>Xoá nha</h1>
        </Modal>
      )}

      {action === "update" && animal && (
        <Modal
          title="Update"
          visible={isModalVisible}
          onOk={() => handleOkUpdate(id)}
          onCancel={handleCancel}
        >
          <input
            className="name"
            style={{ width: "70%", boxShadow: "0 1px 5px 0 #666" }}
            defaultValue={animal.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="type"
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            defaultValue={animal.type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            className="age"
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            defaultValue={animal.age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Modal>
      )}
      {action === "view" && animal && (
        <Modal
          title="View"
          visible={isModalVisible}
          onOk={handleOkView}
          onCancel={handleCancel}
        >
          <input
            className="name"
            style={{ width: "70%", boxShadow: "0 1px 5px 0 #666" }}
            defaultValue={animal.name}
          />
          <input
            className="type"
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            defaultValue={animal.type}
          />
          <input
            className="type"
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            defaultValue={animal.createdAt}
          />
          <input
            className="age"
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            defaultValue={animal.age}
          />
        </Modal>
      )}
      {action === "create" && (
        <Modal
          title="Create"
          visible={isModalVisible}
          onOk={handleOkeCreate}
          onCancel={handleCancel}
        >
          <input
            style={{ width: "70%", boxShadow: "0 1px 5px 0 #666" }}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            placeholder="type"
            onChange={(e) => setType(e.target.value)}
          />
          <input
            style={{
              width: "70%",
              boxShadow: "0 1px 5px 0 #666",
              marginTop: "1rem",
            }}
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Modal>
      )}
    </>
  );
};

export default Animals;
