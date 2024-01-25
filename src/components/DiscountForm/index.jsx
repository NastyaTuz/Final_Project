import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import s from "./DiscountForm.module.css";
import { useForm } from "react-hook-form";

export default function DiscountForm() {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={s.form_container} onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        type="text"
        id="name"
        {...register("name", { required: "required field" })}
      />
      {errors.name && (
        <span className={s.error_text}>{errors.name.message}</span>
      )}

      <Input
        placeholder="Phone"
        type="tel"
        id="phone"
        {...register("phone", {
          required: "required field",
          maxLength: {
            value: 12,
            message: "Phone number should contain 12 numbers",
          },
        })}
      />
      {errors.phone && (
        <span className={s.error_text}>{errors.phone.message}</span>
      )}

      <Input
        placeholder="Email"
        type="email"
        id="email"
        {...register("email", {
          required: "required field",
          pattern: {
            message: "Wrong email",
            value:
              /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
          },
        })}
      />
      {errors.email && (
        <span className={s.error_text}>{errors.email.message}</span>
      )}

      <Button
        color={"dark"}
        width={"100%"}
        text={"Get a discount"}
        type="submit"
      />
    </form>
  );
}
