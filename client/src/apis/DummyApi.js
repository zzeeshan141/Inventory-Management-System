import _ from 'lodash';
import imgProduct1 from './../images/product-1.jpg';
import imgProduct2 from './../images/product-2.jpg';
import imgProduct3 from './../images/product-3.jpg';
import imgProduct4 from './../images/product-4.jpg';
import imgProduct5 from './../images/product-5.jpg';
import imgProduct6 from './../images/product-6.jpg';
import imgProduct7 from './../images/product-7.jpg';
import imgProduct8 from './../images/product-8.jpg';
import imgProduct9 from './../images/product-9.jpg';
import imgProduct10 from './../images/product-10.jpg';
import imgProduct11 from './../images/product-11.jpg';
import imgProduct12 from './../images/product-12.jpg';
import imgProduct13 from './../images/product-13.jpg';
import imgProduct14 from './../images/product-14.jpg';
import imgProduct15 from './../images/product-15.jpg';
import imgProduct16 from './../images/product-16.jpg';

export function  GetDummyProducts() {

    return [
        {
            id: 1,
            name: 'Table Top Candle',
            categoryIds: [2,3,4],
            image: imgProduct1,
            price: 1500,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 100,
            orders: 783
        },
        {
            id: 2,
            name: 'Moonlight Canle',
            categoryIds: [2,3,4],
            image: imgProduct2,
            price: 1200,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 1500,
            orders: 180
        },
        {
            id: 3,
            name: 'Scented Cannle - Lilly Fragrance',
            categoryIds: [2,3,4],
            image: imgProduct3,
            price: 1800,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 1896,
            orders: 318
        },
        {
            id: 4,
            name: 'Lamp - Metallic - Black/White',
            categoryIds: [5,6,7,8],
            image: imgProduct4,
            price: 5000,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 456,
            orders: 1189
        },
        {
            id: 5,
            name: 'Desk Lamp - White',
            categoryIds: [5,6,7,8],
            image: imgProduct5,
            price: 6000,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 235,
            orders: 1
        },
        {
            id: 6,
            name: 'Desk Lamp - Adjustable - White',
            categoryIds: [5,6,7,8],
            image: imgProduct6,
            price: 3000,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 157,
            orders: 188
        },
        {
            id: 7,
            name: 'Paint Brushes',
            categoryIds: [17,18],
            image: imgProduct7,
            price: 200,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 1159,
            orders: 1357
        },
        {
            id: 8,
            name: 'Paint Board / Stand',
            categoryIds: [17,18],
            image: imgProduct8,
            price: 800,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 15,
            orders: 18
        },
        {
            id: 9,
            name: 'Bookends - Mountain Style',
            categoryIds: [13,14,15,16],
            image: imgProduct9,
            price: 500,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 16,
            orders: 19
        },
        {
            id: 10,
            name: 'Bookends - Black',
            categoryIds: [13,14,15,16],
            image: imgProduct10,
            price: 250,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 178,
            orders: 12
        },
        {
            id: 11,
            name: 'Bookends - Stone Style',
            categoryIds: [13,14,15,16],
            image: imgProduct11,
            price: 750,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 236,
            orders: 14
        },
        {
            id: 12,
            name: 'Paint Board / Stand',
            categoryIds: [17,18],
            image: imgProduct12,
            price: 800,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 369,
            orders: 147
        },
        {
            id: 13,
            name: 'Pocket Watch - Copper',
            categoryIds: [9,10,11,12],
            image: imgProduct13,
            price: 12000,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 258,
            orders: 852
        },
        {
            id: 14,
            name: 'Pocket Watch - Golden',
            categoryIds: [9,10,11,12],
            image: imgProduct14,
            price: 14500,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 1,
            orders: 1
        },
        {
            id: 15,
            name: 'Pocket Watch - Multi',
            categoryIds: [9,10,11,12],
            image: imgProduct15,
            price: 22000,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 0,
            orders: 1800
        },
        {
            id: 16,
            name: 'Pocket Watch - Silver',
            categoryIds: [9,10,11,12],
            image: imgProduct16,
            price: 48500,
            priceUnit: 'Rs',
            availibility: true,
            numberInStock: 7,
            orders: 7
        }
    ];
    
}
export function  GetDummyProductsByCategory(categoryId) {
    const products = GetDummyProducts();
    if(categoryId === 1 || categoryId > 19)
    {
        return products;
    }

    let filteredIds = _.map(products, (product) => { 
        if(product.categoryIds.some((cId) => { return cId == categoryId; }) === true)
            return product;
    })
    filteredIds = _.without(filteredIds, undefined);
    return filteredIds;
}
export function  GetDummyCategories() {

    return [
        {
            id: 1,
            name: "All",
            subCategories: []
        },
        {
            id: 2,
            name: "Candles",
            subCategories: [
                {
                    id: 3,
                    name: "Scented Candles"
                },
                {
                    id: 4,
                    name: "Other Candles"
                }
            ]
        },
        {
            id: 5,
            name: "Lamps",
            subCategories: [
                {
                    id: 6,
                    name: "Candlestick Lamp"
                },
                {
                    id: 7,
                    name: "Tiffany Lamp"
                },
                {
                    id: 8,
                    name: "Novelty Lamp"
                }
            ]
        },
        {
            id: 9,
            name: "Clocks and Watches",
            subCategories: [
                {
                    id: 10,
                    name: "Pocket Watch"
                },
                {
                    id: 11,
                    name: "Sub item 2"
                },
                {
                    id: 12,
                    name: "Sub item 3"
                }
            ]
        },
        {
            id: 13,
            name: "Bookends",
            subCategories: [
                {
                    id: 14,
                    name: "Sub Item 1"
                },
                {
                    id: 15,
                    name: "Sub item 2"
                },
                {
                    id: 16,
                    name: "Sub item 3"
                }
            ]
        },
        {
            id: 17,
            name: "Others",
            subCategories: [
                {
                    id: 18,
                    name: "Sub item 1"
                }
            ]
        },
        {
            id: 19,
            name: "Category 8",
            subCategories: [
                {
                    id: 20,
                    name: "Sub item 1"
                }
            ]
        },
        {
            id: 21,
            name: "Category 9",
            subCategories: [
                {
                    id: 22,
                    name: "Sub item 1"
                }
            ]
        },
        {
            id: 23,
            name: "Category 10",
            subCategories: [
                {
                    id: 24,
                    name: "Sub item 1"
                }
            ]
        }

    ];

}
export function GetDummyCustomerOrders(){
    return [
        {
            customerName: 'Customer 1',
            orderNumber: 'Order 1',
            status: 'Pending'
        },
        {
            customerName: 'Customer 2',
            orderNumber: 'Order 2',
            status: 'Pending'
        },
        {
            customerName: 'Customer 3',
            orderNumber: 'Order 3',
            status: 'Pending'
        },
        {
            customerName: 'Customer 4',
            orderNumber: 'Order 4',
            status: 'Pending'
        },
        {
            customerName: 'Customer 5',
            orderNumber: 'Order 5',
            status: 'Pending'
        },
        {
            customerName: 'Customer 6',
            orderNumber: 'Order 6',
            status: 'Pending'
        },
        {
            customerName: 'Customer 7',
            orderNumber: 'Order 7',
            status: 'Pending'
        },
        {
            customerName: 'Customer 8',
            orderNumber: 'Order 8',
            status: 'Pending'
        },
        {
            customerName: 'Customer 9',
            orderNumber: 'Order 9',
            status: 'Pending'
        },
        {
            customerName: 'Customer 10',
            orderNumber: 'Order 10',
            status: 'Pending'
        },
        {
            customerName: 'Customer 11',
            orderNumber: 'Order 11',
            status: 'Pending'
        },
        {
            customerName: 'Customer 12',
            orderNumber: 'Order 12',
            status: 'Pending'
        },
        {
            customerName: 'Customer 13',
            orderNumber: 'Order 13',
            status: 'Pending'
        },
        {
            customerName: 'Customer 14',
            orderNumber: 'Order 14',
            status: 'Pending'
        },
        {
            customerName: 'Customer 15',
            orderNumber: 'Order 15',
            status: 'Pending'
        },
        {
            customerName: 'Customer 16',
            orderNumber: 'Order 16',
            status: 'Pending'
        },
        {
            customerName: 'Customer 17',
            orderNumber: 'Order 17',
            status: 'Pending'
        },
        {
            customerName: 'Customer 18',
            orderNumber: 'Order 18',
            status: 'Pending'
        },
        {
            customerName: 'Customer 19',
            orderNumber: 'Order 19',
            status: 'Pending'
        },
        {
            customerName: 'Customer 20',
            orderNumber: 'Order 20',
            status: 'Pending'
        },
        {
            customerName: 'Customer 21',
            orderNumber: 'Order 21',
            status: 'Pending'
        },
        {
            customerName: 'Customer 22',
            orderNumber: 'Order 22',
            status: 'Pending'
        },
        {
            customerName: 'Customer 23',
            orderNumber: 'Order 23',
            status: 'Pending'
        },
        {
            customerName: 'Customer 24',
            orderNumber: 'Order 24',
            status: 'Pending'
        },
        {
            customerName: 'Customer 25',
            orderNumber: 'Order 25',
            status: 'Pending'
        },
        {
            customerName: 'Customer 26',
            orderNumber: 'Order 26',
            status: 'Pending'
        },
        {
            customerName: 'Customer 27',
            orderNumber: 'Order 27',
            status: 'Pending'
        },
        {
            customerName: 'Customer 28',
            orderNumber: 'Order 28',
            status: 'Pending'
        },
        {
            customerName: 'Customer 29',
            orderNumber: 'Order 29',
            status: 'Pending'
        },
        {
            customerName: 'Customer 30',
            orderNumber: 'Order 30',
            status: 'Pending'
        }
    ];
}

export function GetDummyCustomers(){
    return [
        {
            customerName: 'Customer 1',
            orderNumber: 'Order 1',
            status: 'Pending'
        },
        {
            customerName: 'Customer 2',
            orderNumber: 'Order 2',
            status: 'Pending'
        },
        {
            customerName: 'Customer 3',
            orderNumber: 'Order 3',
            status: 'Pending'
        },
        {
            customerName: 'Customer 4',
            orderNumber: 'Order 4',
            status: 'Pending'
        },
        {
            customerName: 'Customer 5',
            orderNumber: 'Order 5',
            status: 'Pending'
        },
        {
            customerName: 'Customer 6',
            orderNumber: 'Order 6',
            status: 'Pending'
        },
        {
            customerName: 'Customer 7',
            orderNumber: 'Order 7',
            status: 'Pending'
        },
        {
            customerName: 'Customer 8',
            orderNumber: 'Order 8',
            status: 'Pending'
        },
        {
            customerName: 'Customer 9',
            orderNumber: 'Order 9',
            status: 'Pending'
        },
        {
            customerName: 'Customer 10',
            orderNumber: 'Order 10',
            status: 'Pending'
        },
        {
            customerName: 'Customer 11',
            orderNumber: 'Order 11',
            status: 'Pending'
        },
        {
            customerName: 'Customer 12',
            orderNumber: 'Order 12',
            status: 'Pending'
        },
        {
            customerName: 'Customer 13',
            orderNumber: 'Order 13',
            status: 'Pending'
        },
        {
            customerName: 'Customer 14',
            orderNumber: 'Order 14',
            status: 'Pending'
        },
        {
            customerName: 'Customer 15',
            orderNumber: 'Order 15',
            status: 'Pending'
        },
        {
            customerName: 'Customer 16',
            orderNumber: 'Order 16',
            status: 'Pending'
        },
        {
            customerName: 'Customer 17',
            orderNumber: 'Order 17',
            status: 'Pending'
        },
        {
            customerName: 'Customer 18',
            orderNumber: 'Order 18',
            status: 'Pending'
        },
        {
            customerName: 'Customer 19',
            orderNumber: 'Order 19',
            status: 'Pending'
        },
        {
            customerName: 'Customer 20',
            orderNumber: 'Order 20',
            status: 'Pending'
        },
        {
            customerName: 'Customer 21',
            orderNumber: 'Order 21',
            status: 'Pending'
        },
        {
            customerName: 'Customer 22',
            orderNumber: 'Order 22',
            status: 'Pending'
        },
        {
            customerName: 'Customer 23',
            orderNumber: 'Order 23',
            status: 'Pending'
        },
        {
            customerName: 'Customer 24',
            orderNumber: 'Order 24',
            status: 'Pending'
        },
        {
            customerName: 'Customer 25',
            orderNumber: 'Order 25',
            status: 'Pending'
        },
        {
            customerName: 'Customer 26',
            orderNumber: 'Order 26',
            status: 'Pending'
        },
        {
            customerName: 'Customer 27',
            orderNumber: 'Order 27',
            status: 'Pending'
        },
        {
            customerName: 'Customer 28',
            orderNumber: 'Order 28',
            status: 'Pending'
        },
        {
            customerName: 'Customer 29',
            orderNumber: 'Order 29',
            status: 'Pending'
        },
        {
            customerName: 'Customer 30',
            orderNumber: 'Order 30',
            status: 'Pending'
        }
    ];
}

export default {GetDummyProducts, GetDummyCategories};
