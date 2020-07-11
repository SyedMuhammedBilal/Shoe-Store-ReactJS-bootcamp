import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './App.css';
import FooterBar from './components/FooterBar';
import Homes from './components/Homes';
import Main from './components/Main';
import Ending from './components/Ending';

export default function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/launch" component={Launch}>
                <Route  path="/" component={LaunchIndex} />
              </Route>
              <Route path="/launch/:slug" component={LaunchShoe} />
              <Route path="*" component={NotFound} />
          </Switch>
        </div>      
      </Router>
  );
}

function Home() {
  return (
      <div>
          <Homes />
          <Main />
          <Ending />
          <FooterBar />
      </div>
  )
}

function Launch() {
  return (
      <div>
          <h1>Helloo!</h1>
      </div>
  )
}

function NotFound(){
  return(
    <div>
      <h1>Not Found</h1>
      <p>Sorry your page was not found!</p>
    </div>
  )
}

function LaunchIndex() {
  return (
      <div>
          {
              Object.keys(shoes).map(keyName =>{
                const shoe = shoes[keyName];
                return(
              <Link key={keyName} to={`/launch/${keyName}`}>
                  <div className="pro_card">
                    <div className="pro_img"> 
                      <img src={shoe.img} alt={shoe.name} />
                    </div>
                    <div className="pro_details">
                      <h1 className="head">{shoe.name}</h1>
                        <Link className="btn" to="/">Buy Now</Link>
                    </div>
                  </div> 
                </Link>
                )}
              )
          }
          <FooterBar />
      </div>
  )
}

function LaunchShoe() {

  let { slug } = useParams();
  const shoe = shoes[slug]
  console.log(shoe)

  if(!shoe)
    return(<h2>Product Not Found</h2>)

  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={shoe.img} />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{shoe.name}</h1>
            <p class="mb-8 leading-relaxed">{shoe.description}</p>
            <div class="flex justify-center">
             <span class="title-font font-medium text-2xl text-gray-900">${shoe.price}</span>
            </div>
            <br />
            <br />
            <div class="flex justify-center">
              <Link class="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg" to="/launch">Back to products</Link>
              <button class="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded text-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function Navbar() {
  return (
      <div>
          <header class="text-gray-700 body-font">
              <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/launch">
                  <img src="/images/ll.png" alt="logo" style={{
                    'width':'130px',
                    'height': '75px',
                  }} />
                  <span class="ml-3 text-xl">Shoe Store</span>
                  </Link>
                  <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                  <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
                  <Link className="mr-5 hover:text-gray-900" to="/launch">Products</Link>
                  <Link className="mr-5 hover:text-gray-900" to="/">Third Link</Link>
                  <Link className="mr-5 hover:text-gray-900" to="/">Fourth Link</Link>
                  </nav>
                  <Link to="/launch" class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Shop Now
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                  </Link>
              </div>
          </header>
      </div>
  )
}

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    description: "Go for the stable and supportive ride in the Nike Air Zoom Structure 22. Engineered mesh, a heel overlay and Dynamic Support throughout the midfoot all work together to help every step feel smooth.",
    img:
      "/images/shoe1.png",
    price: 250
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270",
    description: "Find your wings on the path less traveled. The Nike Pegasus Trail 2 delivers durability and responsiveness to runners, trail athletes and outdoor enthusiasts. Versatile enough for your everyday miles, it features an ideal fit with plush cushioning and tough traction.",
    img:
      "/images/shoe2.png",
    price: 300
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    description: "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
    img:
      "/images/shoe3.png",
      price: 570
  },
  "Nike-airmax-42": {
    name: "Nike AirMax",
    description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
    img:
      "/images/shoe4.png",
    price: 999
  },
  "Nike-Blue": {
    name: "Nike React Miller",
    description: "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
    img:
      "/images/shoe5.png",
    price: 670
  }
};