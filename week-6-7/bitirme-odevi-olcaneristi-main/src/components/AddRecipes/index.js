import React, { useState } from "react"
import axios from "axios"
import Modal from "react-modal"
import "./_addrecipe.scss"
import Cover from "../../assets/addrecipelogo.jpg"
import Logo from "../../assets/logo.svg"
import { Fade } from "react-reveal"
import { BiArrowBack, BiSend } from "react-icons/bi"
import { MdAdd } from "react-icons/md"

Modal.setAppElement("#root")

function AddRecipes({ recipes, setRecipes }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [addRecipe, setAddRecipe] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    time: "0",
    ingCount: "0",
    servings: "0",
    videoLink: "",
    ingredients: "",
    makeDetails: ""
  })

  const handleChange = (e) => {
    setAddRecipe({
      id: Math.random() * 100,
      ...addRecipe,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("YOUR_URL_HERE", addRecipe)
      .then((res) => {
        setRecipes([...recipes, addRecipe])
      
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    setAddRecipe(addRecipe)
    console.log(handleSubmit)
  }

  return (
    <div className="add__recipe">
      <button
        title="Tarif Ekle"
        className="add__recipe__modal"
        onClick={() => setModalIsOpen(true)}
      >
        <MdAdd />
      </button>
      <Modal
        isOpen={modalIsOpen}
        portalClassName="modal"
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Fade>
          <div className="add__recipe__banner">
            <img src={Cover} alt="recipebanner" height="100%" width={400} />
          </div>
          <div className="add__recipe__items">
            <div className="add__recipe__logo">
              <img
                src={Logo}
                alt="recipelogo"
                className="add__recipe__logo--img"
              />
            </div>
            <div className="add__recipe__items--title">
              <h2>
                Hünerlerini sergilemen hiç bu kadar kolay olmamıştı. Tariflerini
                büyük heyecanla bekliyoruz!
              </h2>
            </div>
            <div className="add__recipe__form">
              <form onSubmit={handleSubmit}>
                <div className="add__recipe__input1">
                  <input
                    type="text"
                    className="add__recipe__form--title"
                    name="title"
                    value={addRecipe.title}
                    onChange={handleChange}
                    placeholder="Tarifinizin adını yazınız"
                  />
                </div>
                <div className="add__recipe__input2">
                  <textarea
                    draggable="false"
                    maxLength="300"
                    className="add__recipe__form--desc"
                    name="description"
                    value={addRecipe.description}
                    onChange={handleChange}
                    placeholder="Tarifi kısaca açıklayınız (max. 300 karakter)"
                  />
                </div>
                <div className="add__recipe__input3">
                  <input
                    type="text"
                    className="add__recipe__form--category"
                    name="category"
                    value={addRecipe.category}
                    onChange={handleChange}
                    placeholder="Kategori belirtiniz (Et, Tavuk vb.)"
                  />
                </div>
                <div className="add__recipe__form--section3">
                  <div className="add__recipe__form--info1">
                    <input
                      type="number"
                      className="add__recipe__form--sec1"
                      name="time"
                      value={addRecipe.time}
                      onChange={handleChange}
                      title="Yapım süresi"
                    />
                    <p>Dakika</p>
                  </div>
                  <div className="add__recipe__form--info2">
                    <input
                      type="number"
                      className="add__recipe__form--sec2"
                      name="ingCount"
                      value={addRecipe.ingCount}
                      onChange={handleChange}
                      title="Malzeme sayısı"
                    />
                    <p>Malzeme</p>
                  </div>
                  <div className="add__recipe__form--info3">
                    <input
                      type="number"
                      className="add__recipe__form--sec3"
                      name="servings"
                      value={addRecipe.servings}
                      onChange={handleChange}
                      title="Kaç kişilik?"
                    />
                    <p>Kişilik</p>
                  </div>
                </div>
                <div className="add__recipe__input4">
                  <textarea
                    className="add__recipe__form--ing"
                    name="ingredients"
                    value={addRecipe.ingredients}
                    onChange={handleChange}
                    placeholder="Malzemeleri listeleyiniz"
                  />
                </div>
                <div className="add__recipe__input5">
                  <textarea
                    className="add__recipe__form--make"
                    name="makeDetails"
                    value={addRecipe.makeDetails}
                    onChange={handleChange}
                    placeholder="Tarifin yapılışını anlatınız"
                  />
                </div>
                <div className="add__recipe__input6">
                  <input
                    type="text"
                    className="add__recipe__form--img"
                    name="image"
                    value={addRecipe.image}
                    onChange={handleChange}
                    placeholder="Resim URL giriniz"
                  />
                </div>
                <div className="add__recipe__input7">
                  <input
                    type="text"
                    className="add__recipe__form--video"
                    name="videoLink"
                    value={addRecipe.videoLink}
                    onChange={handleChange}
                    placeholder="Video URL giriniz (isteğe bağlı)"
                  />
                </div>
                <div className="add__recipe__cta">
                  <button
                    className="add__recipe__cta--send add__recipe__cta--back"
                    onClick={() => setModalIsOpen(false)}
                  >
                    <span>
                      {" "}
                      <BiArrowBack /> &nbsp; Geri dön
                    </span>
                  </button>
                  <button className="add__recipe__cta--send" type="submit">
                    <span>
                      {" "}
                      <BiSend /> &nbsp; Tarifi ekle!
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default AddRecipes
