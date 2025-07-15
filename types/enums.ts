enum StatusMessages {
  USER_CREATED = "کاربر با موفقیت ایجاد شد",
  USER_UPDATED = "کاربر با موفقیت تغییر یافت",
  FILE_CREATED = "آگهی با موفقیت ثبت شد",
  USER_DELETED = "کاربر با موفقیت حذف شد",
  PASSWORD_UPDATED = "رمز عبور با موفقیت به روزرسانی شد",
  EXISTED_USER = "این حساب کاربری قبلا ایجاد شده!",
  UNAUTHORIZED = "لطفا وارد حساب کاربری خود شوید!",
  FORBIDDEN = "دسترسی شما محدود شده است!",
  NOTFOUND_USER = "کاربر یافت نشد، لطفا اول ثبت نام کنید!",
  NOTFOUND_FILE = "آگهی مورد نظر یافت نشد!",
  WRONG_EMAIL_PASSWORD = "ایمیل یا رمز عبور اشتباه است!",
  WRONG_PASSWORD = "رمز عبور اشتباه است!",
  INVALID_DATA = "ورودی نامعتبر",
  SERVER_ERROR = "مشکلی در سرور پیش آمده لطفا دوباره امتحان کنید!",
}

enum StatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOTFOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
}

export { StatusCodes, StatusMessages };
