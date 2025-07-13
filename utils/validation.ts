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

const userSchema = Joi.object({
  fullName: Joi.string().optional(),
  showName: Joi.string().min(3).required().messages({
    "string.empty": "لطفا اسم حساب کاربری تان را کامل کنید",
    "string.min": "نام حساب کاربری باید بیشتر از 2 کارکتر باشد",
  }),
  phone: Joi.string()
    .regex(
      /(((^(\+|00)(98)([- ]?))|^(0))(9\d{2})([- ]?)(\d{3})([- ]?)(\d{4})$)|((^(\+|00)(98)([- ]?))|^(0))([1-9]{2}[0-9]{8})$/
    ) // iran num
    .optional()
    .messages({
      "string.pattern.base": `شماره تلفن وارد شده صحیح نمی‌باشد`,
    }),
  bio: Joi.string().optional(),
  showSocials: Joi.object({
    email: Joi.boolean().optional(),
    phone: Joi.boolean().optional(),
  }),
});

const passwordUpdateSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    "string.empty": "لطفا رمز عبور خود را وارد نمایید",
    "string.min": "رمز عبور باید بیشتر از 8 کارکتر باشد",
  }),
  newPassword: Joi.string().min(8).required().messages({
    "string.empty": "لطفا رمز عبور خود را وارد نمایید",
    "string.min": "رمز عبور باید بیشتر از 8 کارکتر باشد",
  }),
  confirmPassword: Joi.any().valid(Joi.ref("newPassword")).required().messages({
    "any.only": "تکرار رمز عبور همخوانی ندارد",
  }),
});

export { loginSchema, registerSchema, userSchema, passwordUpdateSchema };
