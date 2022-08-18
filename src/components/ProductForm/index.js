import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import "./styles.css";
import {newProduct} from "../../services/product";

const FormProduct = ({ isNewForm, productInfo = {} }) => {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(productInfo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    setShow(false);
    let formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("discount",product.discount);
    formData.append("description", product.description);
    formData.append("status", product.status);
    formData.append("image", product.image);
    if(isNewForm){
      newProduct(formData);
    }
  };

  return (
    <>
      {isNewForm ? (
        <Button variant="primary" className="new_product" onClick={handleShow}>
          Thêm mới
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          Cập nhật
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        {isNewForm ? (
          <Modal.Header closeButton>
            <Modal.Title>Thêm sản phẩm mới</Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header closeButton>
            <Modal.Title>Cập nhât thông tin sản phẩm</Modal.Title>
          </Modal.Header>
        )}
        <Modal.Body className="custom_modal">
          <Card className="card">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Tên sp
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Giá/1sp
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    min={0}
                    type="number"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Giảm giá
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    min={0}
                    type="number"
                    value={product.discount}
                    onChange={(e) =>
                      setProduct({ ...product, discount: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Mô tả sản phẩm
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={product.description}
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Hinh anh sp
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                    setProduct({ ...product, image: e.target.files[0] })
                    }
                  />
                </Col>
                </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Trạng thái
                </Form.Label>
                <Col sm={8}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={product.status ? "Đang bán" : "Dừng bán"}
                    checked={product.status}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        status: e.target.checked ? 1 : 0,
                      })
                    }
                  />
                </Col>
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleSubmit}>
              Xác nhận
            </Button>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormProduct;
