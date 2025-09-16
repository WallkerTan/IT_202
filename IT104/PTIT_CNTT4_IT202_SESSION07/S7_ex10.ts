export {};

class MenuItem {
    constructor(public id: number, public name: string, public price: number) {}
}

class Table {
    constructor(
        public id: number,
        public capacity: number,
        public available: boolean = true
    ) {}
}

class Reservation {
    constructor(
        public id: number,
        public customerName: string,
        public tableId: number
    ) {}
}

class Order {
    constructor(
        public id: number,
        public tableId: number,
        public items: MenuItem[]
    ) {}

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurant {
    public menu: MenuItem[] = [];
    public tables: Table[] = [];
    public reservations: Reservation[] = [];
    public orders: Order[] = [];

    addMenuItem(item: MenuItem) {
        this.menu.push(item);
    }

    addTable(table: Table) {
        this.tables.push(table);
    }

    makeReservation(customerName: string, tableId: number) {
        const table = this.tables.find((t) => t.id === tableId);
        if (!table) {
            console.log("Table not found");
            return;
        }
        if (!table.available) {
            console.log("Table already reserved");
            return;
        }
        table.available = false;
        const reservationId = this.reservations.length + 1;
        this.reservations.push(
            new Reservation(reservationId, customerName, tableId)
        );
        console.log(`Reservation made for ${customerName} at table ${tableId}`);
    }

    placeOrder(tableId: number, items: MenuItem[]) {
        const table = this.tables.find((t) => t.id === tableId);
        if (!table) {
            console.log("Table not found");
            return;
        }
        const orderId = this.orders.length + 1;
        this.orders.push(new Order(orderId, tableId, items));
        console.log(`Order placed for table ${tableId}`);
    }

    generateBill(tableId: number) {
        const ordersForTable = this.orders.filter((o) => o.tableId === tableId);
        if (ordersForTable.length === 0) {
            console.log("No orders found for this table");
            return;
        }
        const total = ordersForTable.reduce(
            (sum, order) => sum + order.getTotal(),
            0
        );
        console.log(`Total bill for table ${tableId} is $${total}`);
        
        const table = this.tables.find((t) => t.id === tableId);
        if (table) table.available = true;
    }
}

const r = new Restaurant();
r.addMenuItem(new MenuItem(1, "Pizza", 10));
r.addMenuItem(new MenuItem(2, "Pasta", 8));
r.addTable(new Table(1, 4));
r.addTable(new Table(2, 2));

r.makeReservation("Alice", 1);
r.placeOrder(1, [new MenuItem(1, "Pizza", 10), new MenuItem(2, "Pasta", 8)]);
r.generateBill(1);
