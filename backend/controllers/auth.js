import  {User} from "../models/user.js";
import bcryptjs from "bcryptjs";
import { generateverfivationCode } from "../utils/generateverfivationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import transporter from "../batabase/nodemailer.js";
export const signup = async (req, res) => {
    console.log(req.body);
    const { email, password, name} = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userAvailable = await User.findOne({ email });
        if (userAvailable) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verficationCode = generateverfivationCode();
        const Userdeails = new User({
            name,
            email,
            password: hashedPassword,
            verficationToken: verficationCode,
            verificationTokenExpireAt: Date.now() + 1000 * 60 * 60*24
        })
        await Userdeails.save();
        console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS);
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Account Verification",
            html: `<p>sfdsdxdf</p>`
          }
  
          try {
            await transporter.sendMail(mailOptions);
          } catch (error) {
            console.error(error);
            // Handle the error here
          }
        generateTokenAndSetCookie(res, Userdeails._id);
       
        res.status(201).json({ success: true, message: "User created successfully", user: {
            ...Userdeails._doc,
            password: undefined
        } });
        
    } catch (error) {
        res.status(500).json({ success: false,message: error.message });
    }
}

export const login = async (req, res) => {
    res.send("signup")
}

export const logout = async (req, res) => {
    res.send("signup")
}