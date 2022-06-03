import React, { useEffect, useState } from "react";
import { getAllAnimals, deleteAnimal } from "../../store/Animals";
import { Button, Space, Table, Modal } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
const Animals = () => {
  const [animals, setAnimals] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setIsDelete(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsDelete(false);
  };

  const handleDelete = (id) => {
    showModal();
  };
  console.log(isDelete);
  useEffect(() => {
    const getAnimals = async () => {
      const result = await getAllAnimals();
      const data = result.map((item) => {
        return {
          name: item.name,
          age: item.age,
          createdAt: moment(item.createdAt).format("MM/DD/YYYY"),
          type: item.type,
          id: item.id,
        };
      });
      setAnimals(data);
    };
    getAnimals();
  }, []);

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
          <Button onClick={() => handleDelete(id)} shape="round" danger>
            Delete
          </Button>
          <Button ghost type="primary" shape="round">
            Update
          </Button>
          <Button shape="round">View</Button>
        </Space>
      ),
    },
  ];
  return (
    <div style={{ padding: "5rem" }}>
      <Link
        to="/dashboard"
        style={{
          textShadow: "0 0 20px red, 0 0 25px blue",
          letterSpacing: "5px",
          color: "white",
          cursor: "pointer",
          fontSize: "2rem",
        }}
      >
        Back to dashboard
      </Link>
      <Table columns={columns} dataSource={animals} />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1>xoá nha</h1>
      </Modal>
    </div>
  );
};

export default Animals;
