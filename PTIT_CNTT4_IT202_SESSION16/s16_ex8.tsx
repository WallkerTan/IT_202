import React, { Component } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

type CartItem = Product & {
    quantity: number;
};

type StateType = {
    products: Product[];
    cart: CartItem[];
    showCart: boolean;
};

export default class s16_ex8 extends Component<object, StateType> {
    constructor(props: object) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: "Iphone 15 Pro", price: 30000000 },
                { id: 2, name: "Samsung Galaxy S24", price: 25000000 },
                { id: 3, name: "MacBook Air M3", price: 32000000 },
                { id: 4, name: "iPad Pro 12.9", price: 28000000 },
                { id: 5, name: "Apple Watch Ultra 2", price: 18000000 },
                { id: 6, name: "AirPods Pro 2", price: 6000000 },
                { id: 7, name: "Sony WH-1000XM5", price: 8500000 },
                { id: 8, name: "Logitech MX Master 3S", price: 2500000 },
                { id: 9, name: "Dell XPS 13", price: 35000000 },
                { id: 10, name: "Kindle Paperwhite", price: 3500000 },
            ],
            cart: [],
            showCart: false,
        };
    }

    addToCart = (product: Product) => {
        const { cart } = this.state;
        const exist = cart.find((c) => c.id === product.id);

        if (exist) {
            this.setState({
                cart: cart.map((c) =>
                    c.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
                ),
            });
        } else {
            this.setState({
                cart: [...cart, { ...product, quantity: 1 }],
            });
        }
    };

    increaseQty = (id: number) => {
        this.setState({
            cart: this.state.cart.map((c) =>
                c.id === id ? { ...c, quantity: c.quantity + 1 } : c
            ),
        });
    };

    decreaseQty = (id: number) => {
        this.setState({
            cart: this.state.cart
                .map((c) =>
                    c.id === id ? { ...c, quantity: c.quantity - 1 } : c
                )
                .filter((c) => c.quantity > 0),
        });
    };

    render() {
        const { products, cart, showCart } = this.state;
        const total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        return (
            <div style={{ padding: "20px" }}>
                {/* Menu */}
                <div
                    style={{
                        background: "red",
                        padding: "10px",
                        color: "white",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <span>Trang chủ | Danh sách sản phẩm</span>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => this.setState({ showCart: !showCart })}
                    >
                        Cart ({cart.length})
                    </span>
                </div>

                {/* Danh sách sản phẩm */}
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginTop: "10px",
                    }}
                >
                    {products.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                border: "1px solid black",
                                padding: "10px",
                                width: "150px",
                                textAlign: "center",
                            }}
                        >
                            <h4>{p.name}</h4>
                            <p>{p.price.toLocaleString()}</p>
                            <button
                                onClick={() => this.addToCart(p)}
                                style={{
                                    background: "blue",
                                    color: "white",
                                    padding: "5px 10px",
                                }}
                            >
                                Buy
                            </button>
                        </div>
                    ))}
                </div>

                {/* Cart */}
                {showCart && (
                    <div
                        style={{
                            background: "red",
                            marginTop: "20px",
                            padding: "15px",
                            color: "white",
                        }}
                    >
                        <h2>CART</h2>
                        {cart.length === 0 ? (
                            <p>Giỏ hàng trống</p>
                        ) : (
                            <>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            borderBottom: "1px solid white",
                                            padding: "10px 0",
                                        }}
                                    >
                                        <div>
                                            <p>{item.name}</p>
                                            <p>{item.price.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() =>
                                                    this.increaseQty(item.id)
                                                }
                                            >
                                                +
                                            </button>
                                            <span style={{ margin: "0 10px" }}>
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    this.decreaseQty(item.id)
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <h3>Tổng tiền: {total.toLocaleString()} VND</h3>
                                <button
                                    style={{
                                        background: "white",
                                        width: "100%",
                                        marginTop: "10px",
                                    }}
                                    onClick={() =>
                                        this.setState({ showCart: false })
                                    }
                                >
                                    Thoát
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    }
}
