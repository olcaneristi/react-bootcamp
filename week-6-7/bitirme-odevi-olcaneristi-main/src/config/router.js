import Home from "../components/Home"
import Recipes from "../components/Recipes"

export const router = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    title: "Anasayfa"
  },
  {
    path: "/recipes",
    component: () => <Recipes />,
    title: "Tarifler"
  }
]
