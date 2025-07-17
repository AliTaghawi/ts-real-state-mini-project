import RadioInput from "@/elements/addFilePage/RadioInput";

const CategoryList = () => {
  return (
    <div>
      <p>نوع ملک:</p>
      <div className="grid grid-cols-3 min-[460px]:grid-cols-5 min-[640px]:grid-cols-3 min-[710px]:grid-cols-5 gap-4 mt-3 mb-8 max-w-[460px] ">
        <RadioInput
          title="ویلا"
          value="villa"
          name="category"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="آپارتمان"
          value="apartment"
          name="category"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="مغازه"
          value="store"
          name="category"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="دفتر"
          value="office"
          name="category"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
        <RadioInput
          title="زمین"
          value="land"
          name="category"
          checked
          blur
          error=""
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
    </div>
  );
};

export default CategoryList;
