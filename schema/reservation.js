import * as Yup from "yup";



export const rezarvatipSchema =Yub.oblect({
    fullName:Yub.string().required("Full name is required").min(3,"Full name must be at least 3 characters"),
})