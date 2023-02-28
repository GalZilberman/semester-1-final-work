import { createContext, useState } from "react";


export const MainContext = createContext();


export default function MainContextProvider(props) {
    // ערכים

    // רשימת חולצות קיץ התחלתית T-shirt
    const [Tshirts, setTshirts] = useState(
        [
            {
                id: 1,
                imageSrc: "https://contents.mediadecathlon.com/p1770634/k$ac8d6c687b5b860bb0610cf73bc64ba5/men-s-travel-trekking-merino-wool-t-shirt-travel-100-blue.jpg?format=auto&quality=40&f=452x452",
                name: "T-shirt",
                price: 45,
                amount: 1,
            },
            {
                id: 2,
                imageSrc: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6823/540/800/6823540800_1_1_16.jpg?t=1641304967763&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome",
                name: "T-shirt",
                price: 27,
                amount: 1,
            },
            {
                id: 3,
                imageSrc: "https://static.massimodutti.net/3/photos//2023/V/0/1/p/6866/772/250/6866772250_1_1_16.jpg?t=1673426037668&impolicy=massimodutti-itxmediumhigh&imwidth=500&imformat=chrome",
                name: "T-shirt",
                price: 55,
                amount: 1,
            },
            {
                id: 4,
                imageSrc: "https://images.usc.co.uk/images/products/54269970_l.jpg",
                name: "T-shirt",
                price: 49,
                amount: 1,
            },
            {
                id: 5,
                imageSrc: "https://cdn11.bigcommerce.com/s-405b0/images/stencil/590x590/products/258/18041/gildan-42000-tee-t-shirt.ca-lime__26860.1643747563.jpg?c=2",
                name: "T-shirt",
                price: 23,
                amount: 1,
            },
            {
                id: 6,
                imageSrc: "https://cdn11.bigcommerce.com/s-405b0/images/stencil/590x590/products/84/16984/2000b-gldan-ultra-cotton-youth-t-shirt-white-t-shirt.ca__89878.1607791168.jpg?c=2",
                name: "T-shirt",
                price: 77,
                amount: 1,
            },
            {
                id: 7,
                imageSrc: "https://www.icewear.is/pub/media/catalog/product/cache/ecc700ac95a539de9e0ef2424af8fc0e/t/s/tshirt-iceland-cotton_eyjalon_72.jpg",
                name: "T-shirt",
                price: 45,
                amount: 1,
            },
            {
                id: 8,
                imageSrc: "https://www.youngminds.org.uk/media/jezlmsjl/youngminds-tech-t-shirt-front.jpg?anchor=center&mode=crop&width=800&height=800&rnd=132712650500270000&quality=55",
                name: "T-shirt",
                price: 85,
                amount: 1,
            },
        ]
    );


    // רשימת מכנסי טרנינג התחלתית
    const [sweatpants, setSweatpants] = useState(
        [
            {
                id: 1,
                imageSrc: "https://cdn-images.farfetch-contents.com/17/59/51/67/17595167_36668276_300.jpg",
                name: "Sweatpants",
                price: 99,
                amount: 1,
            },
            {
                id: 2,
                imageSrc: "https://cdn-images.farfetch-contents.com/19/19/61/39/19196139_43274524_300.jpg",
                name: "Sweatpants",
                price: 120,
                amount: 1,
            },
            {
                id: 3,
                imageSrc: "https://cdn.fashiola.in/L97493035/lacoste-mens-robert-georges-core-sweat-pant-in-size-end-clothing.jpg",
                name: "Sweatpants",
                price: 199,
                amount: 1,
            },
            {
                id: 4,
                imageSrc: "https://i5.walmartimages.com/asr/8e096e9e-6b30-477c-b1ba-79905403988a.065114e4b095a5d4b5e8f272a9e05e33.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
                name: "Sweatpants",
                price: 70,
                amount: 1,
            },
        ]
    );


    // רשימת כובעים התחלתית
    const [hats, setHats] = useState(
        [
            {
                id: 1,
                imageSrc: "https://image.spreadshirtmedia.com/image-server/v1/products/T803A440PA1648PT32X47Y4D12107228W3379H3556/views/1,width=378,height=378,appearanceId=440,backgroundColor=F2F2F2,modelId=1723,crop=list/sumo.jpg",
                name: "Hat",
                price: 99,
                amount: 1,
            },
            {
                id: 2,
                imageSrc: "https://image.spreadshirtmedia.com/image-server/v1/products/T803A231PA1648PT32X43Y0D1000402795W4140H5086Cx000000/views/1,width=378,height=378,appearanceId=231,backgroundColor=F2F2F2,modelId=1723,crop=list/pimp.jpg",
                name: "Hat",
                price: 50,
                amount: 1,
            },
            {
                id: 3,
                imageSrc: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T803A231MPA1648PT32X26Y0D1034669249W7481H5086/views/1,width=800,height=800,appearanceId=231,backgroundColor=F2F2F2,modelId=1723,crop=list/afro-mulehead-snapback-cap.jpg",
                name: "Hat",
                price: 79,
                amount: 1,
            },
        ]
    );


    // רשימות התחלתיות של סל קניות

    // T-shirt
    const [cartTshirt, setCartTshirt] = useState([]);
    // hats
    const [cartHats, setCartHats] = useState([]);
    // sweatpants
    const [cartSweatpants, setCartSweatpants] = useState([]);


    // מחיר לתשלום התחלתי
    const [totalPrice, setTotalPrice] = useState(0);


    // רשימת משתמשים התחלתית
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                email: "nirc7@king.co.il",
                pass: '7777777'
            },
            {
                id: 2,
                email: "gal@gmail.com",
                pass: '1234'
            },
        ]
    );


    // אירועים

    // הוספת מוצר לסל קניות
    const addItem2Cart = (itemId, name) => {
        let newItem;
        if (name === "T-shirt") {
            newItem = Tshirts.find(item => item.id === itemId);
            if (cartTshirt.find(item => item.id === itemId) === undefined) {
                let newCartTshirt = [...cartTshirt, newItem];
                setCartTshirt(newCartTshirt);
            } else {
                newItem.amount++;
                let newCartTshirt = [...cartTshirt];
                setCartTshirt(newCartTshirt);

            }
        }
        else if (name === "Sweatpants") {
            newItem = sweatpants.find(item => item.id === itemId);
            if (cartSweatpants.find(item => item.id === itemId) === undefined) {
                let newCartSweatpants = [...cartSweatpants, newItem];
                setCartSweatpants(newCartSweatpants);
            } else {
                newItem.amount++;
                let newCartSweatpants = [...cartSweatpants];
                setCartSweatpants(newCartSweatpants);

            }
        }
        else if (name === "Hat") {
            newItem = hats.find(item => item.id === itemId);
            if (cartHats.find(item => item.id === itemId) === undefined) {
                let newCartHats = [...cartHats, newItem];
                setCartHats(newCartHats);
            } else {
                newItem.amount++;
                let newCartHats = [...cartHats];
                setCartHats(newCartHats);
            }
        }

        let newTotalPrice = totalPrice + newItem.price;
        setTotalPrice(newTotalPrice);
        alert("The product has been successfully added");
    };


    // אירוע הסרת מוצר מסל קניות
    const removeItemFromCart = (itemId, name) => {
        let item2Remove;
        if (name === "T-shirt") {
            item2Remove = cartTshirt.find(item => item.id === itemId);
            if (item2Remove.amount === 1) {
                let newList = cartTshirt.filter(item => item.id !== itemId);
                setCartTshirt(newList);
            } else {
                item2Remove.amount--;
            }
        }
        else if (name === "Sweatpants") {
            item2Remove = cartSweatpants.find(item => item.id === itemId);
            if (item2Remove.amount === 1) {
                let newList = cartSweatpants.filter(item => item.id !== itemId);
                setCartSweatpants(newList);
            } else {
                item2Remove.amount--;
            }
        }
        else if (name === "Hat") {
            item2Remove = cartHats.find(item => item.id === itemId);
            if (item2Remove.amount === 1) {
                let newList = cartHats.filter(item => item.id !== itemId);
                setCartHats(newList);
            } else {
                item2Remove.amount--;
            }
        }

        let newTotalPrice = totalPrice - item2Remove.price;
        setTotalPrice(newTotalPrice);
    };


    // אירוע הוספת מוצר חדש לרשימת מוצרים
    const addNewItem2List = (type, url, price) => {
        if (type === "T-shirt") {
            let newItem = {
                id: Tshirts.length + 1,
                imageSrc: url,
                name: type,
                price: Number(price),
                amount: 1,
            };
            let newList = [...Tshirts, newItem];
            setTshirts(newList);
        }
        else if (type === "Hat") {
            let newItem = {
                id: hats.length + 1,
                imageSrc: url,
                name: type,
                price: Number(price),
                amount: 1,
            };
            let newList = [...hats, newItem];
            setHats(newList);
        }
        else if (type === "Sweatpants") {
            let newItem = {
                id: sweatpants.length + 1,
                imageSrc: url,
                name: type,
                price: Number(price),
                amount: 1,
            };
            let newList = [...sweatpants, newItem];
            setSweatpants(newList);
        }
        alert("The product has been successfully added");
    };


    // אירוע מחיקת מוצר מרשימת מוצרים
    const deleteItem = (itemId, name) => {
        if (name === "T-shirt") {
            let newList = Tshirts.filter(item => item.id !== itemId);
            setTshirts(newList);
        }
        else if (name === "Hat") {
            let newList = hats.filter(item => item.id !== itemId);
            setHats(newList);
        }
        else if (name === "Sweatpants") {
            let newList = hats.filter(item => item.id !== itemId);
            setSweatpants(newList);
        }
    };








    return (
        <MainContext.Provider value={{ Tshirts, sweatpants, hats, totalPrice, cartTshirt, cartHats, cartSweatpants, addItem2Cart, removeItemFromCart, addNewItem2List, deleteItem, users, setUsers }}>
            {props.children}
        </MainContext.Provider>
    )


}





// עמוד התחברות - נותן גישה לקניית מוצרים ואם חשבון מנהל אז לעמוד מנהל
// עמוד ניהול מוצרים - הוספה והסרה מהרשימות הראשיות
// עיצוב