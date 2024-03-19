import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ category }: IForm) => {
    setCategories((oldCateogries) => [
      ...oldCateogries,
      category,
    ]);
    setValue("category", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please write a category name",
        })}
        placeholder="Write a category name"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
