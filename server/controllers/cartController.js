import userModel from '../models/userModel.js'

// add to cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = user.cartData;

        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId]++;
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Added To Cart"});

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}



// remove from cart
const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = user.cartData;
        
        if(cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Removed From Cart"});

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}


// fetch cart data
const getCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        let cartData = user.cartData;

        res.json({success: true, cartData});

    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}


export { addToCart, removeFromCart, getCart }