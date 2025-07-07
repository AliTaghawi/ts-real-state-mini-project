import Joi from "joi";

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "لطفا ایمیل خود را وارد نمایید",
    "string.email": "لطفا ایمیل معتبر وارد کنید",
  }),
  password: Joi.string().min(8).required().messages({
    "string.empty": "لطفا رمز عبور خود را وارد نمایید",
    "string.min": "رمز عبور باید بیشتر از 8 کارکتر باشد",
  }),
});

const registerSchema = loginSchema.append({
  confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
    "any.only": "تکرار رمز عبور همخوانی ندارد",
  }),
});

export { loginSchema, registerSchema };
