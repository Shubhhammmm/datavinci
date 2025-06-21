import Header from './components/Header';
import ProductHero from "./components/ProductHero";
import ProductImages from "./components/ProductImages";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductHero />
      <ProductImages />
    </div>
  );
};

export default App;