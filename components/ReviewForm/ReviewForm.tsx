import { ReviewFormProps } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from "./close.svg";
import { ButtonAppearance } from "../Button/Button.props";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";

export function ReviewForm({
  className,
  isOpened,
  productId,
  ...rest
}: ReviewFormProps): JSX.Element {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError("Что то пошло не так");
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e?.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...rest}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните Имя" },
          })}
          placeholder={"Имя"}
          error={errors.name}
          tabIndex={isOpened ? 0 : -1}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          className={styles.title}
          placeholder={"Заголовок отзыва"}
          error={errors.title}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            rules={{ required: { value: true, message: "Укажите рейтинг" } }}
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable={true}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
            name={"rating"}
            control={control}
          />
        </div>
        <Textarea
          {...register("description", {
            required: { value: true, message: "Заполните описание" },
          })}
          className={styles.description}
          placeholder={"Текст отзыва"}
          error={errors.description}
          tabIndex={isOpened ? 0 : -1}
        />
        <div className={styles.submit}>
          <Button
            appearance={ButtonAppearance.primary}
            tabIndex={isOpened ? 0 : -1}
          >
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {isError && (
        <div className={cn(styles.panel, styles.error)}>
          Что то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
}
