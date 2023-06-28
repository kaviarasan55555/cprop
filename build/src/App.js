import React, { useState } from 'react';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleProductClick = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      // Product not in cart, add it
      setCartItems([...cartItems, product]);
    } else {
      // Product already in cart, remove it
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index, 1);
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Navbar code */}
      </nav>

      <header className="bg-dark py-5">
        {/* Header code */}
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* Product cards */}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                    <h5 className="mb-0">Cart</h5>
                  </div>
                </div>
                <div className="card-body">
                  {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    <ul className="list-group list-group-flush">
                      {cartItems.map((item) => (
                        <li className="list-group-item" key={item.id}>
                          <div className="row align-items-center">
                            <div className="col-6">
                              <h6 className="mb-0">{item.name}</h6>
                            </div>
                            <div className="col-6 text-end">
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => handleProductClick(item)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product 1</h5>
                    <h6 className="fw-bold">$40.00 - $80.00</h6>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        handleProductClick({ id: 1, name: 'Fancy Product 1', price: '$40.00 - $80.00' })
                      }
                    >
                      {cartItems.findIndex((item) => item.id === 1) === -1 ? 'Add to cart' : 'Remove from cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product 2</h5>
                    <h6 className="fw-bold">$60.00 - $120.00</h6>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        handleProductClick({ id: 2, name: 'Fancy Product 2', price: '$60.00 - $120.00' })
                      }
                    >
                      {cartItems.findIndex((item) => item.id === 2) === -1 ? 'Add to cart' : 'Remove from cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product 3</h5>
                    <h6 className="fw-bold">$80.00 - $160.00</h6>
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      className="btn btn-outline-dark mt-auto"
                      onClick={() =>
                        handleProductClick({ id: 3, name: 'Fancy Product 3', price: '$80.00 - $160.00' })
                      }
                    >
                      {cartItems.findIndex((item) => item.id === 3) === -1 ? 'Add to cart' : 'Remove from cart'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more product cards here */}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        {/* Footer code */}
      </footer>
    </div>
  );
}

export default App;
