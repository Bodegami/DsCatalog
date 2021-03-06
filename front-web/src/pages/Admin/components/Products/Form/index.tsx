import { makeRequest } from "core/utils/request";
import React, { useState } from "react";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  category: string;
  description: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    price: '',
    category: '',
    description: ''
  });

  type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;


  const handleOnChange = (event: FormEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      ...formData,
      imgUrl: 'https://images0.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067029_g.jpg',
      categories: [{ id: formData.category }],
    }
    makeRequest({ url: '/products', method: 'POST', data: payload })
      .then(() => {
        setFormData({ name: '', category: '', price: '', description: '' })
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <BaseForm title="cadastrar um produto">
        <div className="row">
          <div className="col-6">
            <input
              name="name"
              value={formData.name}
              type="text"
              className="form-control mb-5"
              onChange={handleOnChange}
              placeholder="Digite o nome do produto"
            />
            <select name="category" value={formData.category} className="form-control mb-5" onChange={handleOnChange}>
              <option value="1">Livros</option>
              <option value="2">Eletrônicos</option>
              <option value="3">Computadores</option>
            </select>
            <input
              name="price"
              value={formData.price}
              type="text"
              className="form-control"
              onChange={handleOnChange}
              placeholder="Preço"
            />
          </div>
          <div className="col-6">
            <textarea name="description" value={formData.description} className="form-control" onChange={handleOnChange} cols={30} rows={10} />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
