import { Link, useNavigate } from "react-router-dom";
import { Card, Input, Container, Button, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { signin, errors } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) {
      navigate("/perfil");
    }
  });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        {errors &&
          errors.map((Error) => {
            <p className="bg-red-500 text-white p-2">{Error}</p>;
          })}
        <h1 className="text-4-1 font-bold my-2 text-center">Iniciar sesión</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Ingrese su email"
            {...register("email", {
              required: true,
            })}
          ></Input>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingrese su contraseña"
            {...register("password", {
              required: true,
            })}
          ></Input>
          <Button>Ingresar</Button>
        </form>
        <div className=" flex justify-between my-4">
          <p>No tienes cuenta?</p>
          <link to="/register">Registrate</link>
        </div>
      </Card>
    </Container>
  );
}

export default LoginPage;
