import { useForm, SubmitHandler } from "react-hook-form";

function Form<T extends object>({ children, onSubmit }: FormProps<T>):JSX.Element {
    const { handleSubmit } = useForm<T>();

    return (
        <form
            onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        >
            {children}
        </form>
    );
}

interface FormProps<T extends object> {
    onSubmit?: SubmitHandler<T>;

    children: React.ReactNode;
}

export default Form;